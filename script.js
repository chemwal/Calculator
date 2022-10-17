console.log('Hello World');
let display = document.getElementById('display');
let btn = document.querySelectorAll('button');
let ans = '';
btn.forEach((b) => {
  b.addEventListener('click', (event) => {
    if (event.target.innerText == 'CE') {
      ans = '';
      display.innerText = ans;
    } else if (event.target.innerText == '=') {
      display.innerText = eval(ans);
      ans = '';
    } else {
      ans += event.target.innerText;
      display.innerText = ans;
    }
  });
});
