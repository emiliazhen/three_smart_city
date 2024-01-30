attribute float aSize;
varying float vSize;

uniform float uTime;

void main(){
  vec4 viewPosition = viewMatrix * modelMatrix * vec4(position,1.0);
  gl_Position = projectionMatrix * viewPosition;
  vSize = aSize - uTime;
  // uTime 0~1000, aSize 0~1000, vSize -1000 ~ 1000
  if(vSize < 0.0){
    // 负数时 y=x + 1000
    vSize = vSize + 1000.0;
  }
  // 整体长度减去一半，给彗星飞线留空隙
  vSize = (vSize - 500.0) * 0.01;
  gl_PointSize = vSize;
}
