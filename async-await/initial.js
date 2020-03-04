// https://jsfiddle.net/MikkoLuhtasaari/L4fw637u/15/

// HTML

{
  /* <body>
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
</body> */
}

// Javascript

const userId = "MikkoLuhtasaari";
const usersUrl = "https://api.github.com/users/";

async function getUserAsync(id) {
  const response = await fetch(`https://api.github.com/users/${id}`);
  const data = await response.json();
  return data;
}

async function getUserRepos(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

$("document").ready(function() {
  $("#fetchBtn").click(async function() {
    const userData = await getUserAsync(userId);
    $("#userData").text(JSON.stringify(userData));
    const userRepos = await getUserRepos(userData.repos_url);
    $("#repositoryData").text("Repository count: " + userRepos.length);
  });
});
