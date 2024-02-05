const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
let counter = 0;
const display = document.querySelector(".counterValue");

button1.addEventListener("click", function () {
	counter = counter - 1;
	display.innerText = counter;
});
button2.addEventListener("click", function () {
	counter = 0;
	display.innerText = counter;
});

button3.addEventListener("click", function () {
	counter = counter + 1;

	display.innerText = counter;
});
