import * as THREE from 'three';

const light = new THREE.PointLight('white', 1, 4);
light.castShadow = true;
light.shadow.mapSize.width = 256;
light.shadow.mapSize.height = 256;
light.shadow.camera.far = 7;

light.position.set(0, 2.2, 2.7);

export const towerLight = light;