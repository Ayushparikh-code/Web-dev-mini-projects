const getQuoteBtn = document.getElementById("getQuoteBtn");
const quoteText = document.getElementById("quoteText");

getQuoteBtn.addEventListener("click", () => {
    getQuoteBtn.classList.add("loading");
    getQuoteBtn.textContent = "Loading...";
    getQuote();
});

// Initially, remove loading state
getQuoteBtn.classList.remove("loading");
getQuoteBtn.textContent = "Get Quote";

function getQuote() {
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            quoteText.innerHTML = `"${data.content}" - ${data.author}`;
            getQuoteBtn.classList.remove("loading");
            getQuoteBtn.textContent = "Get Quote";
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            quoteText.innerHTML = "Failed to fetch a quote. Please try again later.";
            getQuoteBtn.classList.remove("loading");
            getQuoteBtn.textContent = "Get Quote";
        });
}
