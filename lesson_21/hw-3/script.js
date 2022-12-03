const result = document.getElementsByClassName('circle');
console.log(result);

let clone = result[0].cloneNode(true);
result[0].after(clone);

result[1].addEventListener('click', function () {
   result[1].style.top = '620px';
});