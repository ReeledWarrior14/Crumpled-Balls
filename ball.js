class BALL{
    constructor(x, y, r){
        var options2 = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
        }
        this.bodyC = Bodies.circle(x, y, r, options2);
        Worlds.add(world, this.bodyC);
        this.r = r;
    }
    displayBall(){
        var pos = this.bodyC.position;
        var angle = this.bodyC.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle * 4);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}