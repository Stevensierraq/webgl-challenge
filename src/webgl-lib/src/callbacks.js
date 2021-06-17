const dropSound = new Audio('/sounds/hit.mp3');

export const collisionCallback = (collision) => {
    const impactStrength = collision.contact.getImpactVelocityAlongNormal();
    
    if(impactStrength > 1.5) {
        dropSound.volume = Math.random();
        dropSound.currentTime = 0;
        dropSound.play();
    };
};
