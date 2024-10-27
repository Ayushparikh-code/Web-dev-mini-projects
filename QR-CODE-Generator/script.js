function generateQRCode() {
    const inputText = document.getElementById('input-text').value;
    const qrCodeImage = document.getElementById('qrcode');
    const toast = document.getElementById('toast');

    if (inputText.trim() === "") {
        alert("Please enter some text to generate a QR code.");
        return;
    }

   
    const qrCodeUrl = https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200;
    qrCodeImage.src = qrCodeUrl;
    qrCodeImage.style.display = 'block'; 

   
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000); 
}
