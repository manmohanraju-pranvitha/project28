class Stone{
    constructor(x,y,width,height){
        var option={
            isStatic:true,
            restitution:0,
            density:1.2,
            friction:1.0

            
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("stone.png");
        
        World.add(world,this.body);
    }
      display(){
        var pos=this.body.position;
        imageMode(CENTER);
        fill("black");
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}