let currentColor = "black";
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let board = document.querySelector("#screen");
let ctx = board.getContext("2d");

document.querySelectorAll(".colorArea .color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});
board.addEventListener("mousedown", mouseDownEvent);
board.addEventListener("mousemove", mouseMoveEvent);
board.addEventListener("mouseup", mouseUpEvent);
document.querySelector(".clear").addEventListener("click", clearBoard);

function colorClickEvent(e) {
  let color = e.target.getAttribute("data-color");
  currentColor = color;

  document.querySelector(".color.active").classList.remove("active");
  e.target.classList.add("active");
}

function mouseDownEvent(e) {
  canDraw = true;
  mouseX = e.pageX - board.offsetLeft;
  mouseY = e.pageY - board.offsetTop;
}

function mouseMoveEvent(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY);
  }
}

function mouseUpEvent() {
  canDraw = false;
}

function draw(x, y) {
  let pointX = x - board.offsetLeft;
  let pointy = y - board.offsetTop;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointy);
  ctx.closePath();
  ctx.strokeStyle = currentColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointy;
}

function clearBoard() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
