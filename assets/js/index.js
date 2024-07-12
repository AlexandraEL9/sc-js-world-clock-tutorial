// Function to update the time for specified cities (london, singapore, hong-kong, dubai)
//london
function updateTime() {
    // London
    // Find the element with the ID 'london'
    let londonElement = document.querySelector("#london");
    if (londonElement) {
      // Get the child elements for date and time within the london element
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");
      // Get the current time in the 'Europe/London' timezone using Moment.js
      let londonTime = moment().tz("Europe/London");
  
      // Format and display the current date and time for london
      londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
      londonTimeElement.innerHTML = londonTime.format(
        "h:mm:ss [<small>]A[</small>]" // Displays time with AM/PM in smaller font
      );
    }
//singapore
    // Find the element with the ID 'singapore'
    let singaporeElement = document.querySelector("#singapore");
    if (singaporeElement) {
      // Get the child elements for date and time within the singapore element
      let singaporeDateElement = singaporeElement.querySelector(".date");
      let singaporeTimeElement = singaporeElement.querySelector(".time");
      // Get the current time in the 'Asia/singapore' timezone using Moment.js
      let singaporeTime = moment().tz("Asia/Singapore");
  
      // Format and display the current date and time for singapore
      singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
      singaporeTimeElement.innerHTML = singaporeTime.format(
        "h:mm:ss [<small>]A[</small>]" // Displays time with AM/PM in smaller font
      );
    }
//dubai
    // Find the element with the ID 'dubai'
    let dubaiElement = document.querySelector("#dubai");
    if (dubaiElement) {
      // Get the child elements for date and time within the dubai element
      let dubaiDateElement = dubaiElement.querySelector(".date");
      let dubaiTimeElement = dubaiElement.querySelector(".time");
      // Get the current time in the 'Asia/Dubai' timezone using Moment.js
      let dubaiTime = moment().tz("Asia/Dubai");
  
      // Format and display the current date and time for dubai
      dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
      dubaiTimeElement.innerHTML = dubaiTime.format(
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
  
    // Extract the city name from the timezone string (e.g., "Asia/Singapore" -> "Singapore")
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