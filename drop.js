class createDrop{
    constructor(x, y) {
      var options = {
        
          'restitution':0.1,
          'friction':0.001
      }
      
      this.body = Bodies.circle(x,y,5, options);
      this.radius=5;
      
      
  World.add(world, this.body);
    }
    updateY(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }
  
    }
    display(){
      var pos =this.body.position;
    //push();
      
    fill("blue");
      
      ellipseMode(RADIUS);
      
      ellipse(pos.x,pos.y,5,5);
     // pop();
  
    }
  }
  
  