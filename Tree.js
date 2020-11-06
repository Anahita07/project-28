class Tree{
    constructor(x,y,width,height){
        var options ={
           isStatic : true
        }  
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("tree.png")
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    
    display(){   

        rectMode(CENTER)
        fill("white"); 
        image(this.image,this.body.position.x,this.body.position.y,this.width*10 + 80,this.height*10 + 300);
        
    }
}