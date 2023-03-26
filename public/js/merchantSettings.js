// password check
$("#pwSubmitBtn").click(async (event) => {
  event.preventDefault();
  const password = $("#merchantPassword").val();
  if (password) {
    const response = await fetch("/api/merchant/settings/login", {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      $("#accountInfo").show();
      $("#pwCheck").hide();
    } else {
      alert("Failed to log in.");
    }
  }
});

// Display update forms
$("#addressUpdate").click(() => {
  $("#addressForm").show();
  $("#phoneForm").hide();
  $("#emailForm").hide();
  $("#passwordForm").hide();
});

$("#phoneUpdate").click(() => {
  $("#addressForm").hide();
  $("#phoneForm").show();
  $("#emailForm").hide();
  $("#passwordForm").hide();
});

$("#emailUpdate").click(() => {
  $("#addressForm").hide();
  $("#phoneForm").hide();
  $("#emailForm").show();
  $("#passwordForm").hide();
});

$("#passwordUpdate").click(() => {
  $("#addressForm").hide();
  $("#phoneForm").hide();
  $("#emailForm").hide();
  $("#passwordForm").show();
});

// Do the updates

$("#addressFormSubmit").click(async (event) => {
  event.preventDefault();
  const newAddress = $("#addressInput").val().trim();
  const newCity = $("#cityInput").val().trim();
  const newState = $("#stateInput").val();
  const newZip = $("#zipInput").val().trim();
  if (newAddress && newCity && newState && newZip) {
    const response = await fetch("/api/merchant/", {
      method: "PUT",
      body: JSON.stringify({
        address: newAddress,
        city: newCity,
        state: newState,
        zip: newZip,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      $("#addressForm").hide();
      alert("Account Successfully Updated");
    } else {
      alert("Something went wrong...");
    }
  } else {
    alert("Please fill out all fields");
  }
});

$("#phoneFormSubmit").click(async (event) => {
  event.preventDefault();
  const newPhone = $("#phoneInput").val().trim();
  if (newPhone) {
    const response = await fetch("/api/merchant/", {
      method: "PUT",
      body: JSON.stringify({
        phone: newPhone,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      $("#phoneForm").hide();
      alert("Account Successfully Updated");
    } else {
      alert("Something went wrong...");
    }
  } else {
    alert("Please enter a new phone number");
  }
});

$("#emailFormSubmit").click(async (event) => {
  event.preventDefault();
  const newEmail = $("#emailInput").val().trim();
  const newEmail2 = $("#emailInput2").val().trim();
  if (newEmail === newEmail2) {
    const response = await fetch("/api/merchant/", {
      method: "PUT",
      body: JSON.stringify({
        email: newEmail,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      $("#emailForm").hide();
      alert("Account Successfully Updated");
    } else {
      alert("Something went wrong...");
    }
  } else {
    alert("Emails don't match, please try again.");
  }
});

$("#passwordFormSubmit").click(async (event) => {
  event.preventDefault();
  const newPassword = $("#passwordInput").val().trim();
  const newPassword2 = $("#passwordInput2").val().trim();
  if (newPassword === newPassword2) {
    const response = await fetch("/api/merchant/", {
      method: "PUT",
      body: JSON.stringify({
        password: newPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      $("#passwordForm").hide();
      alert("Account Successfully Updated");
    } else {
      alert("Something went wrong...");
    }
  } else {
    alert("Passwords don't match, please try again.");
  }
});
