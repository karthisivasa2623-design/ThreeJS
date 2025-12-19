import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Clock
const clock = new THREE.Clock()

//Animation

const tick = () => {

    //CLock
    const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)
    

    // Update Object 
    // mesh.position.x -= 0.01
    // mesh.position.y += 0.01
    mesh.rotation.x += 0.00
    // mesh.rotation.y += 0.01 * elapsedTime
    mesh.rotation.y = elapsedTime * Math.PI * 1
    camera.position.x = Math.sin(elapsedTime * Math.PI * 1)
    camera.position.y = Math.cos(elapsedTime * Math.PI * 1)

    camera.lookAt(mesh.position)
    //REnder
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}
tick()