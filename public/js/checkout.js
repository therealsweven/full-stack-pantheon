console.log("checkout js loaded");
const insertReceipts = $("#insertReceipts");
const menuItems = {};

const ticket = {};
fetch("/api/tickets/1")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    createReceipt(data);
  });

const itemName = "a";
const quantity = "a";
const price = "a";
const itemTotal = "a";

const companyName = "a";
const address = "a";
const city = "a";
const state = "a";
const phone = "a";
const date = "a";
const serverName = "a";
const receiptID = "a";
const subtotal = "a";
const tax = "a";
const tip = "a";
const total = "a";

function createMenuItem(data) {
  console.log(data);
  return `
  <tr>
  <td class="col-md-9">
  <em>${itemName}</em>
  </td>
  <td class="col-md-1" style="text-align: center">${quantity}</td>
  <td class="col-md-1 text-center">$${price}</td>
  <td class="col-md-1 text-center">$${itemTotal}</td>
  </tr>
  `;
}

function createReceipt(data) {
  insertReceipts.append(`
<div class="card receipt">
            <div class="card-body">
              <h5 class="card-title receipt-title">${data.merchant_id}</h5>
              <div class="container">
                <div class="row receipt-header">
                  <div class="col-4 receipt-header-left">
                    <p class="card-text">${address}</p>
                    <p class="card-text">${cityState}</p>
                    <p class="card-text">P: ${phone}</p>
                  </div>
                  <div class="col-4 receipt-header-right">
                    <p class="card-text">${date}</p>
                    <p class="card-text">Server: ${serverName}</p>
                    <p class="card-text">Receipt #: ${receiptID}</p>
                  </div>
                </div>

                <div class="row">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>QTY</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody>

                    {{#each data.menu_items}}
                      ${createMenuItem(this)}
                    {{/each}}

                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-right">
                          <p>
                            <strong>Subtotal:</strong>
                          </p>
                          <p>
                            <strong>Tip:</strong>
                          </p>
                          <p>
                            <strong>Tax:</strong>
                          </p>
                        </td>
                        <td class="text-center">
                          <p>
                            <strong>$${subtotal}</strong>
                          </p>
                          <p>
                            <strong>$${data.tip_amount}</strong>
                          </p>
                          <p>
                            <strong>$${tax}</strong>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td class="text-right">
                          <h4><strong>Total:</strong></h4>
                        </td>
                        <td class="text-center text-danger">
                          <h4><strong>$${total}</strong></h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="row justify-content-center">
                  <div class="pay-button-container">
                    <button
                      type="button"
                      class="btn btn-success btn-lg split-button"
                    >
                      Split Bill
                    </button>
                    <button
                      type="button"
                      class="btn btn-success btn-lg discount-button"
                    >
                      Discount
                    </button>
                    <button
                      type="button"
                      class="btn btn-success btn-lg pay-button"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
`);
}
