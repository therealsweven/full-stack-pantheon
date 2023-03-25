var tableContainer = $("#tables");
var barContainer = $("#bar");
var barAddBtn = $("#barAdd");
var createTabBtn = $("#createTab");

var tabName = $("#tabName");
var addTabForm = $("#newBarTabForm");
var tab_name;

const createTabDB = async () => {
  const response = await fetch("/api/barTabs/", {
    method: "POST",
    body: JSON.stringify({ tab_name }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/pos/main");
  } else {
    alert("Failed to create tab");
  }
};
// Add new bar tab
const addBar = async () => {
  console.log("gello");
  addTabForm.show();
  barAddBtn.hide();
  await createTabBtn.click(async (event) => {
    event.preventDefault();
    tab_name = await tabName.val().trim();
    await createTabDB();
  });
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
  console.log(response);
  if (response.ok) {
    document.location.replace(`/pos/main/${event.target.id}`);
  } else {
    await fetch("/api/tickets/", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/pos/main/${event.target.id}`);
    } else {
    }
  }
};

tableContainer.click(selectTable);

barContainer.click(selectTab);

barAddBtn.click(addBar);

const car = {};

fetch("/api/employee")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    car.data = data;
    car.key = ["gsdfgsdfgsd"];
  });

console.log(car);
console.log(car.getPrototypeOf());
