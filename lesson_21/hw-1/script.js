const result = document.querySelectorAll('div');
console.log(result);

for(var i = 1; i < result.length; i++) {
  if (i % 2)
result[i].addEventListener('click', function(){
  this.style.backgroundColor = '#000000';
});
};
