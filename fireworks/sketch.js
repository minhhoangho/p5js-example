var fireworks = [];
var gravity;
var canvas;
var main;
var font;
var cont = false;

function setup() {
    textFont("Walter Turncoat");
    textSize(60);
    textAlign(CENTER, CENTER)
    main = select('#main');
    canvas = createCanvas(windowWidth, windowHeight);
    colorMode(HSB)
    gravity = createVector(0, 0.2)
    stroke(255);
    strokeWeight(4)
}
function draw() {
   
    var date = new Date();
    if(date > deadline) {
        main.style("display : none");
        cont = true
    }
    if(cont == true) {
        textAlign(CENTER);
        text('Happy New Year 2019', width * 0.5, 100);
        colorMode(RGB);
        background(0, 0, 0, 25);
        if(random(1) < 0.03) {
            fireworks.push(new Firework());
        }
    
        for (let i = fireworks.length - 1; i >= 0 ; i--) {
            fireworks[i].update();
            fireworks[i].show();
            if(fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
            
        }
    }
}
