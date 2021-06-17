import * as THREE from 'three';

export const createCamera = (width, height) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.x = 0;
    camera.position.y = 2;
    camera.position.z = 5;

    return camera;
};
