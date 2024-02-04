<template>
  <div class="scene" ref="threeRef"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps, watch, PropType } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'
import texture1 from '@/assets/textures/1.jpg'
import texture2 from '@/assets/textures/2.jpg'
import texture3 from '@/assets/textures/3.jpg'
import texture4 from '@/assets/textures/4.jpg'
import texture5 from '@/assets/textures/5.jpg'
import texture6 from '@/assets/textures/6.jpg'
import cityModel from '@/assets/model/city.glb'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import mapZ11 from '@/assets/image/z_11.png'
import flyLineVertex from '@/assets/shader/flyLine/vertex.glsl'
import flyLineFragment from '@/assets/shader/flyLine/fragment.glsl'
import lightWallVertex from '@/assets/shader/lightWall/vertex.glsl'
import lightWallFragment from '@/assets/shader/lightWall/fragment.glsl'
import lightRadarVertex from '@/assets/shader/lightRadar/vertex.glsl'
import lightRadarFragment from '@/assets/shader/lightRadar/fragment.glsl'
import warningFireImg from '@/assets/image/warning_fire.png'
import warningPoliceImg from '@/assets/image/warning_police.png'
import warningElectricImg from '@/assets/image/warning_electric.png'

interface EventInterface {
  name: string
  position: { x: number; y: number }
  id: string
}

const props = defineProps({
  eventList: {
    type: Array as PropType<Array<EventInterface>>,
    default: () => [],
    required: true,
  },
  currentEventId: {
    type: String,
    default: '',
  },
})
// 枚举
enum WaringType {
  fire,
  police,
  electric,
}
const WaringImgObject = {
  [WaringType.fire]: warningFireImg,
  [WaringType.police]: warningPoliceImg,
  [WaringType.electric]: warningElectricImg,
}
// 聊天会话最后消息处理
const valueToWaringType = (value: string) => {
  switch (value) {
    case '火警':
      return WaringType.fire
    case '治安':
      return WaringType.police
    case '电力':
      return WaringType.electric
    default:
      return WaringType.fire
  }
}
// 更改材质
const modifyCityMaterial = (mesh: any) => {
  mesh.material.onBeforeCompile = (shader: any) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <dithering_fragment>',
      `
        #include <dithering_fragment>
        //#end#
    `
    )
    addGradationColor(shader, mesh)
    addSpread(shader)
    addLightLine(shader)
    addToTopLine(shader)
  }
}

// 添加渐变颜色
const addGradationColor = (shader: any, mesh: any) => {
  // 需先计算当前几何体的的边界矩形
  mesh.geometry.computeBoundingBox()
  const { min, max } = mesh.geometry.boundingBox
  shader.uniforms.uTopColor = {
    value: new THREE.Color('#aaaeff'),
  }
  //   获取物体的高度差
  shader.uniforms.uDiffHeight = {
    value: max.y - min.y,
  }
  shader.vertexShader = shader.vertexShader.replace(
    '#include <common>',
    `
      #include <common>
      varying vec3 vPosition;
    `
  )

  shader.vertexShader = shader.vertexShader.replace(
    '#include <begin_vertex>',
    `
      #include <begin_vertex>
      vPosition = position;
    `
  )

  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <common>',
    `
      #include <common>

      uniform vec3 uTopColor;
      uniform float uDiffHeight;
      varying vec3 vPosition;
    `
  )
  shader.fragmentShader = shader.fragmentShader.replace(
    '//#end#',
    `

      vec4 distGradColor = gl_FragColor;

      // 设置混合的百分比
      float gradMix = (vPosition.y+uDiffHeight/2.0)/uDiffHeight;

      // 计算出混合颜色
      vec3 gradMixColor = mix(distGradColor.xyz,uTopColor,gradMix);
      gl_FragColor = vec4(gradMixColor,1);
        //#end#

      `
  )
}

// 添加扩散
const addSpread = (shader: any, center = new THREE.Vector2(0, 0)) => {
  // 设置扩散的中心点
  shader.uniforms.uSpreadCenter = { value: center }
  //   扩散的时间
  shader.uniforms.uSpreadTime = { value: -2000 }
  //   设置条带的宽度
  shader.uniforms.uSpreadWidth = { value: 40 }

  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <common>',
    `
      #include <common>

      uniform vec2 uSpreadCenter;
      uniform float uSpreadTime;
      uniform float uSpreadWidth;
      `
  )

  shader.fragmentShader = shader.fragmentShader.replace(
    '//#end#',
    `
    // 扩散半径
     float spreadRadius = distance(vPosition.xz,uSpreadCenter);
    //  扩散范围的函数 0-1的值 -x²抛物线，
    float spreadIndex = -(spreadRadius-uSpreadTime)*(spreadRadius-uSpreadTime)+uSpreadWidth;
    // 大于0时混合计算
    if(spreadIndex>0.0){
        gl_FragColor = mix(gl_FragColor,vec4(1,1,1,1),spreadIndex/uSpreadWidth);
    }

    //#end#
    `
  )

  gsap.to(shader.uniforms.uSpreadTime, {
    value: 800,
    duration: 3,
    ease: 'none',
    repeat: -1,
  })
}

