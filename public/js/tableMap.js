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
            document.location.replace(`/pos/main/${data.id}?type=food`);
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

// Select a table
const selectTable = async (event) => {
  // look for open ticket
  //table id

  // fetch("/api/tickets/open");
  await fetch(`/api/tickets/setTableTab`, {
    method: "POST",
    body: JSON.stringify({ setTableTab: event.target.textContent }),
    headers: { "Content-Type": "application/json" },
  });
  const response = await fetch(`/api/tickets/${event.target.id}/open`, {
    method: "GET",
  });
  console.log(response);
  if (response.ok) {
    console.log(event.target.id);
    // fetch that ticket id and navigate to main page for that ticket
    fetch(`/api/tickets/${event.target.id}/open`)
      .then((response) => {
        return response.json();
      })
      .then((ticket) => {
        //console.log(ticket);
        document.location.replace(`/pos/main/${ticket.id}?type=food`);
      });
  } else {
    console.log(event.target.id);
    const tableID = Number(event.target.id);
    console.log(tableID);
    const response2 = await fetch("/api/tickets/", {
      method: "POST",
      body: JSON.stringify({ table_id: tableID }),
      headers: { "Content-Type": "application/json" },
    });

    if (response2.ok) {
      //get ticket id for new open ticket
      fetch(`/api/tickets/${event.target.id}/open`)
        .then((response) => {
          return response.json();
        })
        .then((ticket) => {
          console.log(ticket);
          document.location.replace(`/pos/main/${ticket.id}?type=food`);
        });
    } else {
    }
  }
};
// Select a tab
const selectTab = async (event) => {
  await fetch(`/api/tickets/setTableTab`, {
    method: "POST",
    body: JSON.stringify({ setTableTab: event.target.textContent }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace(`/pos/main/${event.target.id}?type=food`);
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
