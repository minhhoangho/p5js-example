function Box() {
    this.y = height - 40;
    this.x = 25;
    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -15;

    this.show = function() {
        fill(255);
        rect(this.x, this.y, 32, 32);
        // line(this.x, this.y - 15, this.x + 40, this.y +40)
    }
    this.up = function () {
        this.velocity += this.lift;
    }
    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9
        this.y += this.velocity;

        if(this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if(this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}