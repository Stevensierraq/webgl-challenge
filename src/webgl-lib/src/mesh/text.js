import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { defaultMaterial } from './material';

const textureLoader = new THREE.TextureLoader()
const matCapTexture = textureLoader.load('/textures/cap/solid.png')

const fontLoader = new THREE.FontLoader()
export const addFontTexture = (text, setBodyAndMesh) => fontLoader.load(
    '/fonts/adineue.json',
    (font) => {
        const textGeometry = new THREE.TextBufferGeometry(text, {
            font,
            size: 0.5,
            height: 0.2,
            bevelOffset: 0,
            bevelSize: 0.01,
            bevelSegments: 4,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0.03,
        });

        textGeometry.center();

        const textMaterial = new THREE.MeshMatcapMaterial({matcap: matCapTexture});
        const mesh = new THREE.Mesh(textGeometry, textMaterial);
        mesh.position.y = 4;
        mesh.position.z = 2.7;
        mesh.position.x = 1;
        mesh.castShadow = true;

        textGeometry.computeBoundingBox()

        const shape = new CANNON.Box(new CANNON.Vec3(textGeometry.boundingBox.max.x * 0.5, textGeometry.boundingBox.max.y * 0.5, textGeometry.boundingBox.max.z * 0.5))

        const body = new CANNON.Body({
            mass: 1,
            position: new CANNON.Vec3(0, 3, 0),
            shape: shape,
            material: defaultMaterial
        })
        body.position.copy(mesh.position)

        setBodyAndMesh(body, mesh);
    }
);
