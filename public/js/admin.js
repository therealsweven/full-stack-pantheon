// Action Buttons
const viewOrdersButton = document.getElementById("viewOrders");
const deleteOrderButton = document.getElementById("deleteOrder");
const editEmployeesButton = document.getElementById("editEmployees");
const editMenuButton = document.getElementById("editMenu");

// Content Display
const display = document.getElementById("sidebarDisplay");
// wraps are empty divs who are direct children of display
const employeesWrap = document.getElementById("employeesWrap");
const menuButtonsWrap = document.getElementById("menuButtonsWrap");
const ordersWrap = document.getElementById("ordersWrap");

// Simple Static Array
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

window.onload = function () {
  fetch("../api/employee/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => apiEmployeeArray.push(element));
    });
  console.log(apiEmployeeArray);
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
    employeesWrap.append(div);
  });
}

// [EDIT EMPLOYEES] click listener
editEmployeesButton.addEventListener("click", () => {
  deleteOrderButton.classList.add("hide");
  menuButtonsWrap.classList.add("hide");
  employeesWrap.classList.remove("hide");
  function tableHeaders() {
    employeesWrap.innerHTML = `<table style="width:100%; text-align:start">
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
  deleteOrderButton.classList.add("hide");
  menuButtonsWrap.classList.remove("hide");
});
// [VIEW ORDERS] click listener
viewOrdersButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  menuButtonsWrap.classList.add("hide");
  deleteOrderButton.classList.remove("hide");
});

// [DELETE ORDER] click listener
deleteOrderButton.addEventListener("click", () => {
  apiEmployeeArray.forEach((member) => {
    console.log(member);
  });
});
