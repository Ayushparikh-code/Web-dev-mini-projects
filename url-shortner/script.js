document.addEventListener("DOMContentLoaded", function () {
    const shortenButton = document.getElementById("shortenButton");
    const originalUrlInput = document.getElementById("originalUrl");
    const shortenedUrlText = document.getElementById("shortenedUrl");

    shortenButton.addEventListener("click", function () {
        const originalUrl = originalUrlInput.value;
        if (originalUrl.trim() === "") {
            alert("Please enter a valid URL.");
            return;
        }

        // In a real implementation, you would send a request to a server to shorten the URL.
        // For simplicity, we'll just display the original URL here.
        shortenedUrlText.textContent = `Shortened URL: ${originalUrl}`;
    });
});