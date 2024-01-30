varying vec3 vPosition;

uniform float uDiffHeight;

void main(){
  // 混合颜色
  float mixColor = (vPosition.y + uDiffHeight / 2.0) / uDiffHeight;
        gl_FragColor = vec4(0.5,0.84,0.9,1.0-mixColor);
}