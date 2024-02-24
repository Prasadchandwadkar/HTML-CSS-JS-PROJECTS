const input = document.querySelector(".qr-input");
const button = document.querySelector(".qr-button");
const img = document.querySelector(".qr-img");

button.addEventListener("click", () => {
	const inputValue = input.value;

	if (!inputValue) {
		alert("please enter a valid url");
	} else {
		img.src = `https:api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
		img.alt = `QR for this Url${inputValue}`;
	}
});