// 添加光带
const addLightLine = (shader: any) => {
  //   扩散的时间
  shader.uniforms.uLightLineTime = { value: -1500 }
  //   设置条带的宽度
  shader.uniforms.uLightLineWidth = { value: 200 }

  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <common>',
    `
        #include <common>
        uniform float uLightLineTime;
        uniform float uLightLineWidth;
        `
  )

  shader.fragmentShader = shader.fragmentShader.replace(
    '//#end#',
    `
      float LightLineMix = -(vPosition.x+vPosition.z-uLightLineTime)*(vPosition.x+vPosition.z-uLightLineTime)+uLightLineWidth;

      if(LightLineMix>0.0){
          gl_FragColor = mix(gl_FragColor,vec4(0.8,1.0,1.0,1),LightLineMix /uLightLineWidth);

      }
      //#end#
      `
  )

  gsap.to(shader.uniforms.uLightLineTime, {
    value: 1500,
    duration: 5,
    ease: 'none',
    repeat: -1,
  })
}

const addToTopLine = (shader: any) => {
  //   扩散的时间
  shader.uniforms.uToTopTime = { value: 0 }
  //   设置条带的宽度
  shader.uniforms.uToTopWidth = { value: 40 }

  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <common>',
    `
          #include <common>


          uniform float uToTopTime;
          uniform float uToTopWidth;
          `
  )

  shader.fragmentShader = shader.fragmentShader.replace(
    '//#end#',
    `
        float ToTopMix = -(vPosition.y-uToTopTime)*(vPosition.y-uToTopTime)+uToTopWidth;

        if(ToTopMix>0.0){
            gl_FragColor = mix(gl_FragColor,vec4(0.8,0.8,1,1),ToTopMix /uToTopWidth);

        }

        //#end#
        `
  )

  gsap.to(shader.uniforms.uToTopTime, {
    value: 500,
    duration: 3,
    ease: 'none',
    repeat: -1,
  })
}
const threeRef = ref<HTMLDivElement | null>(null)
// 初始化场景
const scene = new THREE.Scene()
// 场景天空盒
const textureCubeLoader = new THREE.CubeTextureLoader()
const textureCube = textureCubeLoader.load([texture1, texture2, texture3, texture4, texture5, texture6])

scene.background = textureCube
scene.environment = textureCube

const camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerHeight, 1, 50000)
// 设置相机位置
// object3d具有position，属性是1个3维的向量
camera.position.set(5, 10, 15)

// 初始化渲染器
const renderer = new THREE.WebGLRenderer({
  // 抗锯齿
  antialias: true,
  // logarithmicDepthBuffer: true,
})
// 设置渲染尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
// 初始化控制器
const controls = new OrbitControls(camera, renderer.domElement)
// 设置控制器阻尼
controls.enableDamping = true
controls.maxPolarAngle = Math.PI / 2
controls.minPolarAngle = 0

// 加入辅助轴，帮助我们查看3维坐标轴
// const axesHelper = new THREE.AxesHelper(5)
// 添加辅助坐标轴
// scene.add(axesHelper)

// const clock = new THREE.Clock()
const animationFunction = () => {
  controls.update()
  // const time = clock.getElapsedTime()
  requestAnimationFrame(animationFunction)
  // 使用渲染器渲染相机看这个场景的内容渲染出来
  renderer.render(scene, camera)
}
// 更新摄像头
camera.aspect = window.innerWidth / window.innerHeight
//   更新摄像机的投影矩阵
camera.updateProjectionMatrix()

// 创建城市
const gltfLoader = new GLTFLoader()
gltfLoader.load(cityModel, (gltf: any) => {
  gltf.scene.traverse((item: any) => {
    if (item.type == 'Mesh') {
      const cityMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x0c0e33),
      })
      item.material = cityMaterial
      modifyCityMaterial(item)
      if (item.name == 'Layerbuildings') {
        // 边缘线
        const edgesGeometry = new THREE.EdgesGeometry(item.geometry)
        const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff })
        const meshLine = {
          geometry: edgesGeometry,
          material: edgesMaterial,
          mesh: new THREE.LineSegments(edgesGeometry, edgesMaterial),
        }
        // 线框需要跟物体的缩放一致，再乘以一个倍数稍微大一点点，以避免与物体重叠部分的线条产生虚线
        const size = item.scale.x * 1.0001
        meshLine.mesh.scale.set(size, size, size)
        scene.add(meshLine.mesh)
      }
    }
  })
  scene.add(gltf.scene)
})

