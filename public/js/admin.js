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
const hideMenuFormsButton = document.getElementById("hideMenuFormsButton");
// ----add new item button
const addNewItemBtn = document.getElementById("addNewItemBtn");
// ----new item form
const newItemFormWrap = document.getElementById("newItemFormWrap");
const newItemForm = document.getElementById("newItemForm");

//TABLES wraps
const tablesWrap = document.getElementById("tablesWrap");
const tablesButtonsWrap = document.getElementById("tablesButtonsWrap");
const tablesTableWrap = document.getElementById("tablesTableWrap");

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
// API arrays
// ----employees
let apiEmployeeArray = [];
// ----menu Items
let menuItemsArray = [];
// ----tickets
let ticketsArray = [];

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
  // fetch("../api/tickets")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     data.forEach((element) => ticketsArray.push(element));
  //     console.log(ticketsArray);
  //   });
};

// populates DISPLAY with employee list
function showEmployees() {
  employeeTableWrap.innerHTML = "";
  apiEmployeeArray.forEach((employee) => {
    let div = document.createElement("div");
    div.classList.add("employeeList");
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
const updateEmployeeInDB = async () => {
  const updateEmployeeIdInput = Number(
    $("#updateEmployeeIdInput").val().trim()
  );
  const employeeNameIn = $("#employeeNameUpdateInput").val().trim();
  const employeeEmailIn = $("#employeeEmailUpdateInput").val().trim();
  const employeeManagerIn = $("#employeeIsManagerUpdateIn").val();
  const employeeRoleIn = $("#employeeRoleUpdateIn").val();
  console.log(updateEmployeeIdInput);
  console.log(employeeNameIn);
  console.log(employeeEmailIn);
  console.log(employeeManagerIn);
  console.log(employeeRoleIn);

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

// function showTickets() {
//   ordersTableWrap.innerHTML = "";
//   ticketsArray.forEach((item) => {
//     let div = document.createElement("div");
//     div.classList.add("itemList");
//     //     <td style="width: 40%">${item.item_name}</td>
//     // <td style="width: 25%">${item.type}</td>
//     // <td style="width: 25%">${item.available}</td>
//     div.innerHTML = `<table style="width: 100%">
//     <tr>
//       <td style="width: 10%">${item.id}</td>
//       <td style="width: 10%">${item.id}</td>
//     </tr>
//   </table>`;
//     menuTableWrap.append(div);
//   });
// }

// [EDIT EMPLOYEES] click listener

editEmployeesButton.addEventListener("click", () => {
  menuWrap.classList.add("hide");
  ordersWrap.classList.add("hide");
  newEmployeeFormWrap.classList.add("hide");
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
newEmployeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addEmployee2DB();
});
// ---- [UPDATE EMPLOYEE form HIDE BUTTON] click listener
hideEmployeeFormsButton.addEventListener("click", () => {
  updateEmployeeFormWrap.classList.add("hide");
});
// ---- [UPDATE Employee] click listener
updateEmployeeBtn.addEventListener("click", () => {
  console.log("hello");
  updateEmployeeFormWrap.classList.remove("hide");
  newEmployeeFormWrap.classList.add("hide");
  removeEmployeeFormWrap.classList.add("hide");
});
// ---- [UPDATE Employee] form SUBMIT listener
updateEmployeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateEmployeeInDB();
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
// [VIEW ORDERS] click listener
viewOrdersButton.addEventListener("click", () => {
  employeesWrap.classList.add("hide");
  menuWrap.classList.add("hide");
  tablesWrap.classList.add("hide");
  ordersWrap.classList.remove("hide");
});
