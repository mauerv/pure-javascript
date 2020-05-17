const alertMessage = function () {
  alert("Hello!");
};

const addElement = function () {
  const list = document.getElementById("list");
  let li = document.createElement("li");
  let text = document.createTextNode("New list item");
  li.appendChild(text);
  list.appendChild(li);
};
