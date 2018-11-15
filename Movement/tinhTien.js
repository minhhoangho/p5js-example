var triangle1;
var moveX = 0, moveY = 0;
// setup Triangle
var initTriangleLocation = {
    x1: 50,
    y1: 100,
    x2: 50,
    y2: 150,
    x3: 120,
    y3: 150,
}

initTriangleLocation.centerX = (initTriangleLocation.x1+ initTriangleLocation.x2+ initTriangleLocation.x3)/3;
initTriangleLocation.centerY = (initTriangleLocation.y1+ initTriangleLocation.y2+ initTriangleLocation.y3)/3;
//setup initial velocity
var velocity = {
    vX: 0,
    vY: 0,
    v: 2,
}
///

const instantLocation = {
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
} = initTriangleLocation;

let time = 200;
const target = {
    x: 0,
    y:0
}
const distance = {
    x: 0,
    y:0,
}
distance.length = Math.sqrt(distance.x*distance.x + distance.y* distance.y);


function setup() {
    createCanvas(400, 400);
}
function mouseClicked() {
    target.x = mouseX;
    target.y = mouseY;
    distance.x = target.x - instantLocation.centerX;
    distance.y = target.y - instantLocation.centerY;
    distance.length = Math.sqrt(distance.x*distance.x + distance.y* distance.y);

    velocity.vX = velocity.v * Math.abs(distance.x) /distance.length;
    velocity.vY = velocity.v * Math.abs(distance.y) /distance.length;

    moveX = distance.x /Math.abs(distance.x) * velocity.vX;
    moveY = distance.y /Math.abs(distance.y) * velocity.vY;
}
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

    instantLocation.x1 = triangle1.x1 + moveX;   
    instantLocation.y1 = triangle1.y1 + moveY;
       
    instantLocation.x2 = triangle1.x2 + moveX;   
    instantLocation.y2 = triangle1.y2 + moveY; 

    instantLocation.x3 = triangle1.x3 + moveX;   
    instantLocation.y3 = triangle1.y3 + moveY; 

    instantLocation.centerX = triangle1.centerX; 
    instantLocation.centerY = triangle1.centerY; 
    console.log(target.x, triangle1.centerX, target.y, triangle1.centerY)

    if(ceil(Math.abs(triangle1.centerX - target.x)) <= velocity.v && ceil(Math.abs(triangle1.centerY - target.y )) <= velocity.v) {
        exit();
    }

}