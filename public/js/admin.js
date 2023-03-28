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
// ----add new employee button
const addNewEmployeeBtn = document.getElementById("addNewEmployeeBtn");
// ----new employee form
const newEmployeeFormWrap = document.getElementById("newEmployeeFormWrap");
const newEmployeeForm = document.getElementById("newEmployeeForm");
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
const hideMenuFormsButton = document.getElementById("hideMenuFormsButton");
// ----add new item button
const addNewItemBtn = document.getElementById("addNewItemBtn");
// ----new item form
const newItemFormWrap = document.getElementById("newItemFormWrap");
const newItemForm = document.getElementById("newItemForm");

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

// EMPLOYEES
// Static Array for testing
let employeeArray = [
  {
    id: "0001",
    name: "Zeus",
    role: "Team Lead",
    is_manager: true,
  },
  {
    id: "0002",
    name: "Bacchus",
    role: "Bartender",
    is_manager: false,
  },
  {
    id: "0003",
    name: "Hermes",
    role: "Server",
    is_manager: false,
  },
  {
    id: "0004",
    name: "Heimdallr",
    role: "Host",
    is_manager: false,
  },
  {
    id: "0005",
    name: "Zao Jun",
    role: "Stove Master",
    is_manager: false,
  },
  {
    id: "0006",
    name: "Zeus",
    role: "Team Lead",
    is_manager: true,
  },
  {
    id: "0007",
    name: "Bacchus",
    role: "Bartender",
    is_manager: false,
  },
  {
    id: "0008",
    name: "Hermes",
    role: "Server",
    is_manager: false,
  },
  {
    id: "0009",
    name: "Heimdallr",
    role: "Host",
    is_manager: false,
  },
  {
    id: "0010",
    name: "Zao Jun",
    role: "Stove Master",
    is_manager: false,
  },
  {
    id: "0011",
    name: "Zeus",
    role: "Team Lead",
    is_manager: true,
  },
  {
    id: "0012",
    name: "Bacchus",
    role: "Bartender",
    is_manager: false,
  },
  {
    id: "0013",
    name: "Hermes",
    role: "Server",
    is_manager: false,
  },
  {
    id: "0014",
    name: "Heimdallr",
    role: "Host",
    is_manager: false,
  },
  {
    id: "0015",
    name: "Zao Jun",
    role: "Stove Master",
    is_manager: false,
  },
];
// API arrays
// ----employees
let apiEmployeeArray = [];
// ----menu Items
let menuItemsArray = [];

window.onload = function () {
  fetch("../api/employee/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => apiEmployeeArray.push(element));
    });
  fetch("../api/menu")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => menuItemsArray.push(element));
      console.log(menuItemsArray);
    });
};

// populates DISPLAY with employee list
function showEmployees() {
  employeeTableWrap.innerHTML = "";
  apiEmployeeArray.forEach((employee) => {
    let div = document.createElement("div");
    div.classList.add("employeeList");
    div.innerHTML = `<table style="width: 100%">
    <tr>
      <td style="width: 10%">${employee.login_id}</td>
      <td style="width: 40%">${employee.name}</td>
      <td style="width: 25%">${employee.role}</td>
      <td style="width: 25%">${employee.email}</td>
    </tr>
  </table>`;
    employeeTableWrap.append(div);
  });
}

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
});
// ---- [ADD NEW Employee] form SUBMIT listener
newEmployeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
// ---- [REMOVE EMPLOYEE form HIDE BUTTON] click listener
hideRemoveEmployeeFormButton.addEventListener("click", () => {
  removeEmployeeFormWrap.classList.add("hide");
});
// ---- [REMOVE EMPLOYEE BUTTON] click listener
removeEmployeeBtn.addEventListener("click", () => {
  removeEmployeeFormWrap.classList.remove("hide");
  newEmployeeFormWrap.classList.add("hide");
});
// ---- [REMOVE EMPLOYEE] form SUBMIT listener
removeEmployeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
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
  newItemFormWrap.classList.remove("hide");
});
// ---- [ADD NEW ITEM] form SUBMIT listener
newItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
// [VIEW TABLES] click listener
viewTablesButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  menuWrap.classList.add("hide");
  ordersWrap.classList.add("hide");
  tablesWrap.classList.remove("hide");
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
newTableForm.addEventListener("submit", (event) => {
  event.preventDefault();
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
removeTableForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
// [VIEW ORDERS] click listener
viewOrdersButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  menuWrap.classList.add("hide");
  tablesWrap.classList.add("hide");
  ordersWrap.classList.remove("hide");
});
