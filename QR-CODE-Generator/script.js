const btn = document.querySelector('.btn');
const code = document.querySelector('.code');
const input = document.querySelector('.input');
const toast = document.querySelector('#toast');

btn.addEventListener('click', generate);

function generate() {
	const data = input.value;
	const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
	code.src = URL;

	toastDiv();
}

function toastDiv() {
	toast.className = "show";
	setTimeout(function() {
		toast.className = toast.className.replace("show", "");
	}, 2000)
}
