// Action Buttons
const viewTablesButton = document.getElementById("viewTables");
const viewOrdersButton = document.getElementById("viewOrders");
const deleteOrderButton = document.getElementById("deleteOrder");
const editEmployeesButton = document.getElementById("editEmployees");
const editMenuButton = document.getElementById("editMenu");

// Content Display
const display = document.getElementById("sidebarDisplay");

// wraps are empty divs who are direct children of display
// EMPLOYEE wraps
const employeesWrap = document.getElementById("employeesWrap");
const employeeButtonsWrap = document.getElementById("employeeButtonsWrap");
const employeeTableWrap = document.getElementById("employeeTableWrap");
// ----hide FORM
const hideEmployeeFormsButton = document.getElementById(
  "hideEmployeeFormsButton"
);
const hideUpdateEmployeeFormsButton = document.getElementById(
  "hideUpdateEmployeeFormsButton"
);
// ----add new employee button
const addNewEmployeeBtn = document.getElementById("addNewEmployeeBtn");
// ----new employee form
const newEmployeeFormWrap = document.getElementById("newEmployeeFormWrap");
const newEmployeeForm = document.getElementById("newEmployeeForm");
// ----update employee button
const updateEmployeeBtn = document.getElementById("updateEmployeeBtn");
// ----update employee form
const updateEmployeeFormWrap = document.getElementById(
  "updateEmployeeFormWrap"
);
const updateEmployeeForm = document.getElementById("updateEmployeeForm");
// ---- removeEmployeeBtn
const removeEmployeeBtn = document.getElementById("removeEmployeeBtn");
// ---- remove employee form WRAP
const removeEmployeeFormWrap = document.getElementById(
  "removeEmployeeFormWrap"
);
// ----remove employee form
const removeEmployeeForm = document.getElementById("removeEmployeeForm");
// ----remove emploeye form HIDE button
const hideRemoveEmployeeFormButton = document.getElementById(
  "hideRemoveEmployeeFormButton"
);

// MENU wraps
const menuWrap = document.getElementById("menuWrap");
const menuButtonsWrap = document.getElementById("menuButtonsWrap");
const menuTableWrap = document.getElementById("menuTableWrap");
// ----hide FORM
// ----new
const addNewItemBtn = document.getElementById("addNewItemBtn");
const newItemFormWrap = document.getElementById("newItemFormWrap");
const newItemForm = document.getElementById("newItemForm");
const hideMenuFormsButton = document.getElementById("hideMenuFormsButton");
// ----remove
const removeItemBtn = document.getElementById("removeItemBtn");
const removeItemFormWrap = document.getElementById("removeItemFormWrap");
const removeItemForm = document.getElementById("removeItemForm");
const hideRemoveItemFormButton = document.getElementById(
  "hideRemoveItemFormButton"
);
// ----update
const updateItemBtn = document.getElementById("updateItemBtn");
const updateItemFormWrap = document.getElementById("updateItemFormWrap");
const updateItemForm = document.getElementById("updateItemForm");
const hideUpdateItemFormButton = document.getElementById(
  "hideUpdateItemFormButton"
);
// TABLES wraps
const tablesWrap = document.getElementById("tablesWrap");
const tablesButtonsWrap = document.getElementById("tablesButtonsWrap");
const tablesTableWrap = document.getElementById("tablesTableWrap");
const newTableFormWrap = document.getElementById("newTableFormWrap");
const newTableForm = document.getElementById("newTableForm");
const hideTableFormsButton = document.getElementById("hideTableFormsButton");
const addNewTableBtn = document.getElementById("addNewTableBtn");
const hideRemoveTableFormsButton = document.getElementById(
  "hideRemoveTableFormsButton"
);
const removeTableFormWrap = document.getElementById("removeTableFormWrap");
const removeTableForm = document.getElementById("removeTableForm");
const removeTableBtn = document.getElementById("removeTableBtn");

// ORDERS wraps
const ordersWrap = document.getElementById("ordersWrap");
const ordersButtonsWrap = document.getElementById("ordersButtonsWrap");
const ordersTableWrap = document.getElementById("ordersTableWrap");

// API arrays
// ----employees
let apiEmployeeArray = [];
// ----menu Items
let menuItemsArray = [];
// ----tickets
let ticketsArray = [];
// ----tickets
let tablesArray = [];

// fetch admin data from API
window.onload = function () {
  fetch("../api/employee/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => apiEmployeeArray.push(element));
      console.log(apiEmployeeArray);
    });
  fetch("../api/menu")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => menuItemsArray.push(element));
      console.log(menuItemsArray);
    });
  fetch("../api/tables")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => tablesArray.push(element));
      console.log(tablesArray);
    });
  fetch("../api/tickets/open")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((ticket) => ticketsArray.push(ticket));
      console.log(ticketsArray);
    });
};

