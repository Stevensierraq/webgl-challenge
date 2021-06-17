import * as THREE from 'three';

const light = new THREE.DirectionalLight('#b9d5ff', 1);
light.castShadow = true;
light.shadow.mapSize.width = 256;
light.shadow.mapSize.height = 256;
light.shadow.camera.far = 15;

export const moonLight = light;
