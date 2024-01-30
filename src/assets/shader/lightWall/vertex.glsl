varying vec3 vPosition;

void main(){
  vec4 viewPosition = viewMatrix * modelMatrix * vec4(position,1.0);
  gl_Position = projectionMatrix * viewPosition;
    vPosition = position;
}
