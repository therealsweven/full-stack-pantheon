var usernameFormEl = $("#usernameForm");
var passwordFormEl = $("#passwordForm");
var sentMessageEl = $("#sentMessage");
var UNsentMessageEl = $("#UNsentMessage");
var incorrectMessageEl = $("#incorrectMessage");

$("#pwBtn").click(() => {
  passwordFormEl.show();
  usernameFormEl.hide();
});

$("#unBtn").click(() => {
  usernameFormEl.show();
  passwordFormEl.hide();
});

$("#pwSubmitBtn").click(async () => {
  var email = $("#email1").val().trim();
  console.log(email);
  const response = await fetch("/api/merchant/forgotPassword", {
    method: "POST",
    body: JSON.stringify({ email: email }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    //hide form and display message
    passwordFormEl.hide();
    sentMessageEl.show();
  } else {
    alert("Sorry! No account with that email was found. Please try again.");
  }
});

$("#unSubmitBtn").click(async () => {
  var email = $("#email2").val().trim();
  console.log(email);
  const response = await fetch("/api/merchant/forgotUsername", {
    method: "POST",
    body: JSON.stringify({ email: email }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    //hide form and display message
    usernameFormEl.hide();
    UNsentMessageEl.show();
  } else {
    alert("Sorry! No account with that email was found. Please try again.");
  }
});
