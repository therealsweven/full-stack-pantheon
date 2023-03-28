const loginFormHandler = async (event) => {
  event.preventDefault();
  var login_id = $("#employeeLogin").val();

  if (login_id) {
    const response = await fetch("../api/employee/login", {
      method: "POST",
      body: JSON.stringify({ login_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/pos/tables");
    } else {
      var login_fail_message = $("#login-fail-message");
      login_fail_message.text("Invalid Login ID");
    }
  }
};

$("#login").click(loginFormHandler);
