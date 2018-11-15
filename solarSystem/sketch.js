const r1 = 10;
const r2 = 12;
const r3 = 14.5;
const r4 = 18;
const r5 = 40;
const r6 = 42;
const r7 = 37;
const r8 = 36.5;

var angle1, angle2, angle3, angle4, angle5, angle6, angle7, angle8;
function setup() {
    createCanvas(800, 800);
    angle1 = 0;
    angle2 = 170;
    angle3 = 190;
    angle4 = 85;
    angle5 = 5;
    angle6 = 30;
    angle7 = 45;
    angle8 = 46;
    angleMode(DEGREES);
}
function draw () {
    background(0);

    fill(random (252, 254), random(183, 185), random(18,20))
    ellipse(width/2, height/2, 100);
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
    push();
    noFill()
    stroke(255);
    strokeWeight(0.5);
    translate(width/2, height/2);
    ellipse(0, 0, 182);
    pop();   
    push();
    translate(width/2, height/2);
    rotate(angle2);
    fill(235,128,111)
    ellipse(0, 90, r2) 
    pop();
//
    push();
    noFill()
    stroke(255);
    strokeWeight(0.5);
    translate(width/2, height/2);
    ellipse(0, 0, 232);
    pop();   
    push();
    translate(width/2, height/2);
    rotate(angle3);
    fill(57,192,98)
    ellipse(0, 115, r3) 
    pop();
//
    push();
    noFill()
    stroke(255);
    strokeWeight(0.5);
    translate(width/2, height/2);
    ellipse(0, 0, 282);
    pop();   
    push();
    translate(width/2, height/2);
    rotate(angle4);
    fill(160,143,39)
    ellipse(0, 140, r4) 
    pop();
//    
    push();
    noFill()
    stroke(255);
    strokeWeight(0.5);
    translate(width/2, height/2);
    ellipse(0, 0, 392);
    pop();   
    push();
    translate(width/2, height/2);
    rotate(angle5);
    fill(216,168,59)
    ellipse(0, 195, r5) 
    pop();
//    
    push();
    noFill()
    stroke(255);
    strokeWeight(0.5);
    translate(width/2, height/2);
    ellipse(0, 0, 492);
    pop();   
    push();
    translate(width/2, height/2);
    rotate(angle6);
    fill(135,106,38)
    ellipse(0, 245, r6) 
    
    pop();
//    
    push();
    noFill()
    stroke(255);
    strokeWeight(0.5);
    translate(width/2, height/2);
    ellipse(0, 0, 592);
    pop();   
    push();
    translate(width/2, height/2);
    rotate(angle7);
    fill(92,40,220)
    ellipse(0, 295, r7) 
    pop();
//    
    push();
    noFill()
    stroke(255);
    strokeWeight(0.5);
    translate(width/2, height/2);
    ellipse(0, 0, 722);
    pop();   
    push();
    translate(width/2, height/2);
    rotate(angle8);
    fill(35,69,225)
    ellipse(0, 360, r8) 
    pop();

    angle1-=3;
    angle2-=2;
    angle3-=1.4;
    angle4-=1;
    angle5-=0.5;
    angle6-=0.4;
    angle7-=0.2;
    angle8-=0.2;
    // noLoop();
}