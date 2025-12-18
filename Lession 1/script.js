import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

//scene
const scene = new THREE.Scene()

//Objects
const cube = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: '#ff0000'})
const mesh = new THREE.Mesh(cube,material)
scene.add(mesh)

//Camera 
const size = { width:800, height: 600}
const camera =new THREE.PerspectiveCamera(75,size.width/size.height)
camera.position.z = 3
scene.add(camera)

//WebGl Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(size.width,size.height)

renderer.render(scene,camera)