var time = Number(prompt("زمان را به دقیقه وارد کنید : "));
var timeHour = time / 60;

if (isNaN(timeHour)) {
  alert("زمان وارد شده صحیح نمیباشد.")
} else if (time < 0) {
  alert("زمان وارد شده صحیح نمیباشد.");
} else {
  alert(time + " دقیقه برابر است با " + timeHour + " ساعت.");
}