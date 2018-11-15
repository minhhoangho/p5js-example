// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;
var boxes = [];
var boundaries = [];
var ground;
function setup() {
    createCanvas(400,400)
    engine = Engine.create();
    world = engine.world;
    boundaries.push(new Boundary(200, height, width, 10, 0.3));
    boundaries.push(new Boundary(200, height/2, width*0.6, 10, -0.3));
}
function mouseDragged () {
    boxes.push(new Circle(mouseX, mouseY, random(5,20)));
}
function draw() {
    background(51);
    // boxes.push(new Circle(200, 50, random(5,10)));
    Engine.update(engine)
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
        if(boxes[i].isOffScreen()) {
            boxes[i].removeFromWorld();
            boxes.splice(i,1);
            i--;
        }
    }
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    // ground.show()
}