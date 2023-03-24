const { v4: uuidv4 } = require("uuid");

var tableContainer = $("tables");
var barContainer = $("bar");
var barAddBtn = $("barAdd");

var barTabs = [];

// Add new bar tab
const addBar = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/barTabs/", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/pos/main");
  } else {
    alert("Failed to log in.");
  }
};

// Select a bar tab
const selectTab = async () => {
  const response = await fetch("/api/tickets", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/pos/main");
  } else {
    alert("Failed to log in.");
  }
};

// Select a table
const selectTable = async (event) => {
  const response = await fetch("/api/tickets/", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/pos/main");
  } else {
    alert("Failed to log in.");
  }
};

tableContainer.click();

barContainer.click();

barAddBtn.click(addBar);
