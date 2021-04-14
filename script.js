//DOM
let quoteDiv = document.querySelector('.main-TopQuote');




let quote;
function pullQuote(){
    loadJSON()
}




document.addEventListener('DOMContentLoaded', () => {
    //DOM Elements
    const quoteDiv = document.querySelector('.main-TopQuote');

    async function updateQuote(){
        //fetch a random qyote from API
        const response = await
        fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
          // Update DOM elements
          quote.textContent = data.content;
          cite.textContent = data.author;
        } else {
          quote.textContent = "An error occured";
          console.log(data);
    }

}

  // Attach an event listener to the `button`
  button.addEventListener("click", updateQuote);

  // call updateQuote once when page loads
  updateQuote();
});



fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
    console.log(`${data.content} —${data.author}`)
    })