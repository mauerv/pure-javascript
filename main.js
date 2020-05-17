const alertMessage = function () {
  alert("Hello!");
};

const addElement = function () {
  const list = document.getElementById("list");
  const newIndex = list.childNodes.length + 1;
  let li = document.createElement("li");
  let text = document.createTextNode(`New list item ${newIndex}`);
  li.appendChild(text);
  list.appendChild(li);
};

const removeFirst = function () {
  const list = document.getElementById("list");
  if (list.childNodes.length > 0) {
    list.removeChild(list.firstElementChild);
  } else {
    alert("There are no elements to remove.");
  }
};

const removeLast = function () {
  const list = document.getElementById("list");
  if (list.childNodes.length > 0) {
    list.removeChild(list.lastElementChild);
  } else {
    alert("There are no elements to remove.");
  }
};

const drawLine = function (x1, y1, x2, y2, ratio) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};

const animate = function (ratio) {
  ratio = ratio || 0;
  drawLine(0, 0, 200, 0, ratio);
  if (ratio < 1) {
    requestAnimationFrame(function () {
      animate(ratio + 0.01);
    });
  }
};
