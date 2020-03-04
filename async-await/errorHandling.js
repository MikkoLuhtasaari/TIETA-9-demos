// https://jsfiddle.net/MikkoLuhtasaari/L4fw637u/21/

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

const fetchAsync = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

$("document").ready(() => {
  $("#fetchBtn").click(async () => {
    try {
      const userData = await fetchAsync(usersUrl + userId);
      $("#userData").text(JSON.stringify(userData));
      const userRepos = await fetchAsync(userData.repos_url);
      $("#repositoryData").text("Repository count: " + userRepos.length);
    } catch (error) {
      console.error(error);
    }
  });
});