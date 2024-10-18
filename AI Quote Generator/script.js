const getQuoteBtn = document.getElementById("getQuoteBtn");
const quoteText = document.getElementById("quoteText");
const historyList = document.getElementById("historyList");
const prevQuoteBtn = document.getElementById("prevQuoteBtn");
const nextQuoteBtn = document.getElementById("nextQuoteBtn");
const searchInput = document.getElementById("searchInput");
const fileUpload = document.getElementById("fileUpload");

let quoteHistory = [];
let currentQuoteIndex = -1;

// Sample quote database
const quotesDB = [
    { content: "The best way to predict the future is to create it.", author: "Peter Drucker", keywords: ["future", "create"] },
    { content: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll", keywords: ["life", "react"] },
    { content: "Change your thoughts and you change your world.", author: "Norman Vincent Peale", keywords: ["change", "thoughts", "world"] },
    
    // Technical Quotes
    { content: "Simplicity is the soul of efficiency.", author: "Austin Freeman", keywords: ["simplicity", "efficiency"] },
    { content: "First, solve the problem. Then, write the code.", author: "John Johnson", keywords: ["problem-solving", "coding"] },
    { content: "Good code is its own best documentation.", author: "Steve McConnell", keywords: ["code", "documentation"] },
    { content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler", keywords: ["programming", "understand"] },
    { content: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay", keywords: ["programming", "learning"] },
    
    // Devotional Quotes
    { content: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr.", keywords: ["faith", "courage"] },
    { content: "The mind is everything. What you think you become.", author: "Buddha", keywords: ["mind", "thoughts"] },
    { content: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", keywords: ["resilience", "glory"] },
    { content: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha", keywords: ["present", "mindfulness"] },
    { content: "When you go through deep waters, I will be with you.", author: "Isaiah 43:2", keywords: ["faith", "strength"] },

    // AI Quotes
    { content: "Artificial intelligence is the new electricity.", author: "Andrew Ng", keywords: ["AI", "electricity"] },
    { content: "The future is already here — it's just not very evenly distributed.", author: "William Gibson", keywords: ["future", "technology"] },
    { content: "What we need is more innovation, not more regulations.", author: "George W. Bush", keywords: ["innovation", "regulations"] },
    { content: "AI is not a replacement for human intelligence, but a tool that can amplify it.", author: "Unknown", keywords: ["AI", "intelligence"] },
    { content: "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.", author: "Sydney J. Harris", keywords: ["computers", "human"] }
];

// Get a random quote or a quote based on the search term
getQuoteBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    // Check if the user has entered a search term
    if (searchTerm) {
        const matchedQuotes = quotesDB.filter(quote =>
            quote.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
        );

        // Display a random matched quote if found
        if (matchedQuotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * matchedQuotes.length);
            const selectedQuote = matchedQuotes[randomIndex];
            const quoteString = `"${selectedQuote.content}" - ${selectedQuote.author}`;
            displayQuote(quoteString);
            addToHistory(quoteString);
        } else {
            quoteText.innerHTML = "No matching quote found. Please try a different keyword.";
        }
    } else {
        getQuote(); // Fetch a random quote if no search term is provided
    }
});

// Previous and Next Buttons functionality
prevQuoteBtn.addEventListener("click", () => {
    if (currentQuoteIndex > 0) {
        currentQuoteIndex--;
        displayQuote(quoteHistory[currentQuoteIndex]);
    }
});

nextQuoteBtn.addEventListener("click", () => {
    if (currentQuoteIndex < quoteHistory.length - 1) {
        currentQuoteIndex++;
        displayQuote(quoteHistory[currentQuoteIndex]);
    }
});

function getQuote() {
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            const quote = `"${data.content}" - ${data.author}`;
            quoteHistory.push(quote);
            currentQuoteIndex = quoteHistory.length - 1;
            displayQuote(quote);
            addToHistory(quote);
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            quoteText.innerHTML = "Failed to fetch a quote. Please try again later.";
        });
}

function displayQuote(quote) {
    quoteText.innerHTML = quote;
}

function addToHistory(quote) {
    if (!quoteHistory.includes(quote)) {
        quoteHistory.push(quote);
        const li = document.createElement("li");
        li.textContent = quote;
        historyList.appendChild(li);
    }
}

// File upload functionality (currently just a placeholder)
fileUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        alert(`File uploaded: ${file.name}`);
        // You can add more functionality to handle the file as needed
    }
});
