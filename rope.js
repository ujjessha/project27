class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetx=offsetX
        this.offsetY=offsetY

       var options={
           bodyA:body1,
           bodyB:body2,
           PointB:{x:this.offsetX, y:this.offsetY},
          
        }

        this.Rope=Constraint.create(options);
        World.add(world,this.Rope);
        
    }
    display(){

        var PointAA=this.Rope.bodyA.position
        var PointB=this.Rope.bodyB.position
         
         strokeWeight(2);
         var Anchor1X=PointA.x;
         var Anchor1Y=PointA.y;

         var Anchor2X=PointB.x+this.offsetX;
         var Anchor2Y=PointB.y+this,offsetY;

         line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}