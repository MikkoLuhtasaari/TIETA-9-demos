// https://jsfiddle.net/MikkoLuhtasaari/j7xsbf4h/

// HTML

{ /*
<body>
  <button id="fetchBtn">
    Fetch data
  </button>
  <p id="userData1">
    User 1 data goes here
  </p>
  <hr>
  <p id="userData2">
    User 2 data goes here
  </p>
</body>
*/ }

const url = "https://api.github.com/users/";
const usersArray = ["MikkoLuhtasaari", "tuni-testing-account-creation"];

const fetchAsync = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

document.getElementById("fetchBtn").addEventListener("click", async () => {
  const usersData = usersArray.map(async user => fetchAsync(url + user));
  Promise.all(usersData).then(completed => {
    completed.map((user, index) => {
      document.getElementById(`userData${index + 1}`).innerText = JSON.stringify(user);
    });
  });
});