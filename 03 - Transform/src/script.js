import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// console.log('Helo')
// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// // mesh.position.x= 0.7 // Left Right moving
// // mesh.position.y = -0.6 // Up Down moving
// // mesh.position.z = 1 // Fornt Back MOving
// mesh.position.set(0.7, -0.6, 1)
// mesh.scale.set(2, 0.2, 0.5)
// // mesh.rotation.set(0, Math.PI * 0.5, 0)
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.z = 0
const set1 = new THREE.Group()
set1.position.y = 1 //moving the full set up
set1.scale.y = 2 // scaling the total group 
set1.rotation.y = 1 // ortating the total group 
scene.add(set1)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
cube1.position.set(0,0,0)//red box stay in the middle
set1.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
cube2.position.set(2,0,0)// gree box went to the right 
set1.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube3.position.set(-2,0,0) // blue box went to the left 
set1.add(cube3)

/**
 * Axes helper
 */
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.set(1,1,3)
scene.add(camera)

//camera.lookAt(mesh.position)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)