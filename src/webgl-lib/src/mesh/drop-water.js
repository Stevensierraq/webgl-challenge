import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { defaultMaterial } from './material';

const textureLoader = new THREE.TextureLoader();

const environmentMapTexture = textureLoader.load('/background/nz.png');

const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
const sphereMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.1,
    roughness: 1,
    envMap: environmentMapTexture
});

export const createDropWeater = (position, radius, collideCallback) => {
    // Three.js mesh
    const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    mesh.castShadow = true;
    mesh.scale.set(radius, radius, radius);
    mesh.position.copy(position);

    // Cannon.js body
    const shape = new CANNON.Sphere(radius);

    const body = new CANNON.Body({
        mass: 1,
        position: new CANNON.Vec3(0, 3, 0),
        shape: shape,
        material: defaultMaterial
    });
    body.position.copy(position);
    body.addEventListener('collide', collideCallback);

    return {body, mesh}
};
