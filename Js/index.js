// dynamically injecting header
window.addEventListener("DOMContentLoaded", function () {
  fetch("../Pages/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#header").innerHTML = data;
    });
});

// dynamically injecting footer
window.addEventListener("DOMContentLoaded", function () {
  fetch("../Pages/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#footer").innerHTML = data;
    });
});