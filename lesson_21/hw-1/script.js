const result = document.getElementsByClassName('squares-position__size');

for (let i = 0; i < result.length; i++) {
  if (i % 2) {
    result[i].addEventListener('click', function(){
      result[i].style.background = 'black';
    });
  }
}
