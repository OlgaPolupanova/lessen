const result = document.getElementsByClassName('circle');
console.log(result)

result[0].addEventListener('click', function () {
   result[1].style.display = 'block';
});