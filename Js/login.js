// variables for checking correct email and password
const adminMail = "admin@admin.com";
const adminPass = "123456";

// function to check credentials and display alert
function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (email == adminMail && pass === adminPass) {
    alert("Login successful");
  } else {
    alert("Wrong Credentials!");
  }
}