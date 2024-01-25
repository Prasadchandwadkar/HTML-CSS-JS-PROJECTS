const btn = document.querySelector(".btn");
const hex = document.querySelector(".hex");

function randomColor() {
	let letters = "0123456789ABCDEF";
	let code = "#";
	for (let i = 0; i < 6; i++) {
		code += letters[Math.floor(Math.random() * 16)];
	}
	return code;
}

btn.addEventListener("click", () => {
	document.body.style.backgroundColor = randomColor();
  hex.innerHTML = randomColor();
});
