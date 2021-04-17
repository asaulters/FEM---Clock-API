//DOM
let quoteDiv = document.querySelector('.TopQuote');
let locationDiv = document.querySelector('.location');
let timeDiv = document.querySelector('.topTimeH1');
let timeZoneDiv = document.querySelector('.topTimeH4');
let backPic = document.querySelector('.main-Div');
let greetingDiv = document.querySelector('.topTimeGreeting');


//Quote
document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
const quote = document.querySelector(".quote");
const cite = document.querySelector(".cite");

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      cite.textContent = `- ${data.author}`;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }


  // call updateQuote once when page loads
  updateQuote();
});

//Location API
document.addEventListener("DOMContentLoaded", () => {
    //Dom elements
    
    async function updateLocation(){
        //Fetch location from location API
        const response = await fetch("https://freegeoip.app/json/");
        const data = await response.json();
        if (response .ok){
            //upate DOM elements
            locationDiv.textContent= ` ${data.city}, ${data.country_code}`;
        } else {
            console.log("Error@!")
        }
    }
    // call when page loads
    updateLocation()

});

// clock API
document.addEventListener('DOMContentLoaded', () => {
    //DOM elements
    async function updateTime(){
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();
        if(response.ok){
          //get hours and minutes for clock
          const now =  new Date()
          let a = now.getHours();
          let b = now.getMinutes()<10?'0':'' + now.getMinutes();
          //insert hours, mins, and TZ into html
          timeDiv.textContent = `${a}:${b}`;
          timeZoneDiv.textContent = ` ${data.abbreviation}`
          //update greeting and background based upon time
          if(a >= 5 && a <= 12){
            greetingDiv.textContent = "Good morning, it's currently";
            document.body.style.background = 'red';
          } else if (a >= 12 & a <= 18){
            greetingDiv.textContent ="Good afternoon, it's currently";
            document.body.style.background = 'red';
          } else {
            greetingDiv.textContent ="Good evening, it's currently";
            // document.body.style.background = url('/assets/desktop/bg-image-nighttime.jpg');
          }
  
        }
        
    }
    //call when page loaded
    updateTime();
});

