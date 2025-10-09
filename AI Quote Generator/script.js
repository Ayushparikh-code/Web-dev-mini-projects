// your code goes here
// script.js

const btn = document.getElementById('getQuoteBtn');
const quoteText = document.getElementById('quoteText');
const quoteContainer = document.getElementById('quoteContainer');

// Util: set loading state with a spinner icon on the button
function setLoading(isLoading) {
  quoteContainer.setAttribute('aria-busy', String(isLoading));
  if (isLoading) {
    btn.setAttribute('disabled', 'true');
    // Replace wand icon with spinner
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Loading...`;
  } else {
    btn.removeAttribute('disabled');
    btn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Get Quote`;
  }
}

// Fetch a random quote from Quotable
async function fetchQuote() {
  try {
    setLoading(true);
    // Quotable: GET https://api.quotable.io/random
    const res = await fetch('https://api.quotable.io/random', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Expecting { content, author }
    const content = data.content?.trim() || 'No quote available right now.';
    const author = data.author ? ` — ${data.author}` : '';

    quoteText.textContent = `${content}${author}`;
  } catch (err) {
    console.error(err);
    quoteText.textContent = 'Could not fetch a quote. Please try again.';
  } finally {
    setLoading(false);
  }
}

// Events
btn.addEventListener('click', fetchQuote);

// Initial fetch on page load
window.addEventListener('DOMContentLoaded', fetchQuote);
