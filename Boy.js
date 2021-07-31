class Boy{
    constructor(x,y,r){
        var options={
            density:10,
            friction:1
        }
        this.image=loadImage("boy.png");
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var boyPos=this.body.position;
        push();
        translate(boyPos.x,boyPos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}