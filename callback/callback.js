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

const userId = "MikkoLuhtasaari";
const usersUrl = "https://api.github.com/users/";

document.getElementById("fetchBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        document.getElementById("userData").innerText = xhr.responseText;
        const xhr2 = new XMLHttpRequest();
        xhr2.onreadystatechange = function() {
          if (xhr2.readyState == 4) {
            if (xhr2.status == 200) {
              document.getElementById("repositoryData").innerText = "Repository count: " + JSON.parse(xhr2.responseText).length;
            } else {
              console.error("Unsuccessful transfer (error code: " + xhr.statusText + ")");
            }
          }
        }

        xhr2.open("GET", JSON.parse(xhr.responseText).repos_url, true)
        xhr2.send();
      } else {
        console.error("Unsuccessful transfer (error code: " + xhr2.statusText + ")");
      }
    }
  }

  xhr.open("GET", usersUrl + userId, true)
  xhr.send();
});
