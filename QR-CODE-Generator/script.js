function generateQRCode() {
	// Get the text input value
	const inputText = document.getElementById("input-text").value;
	const qrcodeImage = document.getElementById("qrcode");
	const toastMessage = document.getElementById("toast");

	if (inputText.trim() === "") {
		alert("Please enter some text to generate a QR code.");
		return;
	}

	// Generate the QR code using Google's chart API
	const qrCodeUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(inputText)}&chs=200x200&chld=L|0`;

	// Set the QR code image
	qrcodeImage.src = qrCodeUrl;
	qrcodeImage.style.display = "block"; // Make the image visible

	// Display the toast message
	toastMessage.style.display = "block";
	toastMessage.innerText = "QR Code Successfully Generated!!!";

	// Hide the toast message after 3 seconds
	setTimeout(() => {
		toastMessage.style.display = "none";
	}, 3000);
}
