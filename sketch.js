let song;
function preload(){song = loadSound('10_second_short_music.mp3');}
function setup() {
  createCanvas(windowWidth, windowHeight);
   background("#C7EAE4");
   textSize(100); // 設定字體大小
  textAlign(CENTER, CENTER); // 文字置中
  song.play();
}

let angle = 0; // 翻轉角度
let colorValue = 0; // 顏色值

var w =100
function draw() {
  background("#C7EAE4");
  rectMode(CENTER) //設定方框中心點為方框的座標點
  noFill()  //以下畫圓或方形都不要填滿顏色
  for(var x=50;x<=width+50;x=x+w){
     //畫圓,設定線框顏色與線條粗細
    
    angle += 0.01;
  let mouseAngle = atan2(mouseY - height/2, mouseX - width/2);
  angle += mouseAngle * 0.01;

  // 計算顏色
  colorValue = (colorValue + 1) % 360;
  let c = color(colorValue, 128, 128);

  // 將座標系移到畫布中心，並旋轉
  push();
  translate(width/2, height/2);
  rotate(angle);

  // 繪製文字，並填上顏色
  fill(c);
  text("TKU", 0, 0);

  pop();
  
  stroke("#F5A65B")
  strokeWeight(2)
  ellipse(x,50,w+mouseX/30) 
    //畫方框,設定線框顏色與線條粗細
   stroke("#5e6472")
  strokeWeight(2)
  rect(x,50,w+mouseY/10) 
    
     stroke("#5e453")
  strokeWeight(2)
  ellipse(x+50,100,w+mouseY/20) 
  //--------------
   stroke("#F5A65B")
  strokeWeight(2)
  ellipse(x,150,w+mouseX/30) 
    //畫方框,設定線框顏色與線條粗細
   stroke("#5e6472")
  strokeWeight(2)
  rect(x,150,w+mouseY/10) 
    
     stroke("#5e453")
  strokeWeight(2)
  ellipse(x+50,200,w+mouseY/20) 
    //----------------
     stroke("#F5A65B")
  strokeWeight(2)
  ellipse(x,250,w+mouseX/30) 
    //畫方框,設定線框顏色與線條粗細
   stroke("#5e6472")
  strokeWeight(2)
  rect(x,250,w+mouseY/10) 
    
     stroke("#5e453")
  strokeWeight(2)
  ellipse(x+50,300,w+mouseY/20) 
  //-----------------
     stroke("#F5A65B")
  strokeWeight(2)
  ellipse(x,350,w+mouseX/30) 
    //畫方框,設定線框顏色與線條粗細
   stroke("#5e6472")
  strokeWeight(2)
  rect(x,350,w+mouseY/10) 
    
     stroke("#5e453")
  strokeWeight(2)
  ellipse(x+50,400,w+mouseY/20)
    //----------------------
     stroke("#F5A65B")
  strokeWeight(2)
  ellipse(x,450,w+mouseX/30) 
    //畫方框,設定線框顏色與線條粗細
   stroke("#5e6472")
  strokeWeight(2)
  rect(x,450,w+mouseY/10) 
    
     stroke("#5e453")
  strokeWeight(2)
  ellipse(x+50,400,w+mouseY/20) 
  
  }  
}