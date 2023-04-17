let zombies = [];
function setup() {
  createCanvas(600, 400);
  r=3;

  for (let i = 0; i < 30; i++) {
    zombies.push(new Mover());
  }
}

function draw() {
  background(210, 180, 140);
  
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].gerakCuy();
    zombies[i].tampil();
    zombies[i].cekBatas();
  }
}


class Mover {
  constructor(){
    this.location =
      createVector(random(width/2),random(height/2));
    
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.panjanglebar = random(0, 0);
    
  }

  tampil(){
    
    //warna hijau
    noStroke();
    fill('green');
    rect(this.location.x-2, this.location.y-2, 4, 4);
    rect(this.location.x+2, this.location.y+2, 8, 2);
    rect(this.location.x-10, this.location.y+2, 8, 2);
    rect(this.location.x-8, this.location.y+4, 16, 4);
    rect(this.location.x-4, this.location.y+8, 8, 2);
    
    //warna random
    noStroke();
    fill('white');
    rect(this.location.x-10, this.location.y-2, 6, 2);
    rect(this.location.x+4, this.location.y-2, 6, 2)
    rect(this.location.x-10, this.location.y-4, 8, 2);
    rect(this.location.x+2, this.location.y-4, 8, 2);
    rect(this.location.x-8, this.location.y-8, 16, 4);
    rect(this.location.x-4, this.location.y-10, 8, 2)
    
    //warna hitam
    noStroke();
    fill('black');
    rect(this.location.x+2, this.location.y, 10, 2);
    rect(this.location.x-12, this.location.y, 10, 2);
    rect(this.location.x-12, this.location.y-4, 2, 8);
    rect(this.location.x+10, this.location.y-4, 2, 8);
    rect(this.location.x-10, this.location.y-8, 2, 4);
    rect(this.location.x+8, this.location.y-8, 2, 4);
    rect(this.location.x-8, this.location.y-10, 4, 2);
    rect(this.location.x+4, this.location.y-10, 4, 2);
    rect(this.location.x-4, this.location.y-12, 8, 2);
    rect(this.location.x-10, this.location.y+4, 2, 4);
 rect(this.location.x+8, this.location.y+4, 2, 4);
    rect(this.location.x-8, this.location.y+8, 4, 2);
    rect(this.location.x+4, this.location.y+8, 4, 2);
    rect(this.location.x-4, this.location.y+10, 8, 2);
    
  }
 gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    var w = p5.Vector.sub(mouse,CENTER);
    noStroke()
    
    //pink
    //warna Pink Muda
  fill(255,153,153)
  rect(70,115,60,20);
  rect(130,115,5,5);
  rect(65,105,80,10);
  rect(80,100,50,5);
  rect(85,70,30,30);
  rect(90,55,25,15);
  rect(95,45,20,10);
  rect(100,35,20,10);
  rect(105,30,15,5);
  rect(115,160,5,5);
  rect(80,160,5,5);
  rect(55,100,10,5);
  rect(60,105,5,5);
  rect(115,90,5,10);
  rect(120,95,5,5);
  rect(145,100,10,5);
  rect(145,105,5,5);

   // Bagian warna putih
  fill(255,255,255)
  rect(90,90,20,15);
  rect(90,70,5,15);
  rect(85,70,5,5);
  rect(85,80,5,5);
  rect(100,80,5,5);
  rect(100,70,5,5);
  rect(105,70,5,15);

  //Bagian Warna Abu-Abu
  fill(32,32,32)
  rect(100,60,10,5);
  rect(85,60,10,5);

    // Bagian Warna Hitam
  fill(0,0,0)
   rect(mouse.x-(r*5), mouse.y-(r*2), (r*1),(r*2));
    rect(mouse.x-(r*6), mouse.y-(r*6), (r*1),(r*5));
    rect(mouse.x-(r*5), mouse.y-(r*13), (r*1),(r*8));
    rect(mouse.x-(r*4), mouse.y-(r*14), (r*1),(r*1));
    rect(mouse.x-(r*3), mouse.y-(r*13), (r*1),(r*3));
    rect(mouse.x-(r*2), mouse.y-(r*11), (r*1),(r*3));
    rect(mouse.x-(r*1), mouse.y-(r*11), (r*2),(r*1));
    rect(mouse.x+(r*1), mouse.y-(r*11), (r*1),(r*3));
    rect(mouse.x+(r*2), mouse.y-(r*13), (r*1),(r*3));
    rect(mouse.x+(r*3), mouse.y-(r*14), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y-(r*13), (r*1),(r*8));
    rect(mouse.x+(r*5), mouse.y-(r*6), (r*1),(r*5));
    rect(mouse.x+(r*4), mouse.y-(r*2), (r*1),(r*2));
    rect(mouse.x+(r*5), mouse.y+(r*0), (r*1),(r*2));
    
