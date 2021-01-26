class umbrella
{
    constructor(x, y) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.circle(x,y,25, options);
    
      this.image=loadImage("walking_1.png");
      this.radius = 50;
      World.add(world, this.body);
    }



display(){
  var pos =this.body.position;
//push();
  
  
  
  imageMode(CENTER);
  //fill("purple");
  image(this.image,pos.x,pos.y+70,300,300);
//  pop();

}
}
