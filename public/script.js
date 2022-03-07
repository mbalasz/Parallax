function vector(x, y, otherX, otherY) {
    return [x - otherX, y - otherY]
}

class Circle {
    constructor(originalX, originalY, el) {
        this.originalX = originalX;
        this.originalY = originalY;
        this.el = el;
    }

    getOriginalX() { 
        return this.originalX;
    }

    getOriginalY() {
        return this.originalY;
    }
    
    getElement() {
        return this.el;
    }
}

let circles = []

for (let i = 0; i < 200; i++) {
    let xCoord = Math.random() * window.innerWidth;
    let yCoord = Math.random() * window.innerHeight * 2;
    console.log(xCoord + " " + yCoord);
    let circle = document.createElement("div");
    circle.classList.add("circle")
    circle.style.position = "absolute";
    circle.style.left = xCoord;
    circle.style.top = yCoord;
    circles.push(new Circle(xCoord, yCoord, circle))
    document.getElementById('container').appendChild(circle)
}

document.addEventListener('mousemove', (cursor) => {
    circles.forEach((circle) => {
        const currVector = vector(cursor.clientX, cursor.clientY, circle.getOriginalX(), circle.getOriginalY())
        circle.getElement().style.transform = 'translate(' + -(0.08 * currVector[0]) + 'px, ' + -(0.08 * currVector[1]) + 'px)'
    })
})