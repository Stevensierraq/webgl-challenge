import * as THREE from 'three';

const mesh = new THREE.Mesh(
    new THREE.ConeGeometry(1.2, 1, 4),
    new THREE.MeshStandardMaterial({ color: '#b35f45' })
);

mesh.rotation.y = Math.PI * 0.25;
mesh.position.y = 2.5 ;

export const towerRoof = mesh;
