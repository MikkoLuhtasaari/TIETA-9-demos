// https://jsfiddle.net/MikkoLuhtasaari/cdLk9s6z/

// HTML

{/* <body>
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
//     $.getJSON({
//       url: usersUrl + userId,
//       success: function(data, status) {
//         if (status === "success") {
//           $("#userData").text(JSON.stringify(data));
//           $.getJSON({
//             url: data.repos_url,
//             success: function(data, status) {
//               if (status === "success") {
//                 $("#repositoryData").text("Repository count: " + data.length);
//               } else {
//                 console.error("Something went wrong with the request!");
//               }
//             }
//           })
//         } else {
//           console.error("Something went wrong with the request!");
//         }
//       }
//     })
//   })
// })