class Particle {
    constructor(x, y, hu, exp) {
        this.pos  = createVector(x, y);
        this.exp = exp
        if(this.exp) {
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(2,10));
        } else {
            this.vel = createVector(0, random(-20, -10));
        }
        this.acc = createVector(0, 0);
        this.lifespan = 255;
        this.hu = hu;
    }
    
    applyForce (force) {
        this.acc.add(force);
    }
    done() {
        if(this.lifespan < 0) {
            return true
        }
        return false
    }
    update() {
        if(this.exp) {
            this.vel.mult(0.9);
            this.lifespan -=4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    } 


    show() {
        colorMode(HSB);
        if(this.exp) {
            strokeWeight(1.6);
            stroke(this.hu, 255, 255, this.lifespan)
        } else {
            strokeWeight(4)
            stroke(this.hu, 255, 255)
        }
        point(this.pos.x, this.pos.y);
    }

}