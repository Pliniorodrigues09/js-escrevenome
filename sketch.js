function setup() {
    createCanvas(600, 600);
    background("blue");
  }
  
  function setu draw() {
  
    stroke("black");
    fill("yellow");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  