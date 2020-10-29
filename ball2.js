class IMAGE{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = loadImage("paper.png");
    }
    displayImage(){
        var posx = this.x;
        var posy = this.y;
        var angle = ball.bodyC.angle;
        push();
        translate(posx, posy);
        rotate(angle * 400);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}