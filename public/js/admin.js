// Action Buttons
const viewOrdersButton = document.getElementById("viewOrders");
const deleteOrderButton = document.getElementById("deleteOrder");
const editEmployeesButton = document.getElementById("editEmployees");
const editMenuButton = document.getElementById("editMenu");

// Content Display
const display = document.getElementById("sidebarDisplay");

// HTML Elements
// div.classList.add("btn");
// div.classList.add("btn-secondary");
// div.classList.add("employeeList");
// div.innerHTML = "Employee Info";

// Useful code DURING development

// -- highilghts the selected element with a think red border
// {Element}.classList.add("select");

// -- Applies display:none to the elemnt's css
// {Element}.classList.add("hide");

// Simple Static Array
let employeeArray = [
  {
    id: "1111",
    name: "Zeus",
    role: "Team Lead",
    is_manager: true,
  },
  {
    id: "2222",
    name: "Bacchus",
    role: "Bartender",
    is_manager: false,
  },
  {
    id: "3333",
    name: "Hermes",
    role: "Server",
    is_manager: false,
  },
  {
    id: "4444",
    name: "Heimdallr",
    role: "Host",
    is_manager: false,
  },
  {
    id: "5555",
    name: "Zao Jun",
    role: "Stove Master",
    is_manager: false,
  },
];

function showEmployees() {
  employeeArray.forEach((employee) => {
    let div = document.createElement("div");
    div.classList.add("btn");
    div.classList.add("btn-outline-dark");
    div.classList.add("employeeList");
    div.innerHTML = `${employee.name} | ${employee.role}`;
    display.append(div);
  });
}

// html template using jquery
//

editEmployeesButton.addEventListener("click", showEmployees);
