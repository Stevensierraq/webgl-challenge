import * as THREE from 'three';

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const wallColorTexture = textureLoader.load('/textures/wall/color.jpg');
const wallNormalTexture = textureLoader.load('/textures/wall/normal.jpg');
const wallOcclusionTexture = textureLoader.load('/textures/wall/occlusion.jpg');
const wallRoughnessTexture = textureLoader.load('/textures/wall/roughtness.jpg');

const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(4, 1.25, 1),
    new THREE.MeshStandardMaterial({
        map: wallColorTexture,
        displacementScale: 0.1,
        aoMap: wallOcclusionTexture,
        normalMap: wallNormalTexture,
        roughnessMap: wallRoughnessTexture
    })
);

mesh.castShadow = true;
mesh.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(mesh.geometry.attributes.uv.array, 2));
mesh.rotation.z = Math.PI * 0.5

export const towerBase = mesh;
