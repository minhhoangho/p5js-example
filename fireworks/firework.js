class Firework {
    constructor () {
        this.hu = random(255)
        this.firework = new Particle(random(width), height, this.hu);
        this.exploded = false;
        this.particles = [];
    }

    explode () {
        for (let i = 0; i < 100; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, true);
            this.particles.push(p)
        }
    }
    done() {
        if(this.exploded && this.particles.length === 0) {
            return true;
        }
        return false;
    }
    update () {
        if(!this.exploded) {
            this.firework.applyForce(gravity)
            this.firework.update();
            if(this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }
        for (let i = this.particles.length -1 ; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if(this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
;
    }
    

    show () {
        if(!this.exploded) {
            this.firework.show();
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
            
        }
    }
}