const domElementList = document.getElementsByClassName('header-position');
const domElement = document.getElementById("test");

function fu() {
  domElement.className = domElement.className + " kolya";
}

domElement.addEventListener('click', fu);

