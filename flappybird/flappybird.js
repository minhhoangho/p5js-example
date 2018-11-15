var bird;
var pipes = [];
var img;
var points,i;
function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    i = 0;
    points = createP('points');
    
}

function draw() {
    background(255,192,203);
    if(frameCount % 50 == 0) {
        pipes.push(new Pipe());
        i++;
        points.html(i)
    }

    for (let i = pipes.length - 1; i >= 0 ; i--) {
        pipes[i].show();
        pipes[i].update()
        if(pipes[i].hit(bird)) {
            noLoop();
        } 
        
        if(pipes[i].offscreen()) {
            pipes.splice(i,1);
        }
    }
    bird.update();
    bird.show();
   
}
 
function keyPressed() {
    if(key == ' ') {
        bird.up();
    }
}