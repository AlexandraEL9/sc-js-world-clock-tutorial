// Function to update the time for specified cities (toronto, singapore, hong-kong, dubai)
//toronto
function updateTime() {
    // Toronto
    // Find the element with the ID 'london'
    let torontoElement = document.querySelector("#toronto");
    if (torontoElement) {
      // Get the child elements for date and time within the toronto element
      let torontoDateElement = torontoElement.querySelector(".date");
      let torontoTimeElement = torontoElement.querySelector(".time");
      // Get the current time in the 'America/Toronto' timezone using Moment.js
      let torontoTime = moment().tz("America/Toronto");
  
      // Format and display the current date and time for london
      torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
      torontoTimeElement.innerHTML = torontoTime.format(
        "h:mm:ss [<small>]A[</small>]" // Displays time with AM/PM in smaller font
      );
    }
//madrid
    // Find the element with the ID 'madrid'
    let madridElement = document.querySelector("#madrid");
    if (madridElement) {
      // Get the child elements for date and time within the madrid element
      let madridDateElement = madridElement.querySelector(".date");
      let madridTimeElement = madridElement.querySelector(".time");
      // Get the current time in the 'Europe/Madrid' timezone using Moment.js
      let madridTime = moment().tz("Europe/Madrid");
  
      // Format and display the current date and time for madrid
      madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
      madridTimeElement.innerHTML = madridTime.format(
        "h:mm:ss [<small>]A[</small>]" // Displays time with AM/PM in smaller font
      );
    }
//kathmandu
    // Find the element with the ID 'kathmandu'
    let kathmanduElement = document.querySelector("#kathmandu");
    if (kathmanduElement) {
      // Get the child elements for date and time within the dubai element
      let kathmanduDateElement = kathmanduElement.querySelector(".date");
      let kathmanduTimeElement = kathmanduElement.querySelector(".time");
      // Get the current time in the 'Asia/Kathmandu' timezone using Moment.js
      let kathmanduTime = moment().tz("Asia/Kathmandu");
  
      // Format and display the current date and time for kathmandu
      kathmanduDateElement.innerHTML = kathmanduTime.format("MMMM Do YYYY");
      kathmanduTimeElement.innerHTML = kathmanduTime.format(
        "h:mm:ss [<small>]A[</small>]" // Displays time with AM/PM in smaller font
      );
    }
}

// Function to update the displayed time for the selected city from the dropdown
function updateCity(event) {
    // Get the selected timezone value from the event
    let cityTimeZone = event.target.value;
  
    // If the selected timezone is 'current', guess the user's current timezone
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
  
    // Extract the city name from the timezone string (e.g., "America/Los_Angeles" -> "Los Angeles")
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    // Get the current time in the selected timezone using Moment.js
    let cityTime = moment().tz(cityTimeZone);
    // Find the element with the ID 'cities' where the city time will be displayed
    let citiesElement = document.querySelector("#cities");
  
    // Update the inner HTML of the 'cities' element to show the selected city's time
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">All Cities</a>
    `;
  }

// Initial call to update the time for countries
updateTime();
// Set an interval to update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Find the city selection dropdown element
let citiesSelectElement = document.querySelector("#city");
// Add an event listener to the dropdown to call 'updateCity' function whenever a new city is selected
citiesSelectElement.addEventListener("change", updateCity);