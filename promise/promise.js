// https://jsfiddle.net/MikkoLuhtasaari/u4ohxq1w/

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

// JS (JQuery 3.4.1)

// const userId = "MikkoLuhtasaari";
// const usersUrl = "https://api.github.com/users/";

// $("document").ready(function() {
//   $("#fetchBtn").click(function() {
//     fetch(usersUrl + userId)
//       .then((response) => {
//         return response.json();
//       })
//       .then((user) => {
//         $("#userData").text(JSON.stringify(user));
//         return user;
//       })
//       .then((user) => {
//         fetch(user.repos_url)
//           .then((response) => {
//           	return response.json();
//           })
//           .then((repos) => {
//             $("#repositoryData").text("Repository count: " + repos.length);
//           })
//           .catch((error) => {
//            console.error("error");
//           })
//       })
//       .catch((error) => {
//         console.error("error");
//       })
//   })
// })