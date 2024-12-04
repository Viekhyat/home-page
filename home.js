const flightTable = document.getElementById("flightTable");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    // 1. Get flight data from the server
    fetch("https://api.example.com/flights") // Replace with your API endpoint
        .then(response => response.json()) // Assuming JSON response
        .then(flightsData => {
            // 2. Clear existing table rows
            flightTable.querySelector("tbody").innerHTML = "";

            // 3. Iterate through flight data and create table rows
            flightsData.forEach(flight => {
                const row = flightTable.insertRow();
                const fromCell = row.insertCell();
                const toCell = row.insertCell();
                const arrivalCell = row.insertCell();
                const departureCell = row.insertCell();
                const passengersCell = row.insertCell();
                const classCell = row.insertCell();

                fromCell.textContent = flight.from;
                toCell.textContent = flight.to;
                arrivalCell.textContent = flight.arrival;
                departureCell.textContent = flight.departure;
                passengersCell.textContent = flight.passengers;
                classCell.textContent = flight.class;
            });
        })
        .catch(error => {
            console.error("Error fetching flight data:", error);
            // Handle errors gracefully (e.g., display an error message)
        });
});
const loginForm = document.getElementById('login-form');
const logoutButton = document.getElementById('logout-button');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are valid
  // (in a real-world app, you would check against a database or API)
  if (username === 'admin' && password === 'password') {
    // Store the username in local storage
    localStorage.setItem('username', username);

    // Show a success message
    alert('Login successful!');
  } else {
    // Show an error message
    alert('Invalid username or password');
  }
});

logoutButton.addEventListener('click', () => {
  // Clear the username from local storage
  localStorage.removeItem('username');

  // Show a success message
  alert('Logout successful!');
});

// Check if the user is already logged in
const storedUsername = localStorage.getItem('username');
if (storedUsername) {
  // Show a welcome message
  alert(`Welcome, ${storedUsername}!`);
}