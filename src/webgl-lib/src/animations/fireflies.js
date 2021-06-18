export const animateFireflies = (firefly1, firefly2, firefly3, elapsedTime) => {
    const firefly1Angle = elapsedTime * 0.5
    firefly1.position.x = Math.cos(firefly1Angle) * 4
    firefly1.position.z = Math.sin(firefly1Angle) * 4
    firefly1.position.y = Math.sin(elapsedTime * 3)

    const firefly2Angle = - elapsedTime * 0.32
    firefly2.position.x = Math.cos(firefly2Angle) * 5
    firefly2.position.z = Math.sin(firefly2Angle) * 5
    firefly2.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5)

    const firefly3Angle = - elapsedTime * 0.18
    firefly3.position.x = Math.cos(firefly3Angle) * (7 + Math.sin(elapsedTime * 0.32))
    firefly3.position.z = Math.sin(firefly3Angle) * (7 + Math.sin(elapsedTime * 0.5))
    firefly3.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5)
};
