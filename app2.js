// Fetch a random quote from the API
async function fetchRandomQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching random quote:', error);
      return null;
    }
  }
  
  // Display the quote on the page
  function displayQuote(quote) {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    
    quoteText.textContent = quote.content;
    quoteAuthor.textContent = `- ${quote.author}`;
  }
  
  // Event listener for the "New Quote" button
  const newQuoteBtn = document.getElementById('new-quote-btn');
  newQuoteBtn.addEventListener('click', async function () {
    const quote = await fetchRandomQuote();
    if (quote) {
      displayQuote(quote);
    }
  });
  
  // Initial quote load
  window.addEventListener('DOMContentLoaded', async function () {
    const quote = await fetchRandomQuote();
    if (quote) {
      displayQuote(quote);
    }
  });