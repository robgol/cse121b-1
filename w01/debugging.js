const PI = 3.14;
//let radius = 3;
let area = 0;

function circleArea(radius) {
    // code to complete our task here
    const area = radius * radius * PI;
    return area;
}

area = circleArea(3);
console.log("Area1:", area);

area = circleArea(4);
console.log("Area2:", area);