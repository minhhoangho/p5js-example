function Pipe() {
    this.top = random(100, height/2);
    this.gap = 100;
    this.bottom = this.top + this.gap;
    this.x = width;
    this.w = 50;
    this.speed = 5;

    this.show = function () {
        fill(50,205,50);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.bottom, this.w, height- this.bottom);
    }

    this.update = function() {
        this.x -=this.speed;
    }

    this.offscreen = function() {
        if(this.x < this.width) {
            return true;
        } else {
            return false;
        }
    }

    this.hit = function(bird) {
        if(bird.y < this.top + 15 || bird.y > this.bottom) {
            if(bird.x > this.x - 15 && bird.x < this.x + this.w) {
                return true;
            }
        }
         return false;
    }

    
}