const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("new reg");
  var business_name = $("#company_name").val().trim();
  var username = $("#username").val().trim();
  var address = $("#address").val().trim();
  var state = $("#state").val();
  var zip = $("#zipcode").val().trim();
  var email = $("#merchant_email").val().trim();
  var password = $("#merchant_password").val();
  console.log(business_name, username, email, password, "hello");
  if (username && email && password) {
    const response = await fetch("/api/merchant/signup", {
      method: "POST",
      body: JSON.stringify({ business_name, username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert(
        "Something went wrong...that email or username may already be attached to a merchant account. Please enter a different email and try again."
      );
    }
  }
};

$("#submitBtn").click(signupFormHandler);
