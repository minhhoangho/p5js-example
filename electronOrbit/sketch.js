const r1 = 10;
const r2 = 12;
// const r3 = 14.5;
// const r4 = 18;
// const r5 = 40;
// const r6 = 42;
// const r7 = 37;
// const r8 = 36.5;

var angle1, angle2, angle3, angle4, angle5, angle6, angle7, angle8;
function setup() {
    createCanvas(800, 800);
    angle1 = 0;
    // angle2 = 170;
    // angle3 = 190;
    // angle4 = 85;
    // angle5 = 5;
    // angle6 = 30;
    // angle7 = 45;
    // angle8 = 46;
    angleMode(DEGREES);
}
function draw () {
    background(0);

    fill(random (252, 254), random(183, 185), random(18,20))
    ellipse(width/2, height/2, 30);
//
    push();
    noFill()
    stroke(255);
    strokeWeight(0.5);
    translate(width/2, height/2);
    ellipse(0, 0, 142);
    pop(); 
    push();
    translate(width/2, height/2);
    rotate(angle1);
    fill(219,206,202)
    ellipse(0, 70, r1) 
    pop();
//

    angle1-=3;
    
    // noLoop();
}