import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { barometer } from './mesh/barometer';
import { towerBase } from './mesh/tower-base';
import { towerRoof } from './mesh/tower-roof';
import { towerLight } from './mesh/tower-light';

import { floor } from './mesh/floor';
import { firefly} from './mesh/firefly';
import { addFontTexture } from './mesh/text';

import { sleep } from './utils';
import { createBushes } from './mesh/bushes';
import { createCamera } from './mesh/camera';
import { moonLight } from './mesh/moon-light';
import { collisionCallback } from './callbacks';
import { ambientLight } from './mesh/ambient-light';
import { createDropWeater } from './mesh/drop-water';

import { animateFireflies } from './animations/fireflies';

// Sizes
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Values
const values = {
    temperature: 10,
    pressure: 1
};

let objectsToUpdate = [];
const fontObjectToUpdate = {};

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const canvas = document.getElementById('webgl');

// Physics
const world = new CANNON.World()
world.broadphase = new CANNON.SAPBroadphase(world)
world.allowSleep = true
world.gravity.set(0, - 6, 0)

// Body Floor
world.addBody(floor.body);

// Scene
const scene = new THREE.Scene()

// Handle Rain
const resetRain = () =>{
    for(const object of objectsToUpdate) {
        // Remove body
        object.body.removeEventListener('collide', collisionCallback);
        world.removeBody(object.body);

        // Remove mesh
        scene.remove(object.mesh);
    };

    objectsToUpdate = [];
};

export const createRain = (amount) => {
    resetRain();
    const amountOfRain = amount + (values.pressure * 0.5);

    async function addDropWater(amountOfRain, index = 1) {
        if(amountOfRain === index) return 0;

        const { mesh, body} = createDropWeater(
                {
                    x: (Math.random() - 0.5) * 8,
                    y: 4,
                    z: (Math.random() - 0.5) * 8
                },
                Math.random() * 0.09,
                collisionCallback
            );
        scene.add(mesh);
        world.addBody(body);
        objectsToUpdate.push({ mesh, body});
            
        await sleep(120)
        addDropWater(amountOfRain, index + 1);
    }

    addDropWater(amountOfRain);
};

// Create tower
const tower = new THREE.Group()
tower.add(
    towerBase,
    towerRoof,
    towerLight,
    barometer.mesh,
    barometer.arrow
);
tower.position.x = 0;
tower.position.z = 2;

// Add Bushes
const bushesGroup = new THREE.Group();
createBushes(50, bushesGroup);

// Add Font mesh
const setBodyAndMesh = (body, mesh) => {
    scene.add(mesh);
    world.addBody(body);

    fontObjectToUpdate.body = body;
    fontObjectToUpdate.mesh = mesh;
};
addFontTexture('Adidas', setBodyAndMesh);

// Create Fireflies
const firefly1 = firefly('#3671B3');
const firefly2 = firefly('#ede734');
const firefly3 = firefly('white');

// Create Camara
const camera = createCamera(sizes.width, sizes.height);

scene.add(
    tower,
    camera,
    firefly1,
    firefly2,
    firefly3,
    moonLight, 
    floor.mesh,
    bushesGroup,
    ambientLight
);

scene.background = new THREE.Color(`#${values.temperature * 3}CCFF`);

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.shadowMap.enabled = true;
renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const arrowPosition = barometer.getArrowPosition();
const clock = new THREE.Clock();
let oldElapsedTime = 0;

export const webGlRender = () =>
{
    scene.background = new THREE.Color(`#${values.temperature * 2}CCFF`);

    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - oldElapsedTime;
    oldElapsedTime = elapsedTime;

    // Update physics
    world.step(1 / 60, deltaTime, 3)

    // Move arrow barometer
    barometer.arrow.rotation.z = arrowPosition(values.pressure);

    // Fireflies animation
    animateFireflies(firefly1, firefly2, firefly3, elapsedTime)

    // Update rain
    for(const object of objectsToUpdate) {
        object.mesh.position.copy(object.body.position)
        object.mesh.quaternion.copy(object.body.quaternion)
    }

    // Update fog
    scene.fog= new THREE.Fog('white', 1, values.temperature);

    // Update FontGeometry behaviour
    if(fontObjectToUpdate.mesh && fontObjectToUpdate.body){
        fontObjectToUpdate.mesh.position.copy(fontObjectToUpdate.body.position);
        fontObjectToUpdate.mesh.quaternion.copy(fontObjectToUpdate.body.quaternion);
    };

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(webGlRender)
};

export function setTemperature(value) {
    values.temperature = value;
};

export function setPressure(value) {
    values.pressure = value;
};
