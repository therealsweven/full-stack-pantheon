var tableContainer = $("#tables");
var barContainer = $("#bar");
var barAddBtn = $("#barAdd");
var createTabBtn = $("#createTab");

var tabName = $("#tabName");
var addTabForm = $("#newBarTabForm");

// create new bar tab and linked ticket
const createTabDB = async function (tab_name) {
  // console.log("hello");
  //create bar tab
  await fetch("/api/tabs/", {
    method: "POST",
    body: JSON.stringify({ tab_name, paid: false, card_autorized: false }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      if (response.ok) {
        const data = response.body;
        console.log(response);
      } else {
        alert("Failed to create tab");
      }
      return response.json();
    })
    // create new ticket
    .then(async function (data) {
      console.log(data);
      const response = await fetch("/api/tickets/", {
        method: "POST",
        body: JSON.stringify({ bar_tab_id: data.id }),
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
          return response.json();
        })
        .then(async function (data) {
          if (data.id !== null) {
            document.location.replace(`/pos/main/${data.id}`);
          } else {
            alert("Failed to create ticket");
          }
        });
    });
};

// Add new bar tab
const addBar = function (event) {
  event.preventDefault();
  event.stopPropagation();
  addTabForm.show();
};

// Select a bar tab
const selectTab = async (event) => {
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

  // fetch("/api/tickets/open");

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

createTabBtn.click((event) => {
  event.preventDefault();
  event.stopPropagation();
  const tab_name = tabName.val().trim();
  console.log(tab_name);
  createTabDB(tab_name);
});
