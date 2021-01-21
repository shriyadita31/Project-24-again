class Paper{
  //since radius of all the objects are same, x and y are taken as arguments
  constructor(x,y){
    var options = {
      restitution:0.4,
      friction:1,
      density:1.2
    }
  
    this.body = Bodies.circle(x,y,15,options);
    World.add(world,this.body);
  }
  
  display(){
    var pos = this.body.position;
    fill("purple");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,20,20) 
    }
  }
  