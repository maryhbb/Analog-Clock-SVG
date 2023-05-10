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
