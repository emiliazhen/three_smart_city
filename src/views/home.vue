<template>
  <div class="home">
    <header>智慧城市管理系统平台</header>
    <div class="main">
      <div class="left">
        <div class="cityEvent" v-for="(item, key) in dataInfo" :key="key">
          <h3>
            <span>{{ item.name }}</span>
          </h3>
          <h1>
            <img :src="barSvg" class="icon" />
            <span>{{ item.number.toFixed(0) }}（{{ item.unit }}）</span>
          </h1>
          <div class="footerBoder"></div>
        </div>
      </div>
      <div class="right">
        <div class="cityEvent list">
          <h3>
            <span>事件列表</span>
          </h3>
          <ul>
            <li v-for="(item, i) in eventList" :class="{ active: currentActive == i }" @click="toggleEvent(i)" :key="i">
              <h1>
                <div>
                  <img class="icon" :src="liImgSrcObject[item.name]" />
                  <span>{{ item.name }}</span>
                </div>
                <span class="time">{{ item.time }}</span>
              </h1>
              <p>{{ item.type }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <scene />
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { GET_SMARTCITY_INFO, GET_SMARTCITY_LIST } from '@/apis'
import gsap from 'gsap'
import barSvg from '@/assets/image/bar.svg'
import electricSvg from '@/assets/image/electric.svg'
import fireSvg from '@/assets/image/fire.svg'
import policeSvg from '@/assets/image/police.svg'
import Scene from '@/components/Scene.vue'

const liImgSrcObject = {
  电力: electricSvg,
  火警: fireSvg,
  治安: policeSvg,
} as { [key: string]: string }

const dataInfo = reactive({
  iot: { number: 0 },
  event: { number: 0 },
  power: { number: 0 },
  test: { number: 0 },
} as { [key: string]: { name?: string; number: number; unit?: string } })
const eventList = ref([])
const currentActive = ref(0)
// 获取列表
const getEventList = async () => {
  const res = await GET_SMARTCITY_LIST()
  eventList.value = res.data.list
}

// 获取信息
const getSmartInfo = async () => {
  const res = await GET_SMARTCITY_INFO()
  for (const key in res.data.data) {
    dataInfo[key].name = res.data.data[key].name
    dataInfo[key].unit = res.data.data[key].unit
    gsap.to(dataInfo[key], {
      number: res.data.data[key].number,
      duration: 1,
    })
  }
}

onMounted(() => {
  getEventList()
  getSmartInfo()
  setInterval(() => {
    getEventList()
    getSmartInfo()
  }, 2000)
})
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 101;
  left: 0;
  top: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
}
header {
  width: 19.2rem;
  line-height: 1rem;
  height: 1rem;
  background-image: url(@/assets/image/title.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  color: rgb(226, 226, 255);
  font-size: 0.4rem;
}
.main {
  flex: 1;
  width: 19.2rem;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 4rem;
  background-image: url(@/assets/image/line_img.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 0;
}

.right {
  width: 4rem;
  background-image: url(@/assets/image/line_img.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 0;
}
.cityEvent {
  position: relative;
  width: 3.5rem;
  /* height: 3rem; */
  margin-bottom: 0.5rem;
  background-image: url(@/assets/image/bg_img03.png);
  background-repeat: repeat;
}

.cityEvent::before {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: 0;
  border-top: 4px solid rgb(34, 133, 247);
  border-left: 4px solid rgb(34, 133, 247);
  content: '';
  display: block;
}

.cityEvent::after {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  right: 0;
  top: 0;
  border-top: 4px solid rgb(34, 133, 247);
  border-right: 4px solid rgb(34, 133, 247);
  content: '';
  display: block;
}
.footerBorder {
  position: absolute;
  bottom: 0;
  bottom: 0;
  width: 3.5rem;
  height: 0.4rem;
}
.footerBorder::before {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: 0;
  border-bottom: 4px solid rgb(34, 133, 247);
  border-left: 4px solid rgb(34, 133, 247);
  content: '';
  display: block;
}
.icon {
  width: 40px;
  height: 40px;
}

h1 {
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.3rem 0.3rem;
  justify-content: space-between;
  font-size: 0.3rem;
}
h3 {
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.3rem;
  font-size: 0.2rem;
}

h1 > div {
  display: flex;
  align-items: center;
}
h1 span.time {
  font-size: 0.2rem;
  font-weight: normal;
}

.cityEvent li > p {
  color: #eee;
  font-size: 0.2rem;
  padding: 0rem 0.3rem 0.3rem;
  margin: 0;
}
.list h1 {
  padding: 0.1rem 0.3rem;
}
.cityEvent.list ul {
  pointer-events: auto;
  cursor: pointer;
}

.cityEvent li.active h1 {
  color: red;
}
.cityEvent li.active p {
  color: red;
}

ul,
li {
  list-style: none;
}
</style>
