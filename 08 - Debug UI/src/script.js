import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'lil-gui'


/**
 * Debug
 */
const gui = new dat.GUI()

function spin(){

}


//color formate
const parameters = {
    color: '#ffffff',
    closer: 0xff0000,
    spin:() =>{
        console.log('spin')
        gsap.to(mesh.rotation,{ duration: 0.5, y: mesh.rotation.y + Math.PI })
    }
}
gui
    .addColor(parameters, 'color') 
    .onChange(() =>{
        material.color.set(parameters.color)
        console.log('color is udpating')
    })

gui
    .addColor(parameters, 'closer')

gui
    .add(parameters, 'spin')
    .name('Spin')

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: parameters.color})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
mesh.position.set(0, 0, 0)

gui.add(mesh.position, 'x', -3, 3, 0.01).name('Movmeent L/R')

gui.add(mesh.position, 'y').min(-3).max(3).step(0.01).name('Elevation')

gui
    .add(mesh.position, 'z')
    .min(-3)
    .max(3)
    .step(0.01)
    .name('Scale / move F/B')

gui
    .add(mesh, 'visible')

gui
    // .add(material, 'wireframe')
    //or
    .add(mesh.material, 'wireframe')

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()