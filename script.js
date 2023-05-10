function createPoint(x, y) {
  const svgEL = document.querySelector("svg");
  const circleEL = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  svgEL.appendChild(circleEL);
  circleEL.setAttribute("cx", x);
  circleEL.setAttribute("cy", y);
  circleEL.setAttribute("fill", "blue");
  circleEL.setAttribute("r", 5);
}

const degToRad = (deg) => (deg * Math.PI) / 180;

function findXY(r, deg, offset) {
  const rad = degToRad(deg);
  let x = r * Math.cos(rad);
  let y = r * Math.sin(rad);
  if (offset) {
    x = x + offset.x;
    y = y + offset.y;
  }
  return { x, y };
}

const offset = { x: 150, y: 150 };

function drawPoint(r, deg, color) {
  const p = findXY(r, deg, offset);
  createPoint(p.x, p.y, color);
}

function createLine(p1, p2, strong) {
  const svgEL = document.querySelector("svg");
  const lineEL = document.createElementNS("http://www.w3.org/2000/svg", "line");
  svgEL.appendChild(lineEL);
  lineEL.setAttribute("x1", p1.x);
  lineEL.setAttribute("y1", p1.y);
  lineEL.setAttribute("x2", p2.x);
  lineEL.setAttribute("y2", p2.y);
  lineEL.setAttribute("stroke", "blue");
  lineEL.setAttribute("stroke-width", strong ? 2 : 1);
}

function drawTick(deg) {
  const strong = deg % 30 == 0;
  const p1 = findXY(100, deg, offset);
  const p2 = findXY(90, deg, offset);
  createLine(p1, p2, strong);
}

for (let deg = 0; deg < 360; deg += 6) {
  drawTick(deg);
}
