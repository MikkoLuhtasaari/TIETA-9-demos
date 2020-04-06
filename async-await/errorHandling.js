// https://jsfiddle.net/MikkoLuhtasaari/L4fw637u/37/

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

const userId = "MikkoLuhtasaari";
const usersUrl = "https://api.github.com/users/";

const fetchAsync = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

document.getElementById("fetchBtn").addEventListener("click", async () => {
  try {
    const userData = await fetchAsync(usersUrl + userId);
    document.getElementById("userData").innerText = JSON.stringify(userData);
    const userRepos = await fetchAsync(userData.repos_url);
    document.getElementById("repositoryData").innerText = "Repository count: " + userRepos.length;
  } catch (error) {
    console.error(error);
  }
});