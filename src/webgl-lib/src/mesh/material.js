import * as CANNON from 'cannon-es';

export const defaultMaterial = new CANNON.Material('default');
export const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.2,
        restitution: 0.4
    }
);
