const loginFormHandler = async (event) => {
  event.preventDefault();

  var username = $("#username").val();
  var password = $("#password").val();

  if (username && password) {
    const response = await fetch("/api/merchant/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/pos/login");
    } else {
      alert("Failed to log in.");
    }
  }
};

$("#submitBtn").click(loginFormHandler);
