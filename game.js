let balls;
function setup() {
  canvas = createCanvas(500, 400);

  noSmooth();
  background(0);
}

function apply3d(vect, factor = 12) {
  const { x, y } = vect;
  return { x: x * y + factor * x, y: factor * y };
}

function draw() {
  background(0);
  push();
  translate(width / 2, 0);
  rectMode(CENTER);

  ball_pos = apply3d({ x: mouseX, y: mouseY });
  circle(ball_pos.x, ball_pos.y, 10);

  pop();
}
