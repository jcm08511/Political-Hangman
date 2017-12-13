


function setup() { 
  createCanvas(800, 800);
  background(162);
  textSize(26);
  text("Welcome to Political Hangman",100,50);
  textSize(14);
  text("Please press the letters on your keyboard to guess the message.", 550,50);
  
 
  
} 

function draw() { 

  
  line(50,100,80,100);
  line(100,100,130,100);
  line(150,100,180,100);
  line(200,100,230,100);
  line(250,100,280,100);
  line(300,100,330,100);
  line(350,100,380,100);
  
  line(50,150,80,150)
  line(100,150,130,150);
  line(150,150,180,150);
  line(200,150,230,150);
  line(250,150,280,150);
  
	line(50,200,80,200); 
  line(100,200,130,200);
  line(150,200,180,200);
  
  
  }

 function keyTyped()
{
  if(keyCode == 65)
  {
    text("a",250,100);
  };
  
  if(keyCode==66)
  {
    ellipse(300,300,100,100);
   
    
  };
  
  if(keyCode==67)
  {
    text("c",300,100);
  };
  
 if(keyCode==68)
  {
    
    ellipse(250,300,20,20);
     
    
   
  };
  
  if(keyCode==69)
  {
    text("e",200,100);
  };
  
	if(keyCode==70)
	{
    
  	ellipse(353,300,20,20);
    
	};
  
  if(keyCode==71)
  {
   
    ellipse(320,290,10,10);
    
  };
  
  if(keyCode==72)
  {
    text("h", 350, 100)
  };
  
  if(keyCode==73)
  {
    text("I", 50, 100);
  };
  
  if(keyCode==74)
  {
    line(300, 300,300,500);

    };
  
  if(keyCode==75)
  {
    line(300,400,100,239);
    
  };
  
  if(keyCode==76)
  {
    line(300,400,500,239);
    
  };
  
  if(keyCode==77)
  {
    text("m",100,100);
    text("m",200,150);
  };
  
  if(keyCode==78)
  {
    text("N", 50,200);
  };
  
  if(keyCode==79)
  {
    text("o",100,200);
  };
  
  if(keyCode==80)
  {
    text("p",150,100);
    text("p",250,150);
  };
  
  if(keyCode==81)
  {
    ellipse(280,290,10,10);
    
  };
  
  if(keyCode==82)
  {
    text("r",100,150);
    
  };
  
  if(keyCode==83)
  {
    line(300,500,100,600);
    
  };
  
  if(keyCode==84)
  {
    text("T",50,150);
  };
  
  if(keyCode==85)
  {
    
    text("u",150,150);
  };
  
  if(keyCode==86)
  {
    line(300,500,600,600);
     
  };
  
  if(keyCode==87)
  {
    text("w", 150,200);
  };
  
  if(keyCode==88)
  {
    ellipse(300,305,10,10);
     
  };
  
  if(keyCode==89)
  {
    ellipse(500,239,10,10);
     
  };
  
  if(keyCode==90)
  {
    ellipse(100,239,10,10);
     
  };
  
}

 