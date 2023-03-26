// Action Buttons
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
// MENU wraps
const menuWrap = document.getElementById("menuWrap");
const menuButtonsWrap = document.getElementById("menuButtonsWrap");
const menuTableWrap = document.getElementById("menuTableWrap");
//ORDERS wraps
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
// API array
let apiEmployeeArray = [];

// MENU ITEMS
let menuItemsArray = [];

window.onload = function () {
  fetch("../api/employee/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => apiEmployeeArray.push(element));
    });
};

// --------------------- Useful code DURING development

// -- highilghts the selected element with a think red border
// {Element}.classList.add("select");

// populates DISPLAY with employee list
function showEmployees() {
  document.getElementById("employeesWrap").style.color = "";
  apiEmployeeArray.forEach((employee) => {
    let div = document.createElement("div");
    div.classList.add("btn");
    div.classList.add("btn-outline-secondary");
    div.classList.add("employeeList");
    div.innerHTML = `<table style="width: 100%">
    <tr>
      <td style="width: 25%">${employee.login_id}</td>
      <td style="width: 25%">${employee.name}</td>
      <td style="width: 25%">${employee.role}</td>
      <td style="width: 25%">${employee.email}</td>
    </tr>
  </table>`;
    employeeTableWrap.append(div);
  });
}

// [EDIT EMPLOYEES] click listener
editEmployeesButton.addEventListener("click", () => {
  menuWrap.classList.add("hide");
  ordersWrap.classList.add("hide");
  employeesWrap.classList.remove("hide");
  function tableHeaders() {
    employeeTableWrap.innerHTML = `<table style="width:100%; text-align:start">
        <tr>
        <th style="width: 25%">Employee ID</th>
        <th style="width: 25%">Name</th>
        <th style="width: 25%">Role</th>
        <th style="width: 25%">e-mail</th>
      </tr>
      </table>`;
  }
  tableHeaders();
  showEmployees();
});
// [EDIT MENU] click listener
editMenuButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  ordersWrap.classList.add("hide");
  menuWrap.classList.remove("hide");
});
// [EDIT ORDERS] click listener
viewOrdersButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  menuWrap.classList.add("hide");
  ordersWrap.classList.remove("hide");
});

// [DELETE ORDER] click listener
// deleteOrderButton.addEventListener("click", () => {
//   apiEmployeeArray.forEach((member) => {
//     console.log(member);
//   });
// });
