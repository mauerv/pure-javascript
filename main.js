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
