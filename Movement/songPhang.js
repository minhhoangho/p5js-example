var triangle1;
// setup Triangle
var initTriangleLocation = {
    x1: 50,
    y1: 100,
    x2: 50,
    y2: 150,
    x3: 120,
    y3: 150,
}
initTriangleLocation.centerX = (initTriangleLocation.x1 + initTriangleLocation.x2 + initTriangleLocation.x3)/3;
initTriangleLocation.centerY = (initTriangleLocation.y1 + initTriangleLocation.y2 + initTriangleLocation.y3)/3;
const instantLocation = {}

instantLocation.x1 = initTriangleLocation.x1;
instantLocation.y1 = initTriangleLocation.y1;
instantLocation.x2 = initTriangleLocation.x2;
instantLocation.y2 = initTriangleLocation.y2;
instantLocation.x3 = initTriangleLocation.x3;
instantLocation.y3 = initTriangleLocation.y3;

const target = {
    x,
    y,
}

var x = 0, y = 0;
const velocity = 5
const w = 0;
let radius = 0;
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function getVector(x1, y1, x2, y2) {
    return {
        x: x2 - x1,
        y: y2 - y1,
    }
}
function getRadius (x1, y1, x2, y2) {
    return Math.sqrt((x1-x2)* (x1-x2) + (y1-y2)*(y1-y2) )
}

var xPos = 0;
var yPos = 0;

const angle = {
    A: 0,
    B: 0,
    C: 0
}
var radius1, radius2, radius3;
function getAngle(x1, y1, x2, y2, radius) {
    
    var angle = Math.acos((x1 - x2) / radius);
    if(y1 - y2 > 0) {
        return -angle;
    }
    return angle;
}
angle.A = getAngle(instantLocation.x1, instantLocation.y1, 0, 0, radius1);
angle.B = getAngle(instantLocation.x2, instantLocation.y2, 0, 0, radius2);
angle.C = getAngle(instantLocation.x3, instantLocation.y3, 0, 0, radius3);

function mouseClicked() {
    
    xPos = mouseX;
    yPos = mouseY;
    radius1 = getRadius(instantLocation.x1, instantLocation.y1, xPos, yPos);
    radius2 = getRadius(instantLocation.x2, instantLocation.y2, xPos, yPos);
    radius3 = getRadius(instantLocation.x3, instantLocation.y3, xPos, yPos);

    angle.A = getAngle(instantLocation.x1, instantLocation.y1, xPos, yPos, radius1);
    angle.B = getAngle(instantLocation.x2, instantLocation.y2, xPos, yPos, radius2);
    angle.C = getAngle(instantLocation.x3, instantLocation.y3, xPos, yPos, radius3);

}
var t = 180

function draw() {
    background(200);
    triangle1 = new Triangle(
        instantLocation.x1,
        instantLocation.y1,
        instantLocation.x2, 
        instantLocation.y2, 
        instantLocation.x3, 
        instantLocation.y3,
        );
    if(radius1 !== undefined && radius2 !== undefined && radius3 !== undefined){
        instantLocation.x1 = xPos + radius1 * Math.cos(angle.A)
        instantLocation.y1 = yPos - radius1 * Math.sin(angle.A)
    
        instantLocation.x2 = xPos + radius2 * Math.cos(angle.B)
        instantLocation.y2 = yPos - radius2 * Math.sin(angle.B)
    
        instantLocation.x3 = xPos + radius3 * Math.cos(angle.C)
        instantLocation.y3 = yPos - radius3 * Math.sin(angle.C)
        angle.A -= Math.PI/t;
        angle.B -= Math.PI/t;
        angle.C -= Math.PI/t;
    }
    push();
    fill(0)
    ellipse(xPos, yPos,2, 2)
    pop();
    if(keyIsDown(LEFT_ARROW)) {
        xPos-=2;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        xPos+=2;
    }
    if(keyIsDown(UP_ARROW)) {
        yPos-=2;
    }
    if(keyIsDown(DOWN_ARROW)) {
        yPos+=2;
    }
}