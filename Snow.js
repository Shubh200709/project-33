class Snow{
    constructor(x,y,r){
        var options={
            density:0.01,
            friction:0
        }
        this.image=loadImage("snow4.webp");
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var snowPos=this.body.position;
    push();
    translate(snowPos.x,snowPos.y);
    //ellipseMode(CENTER);
    //ellipse(0,0,this.r);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop()
    }
}