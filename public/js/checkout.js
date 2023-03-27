// JS for Time
const currentTime = moment().format("dddd MMM Do hh:mm a");
$("#time").append(currentTime);
////////////////////////////////////////////////////////////
// JS for Subtotal
const itemTotal = $(".itemTotal");
const subTotal = $("#subTotal");
const itemTotals = [];

for (var i = 0; i < itemTotal.length; i++) {
  const anItem = itemTotal[i];
  itemTotals.push(Number(anItem.firstChild.data));
}
// console.log(itemTotals); // array of item totals

const subTotalSum = itemTotals.reduce((total, num) => total + num);
// console.log(subTotalSum);
subTotal.append(subTotalSum);

////////////////////////////////////////////////////////////
// JS for Tip
const ticketID = $("#ticketID").text();
const tip = $("#tip");
const tipAmount = $("#tipAmount");
// console.log(ticketID);

const tipHandler = async (event) => {
  event.preventDefault();
  var tipAmountInput = $("#tipAmountInput").val();

  if (!isNaN(tipAmountInput)) {
    const response = await fetch(`/api/tickets/${ticketID}`, {
      method: "PUT",
      body: JSON.stringify({
        tip_amount: tipAmountInput,
      }),
      headers: { "Content-Type": "application/JSON" },
    });

    if (response.ok) {
      tip.empty();
      tipAmount.empty();
      tip.append(`<strong>Tip:</strong>`);
      tipAmount.append(`<strong>$${tipAmountInput}</strong>`);
      totalHandler();
    }
  } else {
    alert("Make sure the tip amount is a number!");
  }
};

$("#tipSubmit").click(tipHandler);

////////////////////////////////////////////////////////////
// JS for Tax
const taxAmount = $("#taxAmount");

const calculateTax = subTotalSum * 0.029;

taxAmount.append(calculateTax.toFixed(2));

////////////////////////////////////////////////////////////
// JS for Discount
const discount = $("#discount");
const discountAmount = $("#discountAmount");

const discountHandler = async (event) => {
  event.preventDefault();
  var discountAmountInput = $("#discountAmountInput").val();

  if (!isNaN(discountAmountInput)) {
    const response = await fetch(`/api/tickets/${ticketID}`, {
      method: "PUT",
      body: JSON.stringify({
        discount: discountAmountInput,
      }),
      headers: { "Content-Type": "application/JSON" },
    });

    if (response.ok) {
      discount.empty();
      discountAmount.empty();
      discount.append(`<strong>Discount:</strong>`);
      discountAmount.append(`<strong>$${discountAmountInput}</strong>`);
      totalHandler();
    }
  } else {
    alert("Make sure the discount amount is a number!");
  }
};

$("#discountSubmit").click(discountHandler);
////////////////////////////////////////////////////////////
// JS for Total
const receiptTotal = $("#receiptTotal");

const totalHandler = async () => {
  try {
    const response = await fetch(`/api/tickets/${ticketID}`);
    const data = await response.json();
    const tip = Number(data.tip_amount);
    const discount = Number(data.discount);
    const calculateTotal = subTotalSum + calculateTax + tip - discount;

    await fetch(`/api/tickets/${ticketID}`, {
      method: "PUT",
      body: JSON.stringify({
        total: calculateTotal,
      }),
      headers: { "Content-Type": "application/JSON" },
    });
    receiptTotal.empty();
    receiptTotal.append(`$${calculateTotal.toFixed(2)}`);
  } catch (error) {
    console.error(error);
  }
};

totalHandler();
////////////////////////////////////////////////////////////
// Icebox JS for split button
// console.log("checkout js loaded");
// const insertReceipts = $("#insertReceipts");
// const url = "url_to_correct_ticket";

// fetch("/api/tickets/1")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     createReceipt(data);
// });

// function createMenuItem(data) {
//   console.log(data);
//   const menuItems = "";

//   data.forEach((element) =>
//     menuItems.concat(
//       `
//   <tr>
//   <td class="col-md-9">
//   <em>${element.item_name}</em>
//   </td>
//   <td class="col-md-1" style="text-align: center">${
//     element.ticket_items.quantity
//   }</td>
//   <td class="col-md-1 text-center">$${element.price}</td>
//   <td class="col-md-1 text-center">$${
//     element.ticket_items.quantity * element.price
//   }</td>
//   </tr>
//   `
//     )
//   );
// }

// function createReceipt(data) {
//   //temp
//   const subtotal = 1;
//   const taxAmount = 1;

//   insertReceipts.append(`
// <div class="card receipt">
//   <div class="card-body">
//     <h5 class="card-title receipt-title">${data.merchant.business_name}</h5>
//     <div class="container">
//       <div class="row receipt-header">
//         <div class="col-6 receipt-header-left">
//           <p class="card-text">${data.merchant.address}</p>
//           <p class="card-text">${data.merchant.city},
//           ${data.merchant.state}</p>
//           <p class="card-text">P: ${data.merchant.phone}</p>
//         </div>
//         <div class="col-6 receipt-header-right">
//           <p class="card-text">${data.createdAt}</p>
//           <p class="card-text">Server: ${data.employee.name}</p>
//           <p class="card-text">Receipt #: ${data.id}</p>
//         </div>
//       </div>

//         <table class="table table-hover row pt-4">
//           <thead>
//             <tr class="d-flex justify-content-between">
//               <th>Product</th>
//               <th>QTY</th>
//               <th text-center">Price</th>
//               <th text-center">Total</th>
//             </tr>
//           </thead>

//           <tbody>
//             ${createMenuItem(data.menu_items)}

//             <tr class="d-flex justify-content-end">
//               <td>
//                 <p>
//                   <strong>Subtotal:</strong>
//                 </p>
//                 <p>
//                   <strong>Tip:</strong>
//                 </p>
//                 <p>
//                   <strong>Tax:</strong>
//                 </p>
//               </td>
//               <td class="text-center">
//                 <p>
//                   <strong>$${"subtotal"}</strong>
//                 </p>
//                 <p>
//                   <strong>$${data.tip_amount}</strong>
//                 </p>
//                 <p>
//                   <strong>$${"taxAmount"}</strong>
//                 </p>
//               </td>
//             </tr>

//             <tr class="d-flex justify-content-end">
//               <td class="text-right">
//                 <h4><strong>Total:</strong></h4>
//               </td>
//               <td class="text-center text-danger">
//                 <h4><strong>$${"subtotal + data.tip_amount + taxAmount"}</strong></h4>
//               </td>
//             </tr>

//           </tbody>
//         </table>

//       <div class="row justify-content-center">
//         <div class="pay-button-container">
//           <button type="button" class="btn btn-success btn-lg split-button">
//             Split Bill
//           </button>
//           <button
//             type="button"
//             class="btn btn-success btn-lg discount-button"
//           >
//             Discount
//           </button>
//           <button
//             type="button"
//             class="btn btn-success btn-lg pay-button"
//           >
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// `);
// }
