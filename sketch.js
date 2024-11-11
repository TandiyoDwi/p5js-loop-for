function setup() {
  createCanvas(1000, 800);
  textSize(32); 
}

function draw() {
  background (156,5,5); 
  let emoji = "☠️";
  
  for (let y = 50; y <= height; y += 60) {
    for (let x = 50; x <= width; x += 60) {
      text(emoji, x, y);
    }
  }
}
