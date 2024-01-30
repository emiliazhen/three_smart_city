varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

mat2 rotate2d(float _angle){
  return mat2(cos(_angle),-sin(_angle),sin(_angle),cos(_angle));
}
void main(){
  vec2 newUv = rotate2d(uTime*6.28)*(vUv-0.5) + 0.5;
  // 距离中间点距离大于半径的为1，其他0， 用1减去该值，得到圆值1，其他0
  float alpha = 1.0 - step(0.5,distance(newUv,vec2(0.5)));
  // 圆心角
  float angle = atan(newUv.x-0.5, newUv.y-0.5);
  float strength = (angle + 3.14)/ 6.28;
  gl_FragColor = vec4(1,0,0,alpha * strength);
}