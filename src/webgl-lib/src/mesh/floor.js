import * as THREE from 'three';
import * as CANNON from 'cannon-es';

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const grassColorTexture = textureLoader.load('/textures/grass/color.jpg');
const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg');
const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg');
const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg');

grassColorTexture.repeat.set(8, 8);
grassAmbientOcclusionTexture.repeat.set(8, 8);
grassNormalTexture.repeat.set(8, 8);
grassRoughnessTexture.repeat.set(8, 8);

grassColorTexture.wrapS = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

grassColorTexture.wrapT = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;

const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({
        map: grassColorTexture,
        aoMap: grassAmbientOcclusionTexture,
        normalMap: grassNormalTexture,
        roughnessMap: grassRoughnessTexture
    })
);

mesh.receiveShadow = true;
mesh.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(mesh.geometry.attributes.uv.array, 2));
mesh.rotation.x = - Math.PI * 0.5;
mesh.position.y = 0;

// Floor
const floorShape = new CANNON.Plane();
const body = new CANNON.Body();
body.mass = 0;
body.addShape(floorShape);
body.quaternion.setFromAxisAngle(new CANNON.Vec3(- 1, 0, 0), Math.PI * 0.5);


export const floor = {
    body,
    mesh
}
