var formEl = $("#form");
var sentMessageEl = $("#sentMessage");
var incorrectMessageEl = $("#incorrectMessage");

$("#submitBtn").click(async () => {
  var email = $("#email").val().trim();
  console.log(email);
  const response = await fetch("/api/merchant/forgotPassword", {
    method: "POST",
    body: JSON.stringify({ email: email }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    //hide form and display message
    formEl.hide();
    sentMessageEl.show();
  } else {
    alert("Sorry! No account with that email was found. Please try again.");
  }
});
