import * as THREE from 'three';

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const barometerColorTexture = textureLoader.load('/textures/barometer/color.png');
const barometerAlphaTexture = textureLoader.load('/textures/barometer/invert.png');
const barometerNormalTexture = textureLoader.load('/textures/barometer/normal.png');
const barometerOcclusionTexture = textureLoader.load('/textures/barometer/occlusion.png');
const barometerRoughtnessTexture = textureLoader.load('/textures/barometer/roughtness.png');

/**
 * Arrow
 */
const from = new THREE.Vector3( 0, 1.39, 0.52 );
const to = new THREE.Vector3( 0, 1.77, 0.52 );
const direction = to.clone().sub(from);
const length = direction.length();
const arrow = new THREE.ArrowHelper(direction.normalize(), from, length, 'black' );

/**
 * Mesh
 */
const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 100, 100),
    new THREE.MeshStandardMaterial({
        transparent: true,
        displacementScale: 0.1,
        map: barometerColorTexture,
        alphaMap: barometerAlphaTexture,
        aoMap: barometerOcclusionTexture,
        normalMap: barometerNormalTexture,
        roughnessMap: barometerRoughtnessTexture,
    })
);

mesh.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(mesh.geometry.attributes.uv.array, 2));
mesh.position.y = 1.4;
mesh.position.z = 0.52;

export const getArrowPosition = () => {
    let x = 0;
    let y = 1;
    let positiveMultiplier = true;


    let constantPosition = 0;
    let position = constantPosition;
    let positiveTolerance = constantPosition + 0.1;

    return function (pressure) {
        constantPosition = 2.1 - (pressure / 20);
      
        x += 0.001 * (positiveMultiplier ? 1 : -1);
        y -= 0.001 * (positiveMultiplier ? 1 : -1);
      
      
        if(position >= positiveTolerance ){
            positiveMultiplier = false
            positiveTolerance = constantPosition - 0.04
          }
      
        if(position <= positiveTolerance ){
            positiveMultiplier = true
            positiveTolerance = constantPosition + 0.04
        }
      
        if(positiveMultiplier){
            position += !!(!positiveTolerance  > position < positiveTolerance  + 0.08)
                ? 0.05
                : 0.001
      
        } else {
            position -= !!(positiveTolerance  < position > positiveTolerance + 0.8)
                ? 0.05
                : 0.001;

        }

        return position;
    }
};

export const barometer = {
    mesh,
    arrow,
    getArrowPosition
};