// 监听屏幕大小改变的变化，设置渲染的尺寸
window.addEventListener('resize', () => {
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight
  //   更新摄像机的投影矩阵
  camera.updateProjectionMatrix()

  //   更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight)
  //   设置渲染器的像素比例
  renderer.setPixelRatio(window.devicePixelRatio)
})
onMounted(() => {
  threeRef.value!.appendChild(renderer.domElement)
  const flyLine = new FlyLine()
  scene.add(flyLine.mesh)
  animationFunction()
})
// 飞线
class FlyLine {
  mesh: THREE.Mesh
  texture: THREE.Texture
  constructor() {
    const linePoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(5, 5, 0), new THREE.Vector3(14, 0, 0)]
    const lineCurve = new THREE.CatmullRomCurve3(linePoints)
    const geometry = new THREE.TubeGeometry(lineCurve, 100, 0.4, 2, false)
    const textureLoader = new THREE.TextureLoader()
    this.texture = textureLoader.load(mapZ11)
    // 包含正反面，所以需要Y轴再重复次
    this.texture.repeat.set(1, 2)
    // 纹理在水平上如何包裹
    this.texture.wrapS = THREE.RepeatWrapping
    // 纹理在垂直上如何包裹
    this.texture.wrapT = THREE.MirroredRepeatWrapping
    const material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
    })
    this.mesh = new THREE.Mesh(geometry, material)
    gsap.to(this.texture.offset, {
      x: -1,
      duration: 1,
      repeat: -1,
      ease: 'none',
    })
  }
  remove() {
    this.mesh.remove()
    this.mesh.removeFromParent()
    this.mesh.geometry.dispose()
    ;(this.mesh.material as any).dispose()
  }
}

// 飞线-着色器方法实现
class FlyLineShader {
  id: string
  mesh: THREE.Points
  shaderMaterial: THREE.ShaderMaterial
  constructor(xzPosition: { x: number; z: number }, id: string) {
    this.id = `flyLineShader${id}`
    const linePoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(xzPosition.x / 2, 4, xzPosition.z / 2), new THREE.Vector3(xzPosition.x, 0, xzPosition.z)]
    const lineCurve = new THREE.CatmullRomCurve3(linePoints)
    const points = lineCurve.getPoints(1000)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    this.shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: {
          value: 0,
        },
      },
      vertexShader: flyLineVertex,
      fragmentShader: flyLineFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const aSizeArray = new Float32Array(points.length)
    for (let i = 0; i < aSizeArray.length; i++) {
      aSizeArray[i] = i
    }
    geometry.setAttribute('aSize', new THREE.BufferAttribute(aSizeArray, 1))
    this.mesh = new THREE.Points(geometry, this.shaderMaterial)
    gsap.to(this.shaderMaterial.uniforms.uTime, {
      value: 1000,
      duration: 1,
      repeat: -1,
      ease: 'none',
    })
  }
  remove() {
    this.mesh.remove()
    this.mesh.removeFromParent()
    this.mesh.geometry.dispose()
    ;(this.mesh.material as any).dispose()
  }
}

// 光墙
class LightWall {
  id: string
  mesh: THREE.Mesh
  material: THREE.ShaderMaterial
  constructor(xzPosition: { x: number; z: number }, id: string) {
    this.id = `lightWall${id}`
    const geometry = new THREE.CylinderGeometry(2, 2, 2, 32, 1, true)
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uDiffHeight: {
          value: 0,
        },
      },
      vertexShader: lightWallVertex,
      fragmentShader: lightWallFragment,
      transparent: true,
      side: THREE.DoubleSide,
    })
    this.mesh = new THREE.Mesh(geometry, this.material)
    this.mesh.position.set(xzPosition.x, 1.5, xzPosition.z)
    // 需先计算当前几何体的的边界矩形
    this.mesh.geometry.computeBoundingBox()
    const { min, max } = this.mesh.geometry.boundingBox!
    // 获取物体的高度差
    this.material.uniforms.uDiffHeight = {
      value: max.y - min.y,
    }
    gsap.to(this.mesh.scale, {
      x: 1.2,
      z: 1.2,
      duration: 1,
      repeat: -1,
      yoyo: true,
    })
  }
  remove() {
    this.mesh.remove()
    this.mesh.removeFromParent()
    this.mesh.geometry.dispose()
    ;(this.mesh.material as any).dispose()
  }
}

