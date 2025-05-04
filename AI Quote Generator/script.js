// script.js

function generateQRCode() {
    const inputText = document.getElementById('qr-input').value;
    const qrCodeResult = document.getElementById('qr-code-result');
    
    if (inputText) {
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200`;
        qrCodeResult.innerHTML = `<h3>Your QR Code:</h3><img src="${qrApiUrl}" alt="QR Code" />`;
    } else {
        qrCodeResult.innerHTML = '<p>Please enter text or URL.</p>';
    }
}

// Event listener for the button click
document.getElementById('generate-qr-btn').addEventListener('click', generateQRCode);