// {{EMPLOYEE}}
// add employee to database
const addEmployee2DB = async () => {
  const employeeNameIn = $("#employeeNameInput").val().trim();
  const employeeEmailIn = $("#employeeEmailInput").val().trim();
  const employeeManagerIn = $("#employeeIsManagerIn").val();
  const employeeRoleIn = $("#employeeRoleIn").val();

  const employeeLoginIDin = Math.floor(100000 + Math.random() * 900000);

  await fetch("/api/employee", {
    method: "POST",
    body: JSON.stringify({
      name: employeeNameIn,
      email: employeeEmailIn,
      role: employeeRoleIn,
      login_id: employeeLoginIDin,
      is_manager: employeeManagerIn,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

// update employeee in database
const updateEmployeeInDB = async () => {
  const updateEmployeeIdInput = Number(
    $("#updateEmployeeIdInput").val().trim()
  );
  const employeeNameIn = $("#employeeNameUpdateInput").val().trim();
  const employeeEmailIn = $("#employeeEmailUpdateInput").val().trim();
  const employeeManagerIn = $("#employeeIsManagerUpdateIn").val();
  const employeeRoleIn = $("#employeeRoleUpdateIn").val();
  // console.log(updateEmployeeIdInput);
  // console.log(employeeNameIn);
  // console.log(employeeEmailIn);
  // console.log(employeeManagerIn);
  // console.log(employeeRoleIn);

  const body = {};
  if (employeeNameIn !== "") {
    body.name = employeeNameIn;
  }
  if (employeeEmailIn !== "") {
    body.email = employeeEmailIn;
  }
  if (employeeManagerIn !== "Is Manager?") {
    body.is_manager = employeeManagerIn;
  }
  if (employeeRoleIn !== "Role") {
    body.role = employeeRoleIn;
  }
  console.log(body);
  await fetch(`/api/employee/${updateEmployeeIdInput}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
};

// delete employee from database
const deleteEmployeeInDB = async () => {
  const deleteEmployeeIdInput = Number(
    $("#removeEmployeeIdInput").val().trim()
  );
  await fetch(`/api/employee/${deleteEmployeeIdInput}`, {
    method: "DELETE",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });
};

// {{MENU}}
// add menu item to database
const addMenuItem2DB = async () => {
  const itemNameInput = $("#itemNameInput").val().trim();
  const itemDescriptionIn = $("#itemDescriptionInput").val().trim();
  const itemImageIn = $("#imageURL").val();
  const itemPriceIn = $("#itemPriceInput").val();
  const itemSubtypeIn = $("#itemSubtypeIn").val();
  const itemTypeIn = $("#itemTypeIn").val();
  const itemAvail = $("#itemAvailIn").val();

  await fetch("/api/menu", {
    method: "POST",
    body: JSON.stringify({
      item_name: itemNameInput,
      description: itemDescriptionIn,
      image: itemImageIn,
      price: itemPriceIn,
      subtype: itemSubtypeIn,
      type: itemTypeIn,
      available: itemAvail,
      allergen_ids: [],
    }),
    headers: { "Content-Type": "application/json" },
  });
};

// update menu item in database
const updateMenuItemInDB = async () => {
  const itemIDInput = $("#updateItemIdInput").val().trim();
  const itemNameInput = $("#updateItemNameInput").val().trim();
  const itemDescriptionIn = $("#updateItemDescriptionInput").val().trim();
  const itemImageIn = $("#updateImageURL").val();
  const itemPriceIn = $("#updateItemPrice").val();
  const itemSubtypeIn = $("#updateItemSubtype").val();
  const itemTypeIn = $("#updateItemType").val();
  const itemAvail = $("#updateItemAvail").val();

  const body = {};
  body.id = itemIDInput;
  if (itemNameInput !== "") {
    body.item_name = itemNameInput;
  }
  if (itemDescriptionIn !== "") {
    body.description = itemDescriptionIn;
  }
  if (itemImageIn !== "") {
    body.image = itemImageIn;
  }
  if (itemPriceIn !== "") {
    body.subtype = itemPriceIn;
  }
  if (itemTypeIn !== "Type") {
    body.type = itemTypeIn;
  }
  if (itemSubtypeIn !== "Sub-Type") {
    body.type = itemSubtypeIn;
  }
  //**************** */
  if (itemAvail !== "Available?") {
    body.available = itemAvail;
  }
  console.log(body);
  await fetch(`/api/menu/`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
};

// delete menu item from database
const deleteMenuItemInDB = async () => {
  const deleteItemIdInput = Number($("#removeItemIdInput").val().trim());
  await fetch(`/api/menu/`, {
    method: "DELETE",
    body: JSON.stringify({ id: deleteItemIdInput }),
    headers: { "Content-Type": "application/json" },
  });
};

// {{TABLES}}
// add table to database
const addTable2DB = async () => {
  const tableNameIn = $("#tableNameInput").val().trim();
  const maxSizeIn = $("#tableMaxSizeInput").val().trim();

  await fetch("/api/tables", {
    method: "POST",
    body: JSON.stringify({
      table_name: tableNameIn,
      max_size: maxSizeIn,
      available: true,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

// delete table from database
const deleteTableInDB = async () => {
  const deleteTableIdInput = Number($("#removeTableIdInput").val().trim());
  await fetch(`/api/tables/`, {
    method: "DELETE",
    body: JSON.stringify({ id: deleteTableIdInput }),
    headers: { "Content-Type": "application/json" },
  });
};

// {{TICKETS}}
// delete ticket from database
const deleteTicketInDB = async () => {
  const deleteTicketIdInput = Number($("#removeTicketIdInput").val().trim());
  await fetch(`/api/tickets/${deleteTicketIdInput}`, {
    method: "DELETE",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });
};

// populates DISPLAY with employee list
function showEmployees() {
  employeeTableWrap.innerHTML = "";
  apiEmployeeArray.forEach((employee) => {
    let div = document.createElement("div");
    div.classList.add("tableList");
    div.innerHTML = `<table style="width: 100%">
      <tr>
        <td style="width: 7%">${employee.id}</td>
        <td style="width: 10%">${employee.login_id}</td>
        <td style="width: 33%">${employee.name}</td>
        <td style="width: 25%">${employee.role}</td>
        <td style="width: 25%">${employee.email}</td>
      </tr>
    </table>`;
    employeeTableWrap.append(div);
  });
}

//populates display with menu items for the merchant logged in
function showItems() {
  menuTableWrap.innerHTML = "";
  menuItemsArray.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("itemList");
    div.innerHTML = `<table style="width: 100%">
    <tr>
      <td style="width: 10%">${item.id}</td>
      <td style="width: 40%">${item.item_name}</td>
      <td style="width: 25%">${item.type}</td>
      <td style="width: 25%">${item.available}</td>
    </tr>
  </table>`;
    menuTableWrap.append(div);
  });
}

// populates DISPLAY with table list
function showTables() {
  //console.log("hello");
  tablesTableWrap.innerHTML = "";
  tablesArray.forEach((table) => {
    let div = document.createElement("div");
    div.classList.add("tableList");
    div.innerHTML = `<table style="width: 100%">
    <tr>
      <td style="width: 20%">${table.id}</td>
      <td style="width: 40%">${table.table_name}</td>
      <td style="width: 40%">${table.max_size}</td>
    </tr>
  </table>`;
    tablesTableWrap.append(div);
  });
}

// populates display with open tickets
function showOpenTickets() {
  ordersTableWrap.innerHTML = "";
  ticketsArray.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("itemList");
    // <td style="width: 40%">${item.item_name}</td>
    // <td style="width: 25%">${item.type}</td>
    // <td style="width: 25%">${item.available}</td>
    div.innerHTML = `<table style="width: 100%">
    <tr>
      <td style="width: 7%">${ticket.id}</td>
      <td style="width: 18%">${tableTab}</td>
      <td style="width: 18%">${ticket.employee.name}</td>
      <td style="width: 54%">${ticket.menu_items[0].item_name}</td>
    </tr>
  </table>`;
    ordersTableWrap.append(div);
  });
}

// [EDIT EMPLOYEES] click listener
editEmployeesButton.addEventListener("click", () => {
  menuWrap.classList.add("hide");
  ordersWrap.classList.add("hide");
  newEmployeeFormWrap.classList.add("hide");
  tablesWrap.classList.add("hide");
  employeesWrap.classList.remove("hide");
  showEmployees();
});

// ---- [ADD EMPLOYEE form HIDE BUTTON] click listener
hideEmployeeFormsButton.addEventListener("click", () => {
  newEmployeeFormWrap.classList.add("hide");
});
// ---- [ADD NEW Employee] click listener
addNewEmployeeBtn.addEventListener("click", () => {
  newEmployeeFormWrap.classList.remove("hide");
  removeEmployeeFormWrap.classList.add("hide");
  updateEmployeeFormWrap.classList.add("hide");
});
// ---- [ADD NEW Employee] form SUBMIT listener
newEmployeeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  newEmployeeFormWrap.classList.add("hide");
  await addEmployee2DB();
  location.reload();
});
// ---- [UPDATE EMPLOYEE form HIDE BUTTON] click listener
hideUpdateEmployeeFormsButton.addEventListener("click", () => {
  updateEmployeeFormWrap.classList.add("hide");
});
// ---- [UPDATE Employee] click listener
updateEmployeeBtn.addEventListener("click", () => {
  updateEmployeeFormWrap.classList.remove("hide");
  newEmployeeFormWrap.classList.add("hide");
  removeEmployeeFormWrap.classList.add("hide");
});
// ---- [UPDATE Employee] form SUBMIT listener
updateEmployeeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  updateEmployeeFormWrap.classList.add("hide");
  await updateEmployeeInDB();
  location.reload();
});
// ---- [REMOVE EMPLOYEE form HIDE BUTTON] click listener
hideRemoveEmployeeFormButton.addEventListener("click", () => {
  removeEmployeeFormWrap.classList.add("hide");
});
// ---- [REMOVE EMPLOYEE BUTTON] click listener
removeEmployeeBtn.addEventListener("click", () => {
  newEmployeeFormWrap.classList.add("hide");
  updateEmployeeFormWrap.classList.add("hide");
  removeEmployeeFormWrap.classList.remove("hide");
});
// ---- [REMOVE EMPLOYEE] form SUBMIT listener
removeEmployeeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  removeEmployeeFormWrap.classList.add("hide");
  await deleteEmployeeInDB();
  location.reload();
});

// [EDIT MENU] click listener
editMenuButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  ordersWrap.classList.add("hide");
  newItemFormWrap.classList.add("hide");
  tablesWrap.classList.add("hide");
  menuWrap.classList.remove("hide");
  showItems();
});
// ---- [HIDE BUTTON] click listener
hideMenuFormsButton.addEventListener("click", () => {
  newItemFormWrap.classList.add("hide");
});
// ---- [ADD NEW ITEM] click listener
addNewItemBtn.addEventListener("click", () => {
  removeItemFormWrap.classList.add("hide");
  updateItemFormWrap.classList.add("hide");
  newItemFormWrap.classList.remove("hide");
});
// ---- [ADD NEW ITEM] form SUBMIT listener
newItemForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  newItemFormWrap.classList.add("hide");
  await addMenuItem2DB();
  location.reload();
});
// ---- [HIDE BUTTON] update item
hideUpdateItemFormButton.addEventListener("click", () => {
  updateItemFormWrap.classList.add("hide");
});
// ---- [UPDATE ITEM] click listener
updateItemBtn.addEventListener("click", () => {
  newItemFormWrap.classList.add("hide");
  removeItemFormWrap.classList.add("hide");
  updateItemFormWrap.classList.remove("hide");
});

// ---- [UPDATE ITEM] form SUBMIT listener
updateItemForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await updateMenuItemInDB();
  updateItemFormWrap.classList.add("hide");
  location.reload();
});

// ---- [HIDE BUTTON] remove item
hideRemoveItemFormButton.addEventListener("click", () => {
  removeItemFormWrap.classList.add("hide");
});
// ---- [REMOVE ITEM] click listener
removeItemBtn.addEventListener("click", () => {
  newItemFormWrap.classList.add("hide");
  updateItemFormWrap.classList.add("hide");
  removeItemFormWrap.classList.remove("hide");
});
// ---- [REMOVE ITEM] form SUBMIT listener
removeItemForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  removeItemFormWrap.classList.add("hide");
  await deleteMenuItemInDB();
  location.reload();
});

// [VIEW TABLES] click listener
viewTablesButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  menuWrap.classList.add("hide");
  ordersWrap.classList.add("hide");
  tablesWrap.classList.remove("hide");
  showTables();
});
// ---- [HIDE BUTTON] click listener
hideTableFormsButton.addEventListener("click", () => {
  newTableFormWrap.classList.add("hide");
});
// ---- [ADD NEW TABLE] click listener
addNewTableBtn.addEventListener("click", () => {
  removeTableFormWrap.classList.add("hide");
  newTableFormWrap.classList.remove("hide");
});
// ---- [ADD NEW TABLE] form SUBMIT listener
newTableForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  newTableFormWrap.classList.add("hide");
  await addTable2DB();
  location.reload();
});
// ---- [HIDE BUTTON removeTable form] click listener
hideRemoveTableFormsButton.addEventListener("click", () => {
  removeTableFormWrap.classList.add("hide");
});
// ---- [REMOVE A TABLE] action button
removeTableBtn.addEventListener("click", () => {
  newTableFormWrap.classList.add("hide");
  removeTableFormWrap.classList.remove("hide");
});
// ---- [REMOVE A TABLE] form SUBMIT listener
removeTableForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  removeTableFormWrap.classList.add("hide");
  await deleteTableInDB();
  location.reload();
});

//ICE BOX BUTTON
// ----------------------------
// [VIEW ORDERS] click listener
viewOrdersButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  menuWrap.classList.add("hide");
  tablesWrap.classList.add("hide");
  ordersWrap.classList.remove("hide");
});
