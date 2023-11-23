import * as THREE from 'three';

const scene = new THREE.Scene();

//three different camera in threejs, one among them is PerspectiveCamera
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 0.1 , 100);

const renderer = new THREE.WebGL1Renderer();

renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement); //adds renderer element to html dom

//creating a cube with box geometry
const geometry = new THREE.BoxGeometry(3 , 3, 3);
const material = new THREE.MeshBasicMaterial({color : 0x00ff00}); //here where we add a property

//MESH is an object that takes a geometry and applies material to it and insert scene and move freely around.
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;


//animating the cube
function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.03;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

