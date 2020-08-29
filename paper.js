class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);

        this.image=loadImage("paper.png");
    }
    display(){
        push();
        fill("purple");   
        imageMode(CENTER);
        strokeWeight(3);
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,70,70);
        pop();
    }
}