// 雷达
class LightRadar {
  id: string
  mesh: THREE.Mesh
  material: THREE.ShaderMaterial
  constructor(position: { x: number; z: number }, id: string) {
    this.id = `lightRadar${id}`
    const geometry = new THREE.PlaneGeometry(2, 2)
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: {
          value: 0,
        },
      },
      vertexShader: lightRadarVertex,
      fragmentShader: lightRadarFragment,
      transparent: true,
      side: THREE.DoubleSide,
    })
    this.mesh = new THREE.Mesh(geometry, this.material)
    this.mesh.position.set(position.x, 0.4, position.z)
    this.mesh.rotation.x = Math.PI / 2
    gsap.to(this.material.uniforms.uTime, {
      value: 1,
      duration: 2,
      repeat: -1,
      ease: 'none',
    })
  }
  remove() {
    this.mesh.remove()
    this.mesh.removeFromParent()
    this.mesh.geometry.dispose()
    ;(this.mesh.material as any).dispose()
  }
}

// 警告标识
class WarningSprite {
  id: string
  mesh: THREE.Sprite
  raycaster: THREE.Raycaster
  constructor(type: WaringType, position: { x: number; z: number }, id: string) {
    this.id = `warningSprite${id}`
    const textureLoader = new THREE.TextureLoader()
    const map = textureLoader.load(WaringImgObject[type])
    const material = new THREE.SpriteMaterial({
      map,
      transparent: true,
      depthTest: false,
    })
    this.mesh = new THREE.Sprite(material)
    this.mesh.position.set(position.x, 3.5, position.z)
    // 创建射线
    this.raycaster = new THREE.Raycaster()

    // 监听点击事件
    window.addEventListener('click', (e) => {
      ;(e as any).mesh = this.mesh
      ;(e as any).eventId = this.id
      this.raycaster.setFromCamera(new THREE.Vector2((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1)), camera)
      const intersects = this.raycaster.intersectObject(this.mesh)
      if (intersects.length > 0) {
        const index = props.eventList.findIndex((v) => {
          const reg = new RegExp(`${v.id}$`)
          return reg.test((e as any).eventId)
        })
        console.log(index)
        if (index !== -1) {
          const { x, y: z } = props.eventList[index].position
          gsap.to(controls.target, {
            x: x / 5 - 10,
            z: z / 5 - 10,
            duration: 1,
          })
        }
      }
    })
  }
  remove() {
    this.mesh.remove()
    this.mesh.removeFromParent()
    this.mesh.geometry.dispose()
    ;(this.mesh.material as any).dispose()
  }
}
const eventEntries: Array<WarningSprite | LightRadar | LightWall | FlyLineShader> = []
watch(
  () => props.eventList,
  (nV: Array<EventInterface>) => {
    eventEntries.forEach((item) => item.remove())
    nV.forEach(({ name, position, id }) => {
      const type = valueToWaringType(name)
      const xzPosition = {
        x: position.x / 5 - 10,
        z: position.y / 5 - 10,
      }
      if (type === WaringType.fire) {
        const lightWall = new LightWall(xzPosition, id)
        eventEntries.push(lightWall)
        scene.add(lightWall.mesh)
      } else if (type === WaringType.police) {
        const flyLineShader = new FlyLineShader(xzPosition, id)
        eventEntries.push(flyLineShader)
        scene.add(flyLineShader.mesh)
      } else if (type === WaringType.electric) {
        const lightRadar = new LightRadar(xzPosition, id)
        eventEntries.push(lightRadar)
        scene.add(lightRadar.mesh)
      }
      const warningSprite = new WarningSprite(type, xzPosition, id)
      eventEntries.push(warningSprite)
      scene.add(warningSprite.mesh)
    })
  },
  {
    deep: true,
    immediate: true,
  }
)
watch(
  () => props.currentEventId,
  (nV: string) => {
    if (nV) {
      const reg = new RegExp(`${nV}$`)
      eventEntries.forEach((v) => {
        if (reg.test(v.id)) {
          v.mesh.visible = true
        } else {
          v.mesh.visible = false
        }
      })
      const index = props.eventList.findIndex((v) => v.id === nV)
      if (index !== -1) {
        const { x, y: z } = props.eventList[index].position
        gsap.to(controls.target, {
          x: x / 5 - 10,
          z: z / 5 - 10,
          duration: 1,
        })
      }
    }
  }
)
</script>

<style scoped>
.scene {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
}
</style>
