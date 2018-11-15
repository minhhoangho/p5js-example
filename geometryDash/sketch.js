
var cBox;
var ground;
function setup() {
    createCanvas(600, 300);  
    cBox = new Box()
}

function draw() {
    background(127, 193,220);
    console.log(cBox)
    cBox.show();
    stroke(255);
    fill(170);
    rect(0, height-5, width, 10)
}

function keyPressed () {
    if(key == ' ') {
        cBox.up();
    }
}