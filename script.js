let display = document.getElementById('#display');
let keypad = document.querySelector('.keypad');
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener;
});
let ans = '';
btn.forEach((b) => {
  b.addEventListener('click', (event) => {
    if (event.target.innerText == 'CE') {
      display.innerText = '';
    } else if (display.innerText == '' && event.target.innerText == NaN) {
      console.log('Enter a number');
    }
  });
});
