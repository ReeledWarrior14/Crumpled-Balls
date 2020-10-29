var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;
// var Mouse = Matter.Mouse;
// var MouseConstraint = Matter.MouseConstraint;

var engine, world;

var ground;

var trashCan, paperBall;

// var mConstraint, mouse; 

function setup(){
    createCanvas(700, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new GROUND(width/2, height, width*3, 50);

    ball = new BALL(100, 350, 15);
    ballI = new IMAGE(100, 350, 50, 50);

    trash1 = new SIDE(450, 315, 10, 100, 0);
    trash2 = new SIDE(500, 370, 110, 10, 0);
    trash3 = new SIDE(550, 315, 10, 100, 0);

    // const mouse = Mouse.create(canvas.elt);
    // const options4 = {
    //     mouse : mouse,
    // }
    // mConstraint = MouseConstraint.create(engine, options4);
    // Worlds.add(world, mConstraint);

    trashCanI = loadImage("dustbingreen.png");
}

function draw(){
    Engine.update(engine);

    background(150);

    push();
    fill(0);
    ground.displayGround();
    pop();

    ball.displayBall();

    push();
    fill('gray');
    trash1.displaySide();
    // trash2.displaySide();
    trash3.displaySide();
    pop();

    ballI.x = ball.bodyC.position.x;
    ballI.y = ball.bodyC.position.y;
    ballI.displayImage();

    imageMode(CENTER);
    angleMode(DEGREES);

    // push();
    // rotate(ball.bodyC.angle);
    // image(paperBallI, ball.bodyC.position.x, ball.bodyC.position.y, 50, 50);
    // pop();

    image(trashCanI, 500, 320, 120, 110);

    fill("blue");
    text(mouseX, 10, 15);
    text(mouseY, 30, 15);

    push();
    textSize(20)
    text("Arrow keys to move, you have to tap the arrow keys to move", width/4, height/3);
    text("The real challenge is trying to do it by left clicking your mouse", width/4, height/3 + 20);
    pop();
}

function mousePressed(){
    Matter.Body.applyForce(ball.bodyC, {x: ball.bodyC.position.x, y: ball.bodyC.position.y}, {x : 5, y : -30});
}

function keyPressed(){
    if (keyCode == RIGHT_ARROW){
        Matter.Body.applyForce(ball.bodyC, {x: ball.bodyC.position.x, y: ball.bodyC.position.y}, {x : 5, y : 0});
    }
    if(keyCode == LEFT_ARROW){
        Matter.Body.applyForce(ball.bodyC, {x: ball.bodyC.position.x, y: ball.bodyC.position.y}, {x : -5, y : 0});
    }
    if(keyCode == UP_ARROW){
        Matter.Body.applyForce(ball.bodyC, {x: ball.bodyC.position.x, y: ball.bodyC.position.y}, {x : 0, y : -15});
    }
}