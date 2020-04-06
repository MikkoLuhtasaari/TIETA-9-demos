// https://jsfiddle.net/MikkoLuhtasaari/u4ohxq1w/25/

// HTML

{/* <body>
  <h1>
    Promises with fetch
  </h1>
  <button id="fetchBtn">
    Fetch data
  </button>
  <p id="userData">
    User data goes here
  </p>
  <hr>
  <p id="repositoryData">
    Repository data goes here
  </p>
</body> */}

const userId = "MikkoLuhtasaari";
const usersUrl = "https://api.github.com/users/";

document.getElementById("fetchBtn").addEventListener("click", function() {
  fetch(usersUrl + userId)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      document.getElementById("userData").innerText = JSON.stringify(user);
      return user;
    })
    .then((user) => {
      fetch(user.repos_url)
        .then((response) => {
          return response.json();
        })
        .then((repos) => {
          document.getElementById("repositoryData").innerText = "Repository count: " + repos.length;
        })
        .catch((error) => {
          console.error("error");
        })
    })
    .catch((error) => {
      console.error("error");
    })
});