    //warna hitam
    fill('black');
    rect(mouse.x-(r*5), mouse.y-(r*2), (r*1),(r*2));
    rect(mouse.x-(r*6), mouse.y-(r*6), (r*1),(r*5));
    rect(mouse.x-(r*5), mouse.y-(r*13), (r*1),(r*8));
    rect(mouse.x-(r*4), mouse.y-(r*14), (r*1),(r*1));
    rect(mouse.x-(r*3), mouse.y-(r*13), (r*1),(r*3));
    rect(mouse.x-(r*2), mouse.y-(r*11), (r*1),(r*3));
    rect(mouse.x-(r*1), mouse.y-(r*11), (r*2),(r*1));
    rect(mouse.x+(r*1), mouse.y-(r*11), (r*1),(r*3));
    rect(mouse.x+(r*2), mouse.y-(r*13), (r*1),(r*3));
    rect(mouse.x+(r*3), mouse.y-(r*14), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y-(r*13), (r*1),(r*8));
    rect(mouse.x+(r*5), mouse.y-(r*6), (r*1),(r*5));
    rect(mouse.x+(r*4), mouse.y-(r*2), (r*1),(r*2));
    rect(mouse.x+(r*5), mouse.y+(r*0), (r*1),(r*2));
    rect(mouse.x+(r*6), mouse.y+(r*2), (r*1),(r*2));
    rect(mouse.x+(r*7), mouse.y+(r*4), (r*1),(r*3));
    rect(mouse.x+(r*6), mouse.y+(r*7), (r*1),(r*2));
    rect(mouse.x+(r*3), mouse.y+(r*9), (r*3),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*8), (r*6),(r*1));
    rect(mouse.x+(r*-6), mouse.y+(r*9), (r*3),(r*1));
    rect(mouse.x+(r*-7), mouse.y+(r*7), (r*1),(r*2));
    rect(mouse.x+(r*-8), mouse.y+(r*4), (r*1),(r*3));
    rect(mouse.x+(r*-7), mouse.y+(r*2), (r*1),(r*2));
    rect(mouse.x+(r*-6), mouse.y+(r*0), (r*1),(r*2));
    rect(mouse.x+(r*-4), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*7), (r*1),(r*1));
    rect(mouse.x+(r*2), mouse.y+(r*7), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-1), mouse.y+(r*3), (r*2),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*-7), (r*1),(r*1));
 rect(mouse.x+(r*3), mouse.y+(r*-7), (r*1),(r*1));
    
    //putih
    fill('white');
    rect(mouse.x+(r*-4), mouse.y+(r*-5), (r*1),(r*2));
    rect(mouse.x+(r*3), mouse.y+(r*-5), (r*1),(r*2));
    
    //cokelat
    fill(140,82,45);
    rect(mouse.x+(r*3), mouse.y+(r*1), (r*1),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*1), (r*1),(r*1));
    rect(mouse.x+(r*2), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*-3), mouse.y+(r*2), (r*1),(r*1));
    rect(mouse.x+(r*-2), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*-4), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*1), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*3), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y+(r*4), (r*1),(r*2));
    rect(mouse.x+(r*-5), mouse.y+(r*4), (r*1),(r*2));
    rect(mouse.x+(r*-6), mouse.y+(r*5), (r*1),(r*1));
    rect(mouse.x+(r*5), mouse.y+(r*5), (r*1),(r*1));
    rect(mouse.x+(r*-6), mouse.y+(r*7), (r*3),(r*1));
    rect(mouse.x+(r*3), mouse.y+(r*7), (r*3),(r*1));
    rect(mouse.x+(r*-7), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*6), (r*1),(r*1));
    rect(mouse.x+(r*-5), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*4), mouse.y+(r*8), (r*1),(r*1));
    rect(mouse.x+(r*6), mouse.y+(r*-8), (r*1),(r*6));
    rect(mouse.x+(r*7), mouse.y+(r*-8), (r*1),(r*1));
    rect(mouse.x+(r*8), mouse.y+(r*-7), (r*2),(r*1));
    rect(mouse.x+(r*8), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*7), mouse.y+(r*-5), (r*1),(r*1));
    rect(mouse.x+(r*10), mouse.y+(r*-6), (r*1),(r*1));
    rect(mouse.x+(r*11), mouse.y+(r*-5), (r*1),(r*1));
   
   var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = (4, 12);
    
    arahMouse.normalize();
    arahMouse.mult(0.4); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}