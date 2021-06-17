import * as THREE from 'three';

const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({ color: '#89c854' })

export function createBushes(maxCreated, group, bushIndex = 1) {
    if(bushIndex === maxCreated) return 0;
    
    const angle = Math.random() * Math.PI * 2;
    const radius = 3.5 + Math.random() * 6;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const scale = Math.random() * 0.5;
    
    // Create the mesh
    const bush = new THREE.Mesh(bushGeometry, bushMaterial);
    bush.castShadow = true;
    
    // Position
    bush.position.set(x, 0, z);
    bush.scale.set(scale, scale, scale);                             
    
    // Add to the graves container
    group.add(bush);

    return createBushes(maxCreated, group, bushIndex + 1);
}