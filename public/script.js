function vector(x, y, otherX, otherY) {
    return [x - otherX, y - otherY]
}

let circles = []

for (let i = 0; i < 200; i++) {
    let xCoord = Math.random() * window.innerWidth;
    let yCoord = Math.random() * window.innerHeight * 2;
    let circle = document.createElement("div");
    circle.classList.add("circle")
    circle.style.position = "absolute";
    circle.style.left = xCoord;
    circle.style.top = yCoord;
    circles.push(circle)
    document.getElementById('container').appendChild(circle)
}

document.addEventListener('mousemove', (cursor) => {
    circles.forEach((circle) => {
        const currVector = vector(
            cursor.clientX,
            cursor.clientY,
            circle.getBoundingClientRect().left,
            circle.getBoundingClientRect().top)
        circle.style.transform = 
            'translate(' + -(0.08 * currVector[0]) + 'px, ' + -(0.08 * currVector[1]) + 'px)'
    })
})