void setup(){
  size(600,400);
  for(int i= 0;i< 500;i++)
  {
    float x = random(width);
    float y = random(height);
    float r  = random(100,255);
    float g = random(100,255);
    float b = random(100,255);
    noStroke();
    fill(r,g,b);
    ellipse(x,y,16,16);
  }
  save("output.png");
  exit();
}
