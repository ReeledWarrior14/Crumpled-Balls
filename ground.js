// class GROUND {
//     constructor(x, y, width, height){
//         this.body = Bodies.rectangle(x, y, width, height);
//         Worlds.add(world, this.body);
//         this.width = width
//         this.height = height;
//     }

//     displayGround(){
//         var x = this.body.position.x;
//         var y = this.body.position.y;
//         rect(x, y, this.width, this.height);
//     }
// }

class GROUND {
    constructor(x, y, width, height){
        var options1 = {
            isStatic : true,
        }
        this.Mybody = Bodies.rectangle(x, y, width, height, options1);
        Worlds.add(world, this.Mybody);
        this.width = width;
        this.height = height;
    }        
    displayGround(){
        var x = this.Mybody.position.x;
        var y = this.Mybody.position.y;
        push();
        fill(0);
        rectMode(CENTER);
        rect(x, y , this.width, this.height);
        pop();
    }
}