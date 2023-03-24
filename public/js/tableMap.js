const { v4: uuidv4 } = require("uuid");

var tableContainer = $("#tables");
var barContainer = $("#bar");
var barAddBtn = $("#barAdd");
console.log(barContainer);
var barTabs = [];

// populate open bar tabs
const openTabsCreate = async () => {
  const openTabData = await fetch("/api/tabs/open", {
    method: "GET",
    body: {},
    headers: { "Content-Type": "application/json" },
  });
};

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
const selectTab = async (event) => {
  console.log("hello");
  console.log(event.target);
  //   const response = await fetch("/api/tickets", {
  //     method: "POST",
  //     body: JSON.stringify({ username, password }),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.ok) {
  //     document.location.replace("/pos/main");
  //   } else {
  //     alert("Failed to log in.");
  //   }
};

// Select a table
const selectTable = async (event) => {
  // look for open ticket
  //table id
  const response = await fetch(`/api/tickets/${event.target.id}/open`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/pos/main");
  } else {
    const response = await fetch("/api/tickets/", {
      method: "POST",
      body: JSON.stringify({ order_number: 4 }), //////////
      headers: { "Content-Type": "application/json" },
    });
  }
};

tableContainer.click(selectTable);

barContainer.click(selectTab);

barAddBtn.click(addBar);
