let btn = document.querySelector("button");
btn.addEventListener("click", countDown);

let hours = "0";
let minutes = "0";
let seconds =  "10";

hours < 10 ? hours = '0' + hours : hours = hours;
minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
seconds < 10 ? seconds = '0' + seconds : seconds = seconds;

let countContainer = document.getElementById('count');

function countDown() {
   let thisInterval = setInterval(() => {
   let watch = hours + ':' + minutes + ':' + seconds;
   countContainer.innerHTML = watch;
   if(Number(seconds) === 0) {
      clearInterval(thisInterval);
   }
   if(seconds > 10) {
      seconds -= 1;
   } else {
      seconds = Number(seconds) -1;
      seconds = `0${seconds}`;
   }

   }, 1000);
}
