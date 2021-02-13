class Paper{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.1,
            density : 0.27,
        }
// this.body = Matter.Bodies.circle(x,y,20,options);
        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.paperi = loadImage("paper.png");
        this.x=x;
        this.y=y;
        this.r=width;
    }
    
    display(){
        var angle = this.body.angle;
        push() ;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.paperi,0,0,this.r,this.r);
        pop();
    }
}
