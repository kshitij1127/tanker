class Tanker{
    constructor(x,y){
   var options = {
       isStatic : true,
       density : 2.0
   }
   this.width = 200;
   this.height = 200;
   this.body = this.Bodies.rectangle(x,y,width,height,options)
   World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position
        rect(x,y,this.width,this.height)
    }
}