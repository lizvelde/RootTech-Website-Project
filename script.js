/* global createCanvas, background, noStroke, rect, windowWidth, windowHeight, cursor, circle, mouseX, mouseY , noCursor, fill, text, center, textSize, textFont*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 168, 119);
  noCursor();
}

function draw() {
  noStroke();
  noCursor();
  background(50, 168, 119);
  fill(255);
  circle(mouseX, mouseY, 10);
  textSize(50);
  textFont("Helvetica");
  fill(255);
  text("Welcome to my Website!", 450, 150);
  textSize(30);
  text(
    "Hello! I am Lizeth and I am 17 years old. My birthday is on June 20th",
    290,
    250
  );
  text(
    "I am from the Seattle area of Washington. I know Spanish and I'm taking AP Japanese next year as a senior",
    38,
    300
  );
  text(
    "I am passionate about coding and design, so I aim to major in something related to UX/UI or HCDE",
    110,
    350
  );
  text("This is my first actual website, so have fun!", 440, 400);
}
