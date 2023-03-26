console.log("checkout js loaded");
const insertReceipts = $("#insertReceipts");

const ticket = {};
fetch("/api/tickets/1")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // console.log(data);
    createReceipt(data);
  });

function createMenuItem(data) {
  // console.log(data);
  const menuItems = "";

  data.forEach((element) =>
    menuItems.concat(
      `
  <tr>
  <td class="col-md-9">
  <em>${element.item_name}</em>
  </td>
  <td class="col-md-1" style="text-align: center">${
    element.ticket_items.quantity
  }</td>
  <td class="col-md-1 text-center">$${element.price}</td>
  <td class="col-md-1 text-center">$${
    element.ticket_items.quantity * element.price
  }</td>
  </tr>
  `
    )
  );
  return menuItems;
}

function createReceipt(data) {
  const subtotal = 1;
  const taxAmount = 1;

  insertReceipts.append(`
<div class="card receipt">
  <div class="card-body">
    <h5 class="card-title receipt-title">${data.merchant.business_name}</h5>
    <div class="container">
      <div class="row receipt-header">
        <div class="col-6 receipt-header-left">
          <p class="card-text">${data.merchant.address}</p>
          <p class="card-text">${data.merchant.city}, 
          ${data.merchant.state}</p>
          <p class="card-text">P: ${data.merchant.phone}</p>
        </div>
        <div class="col-6 receipt-header-right">
          <p class="card-text">${data.createdAt}</p>
          <p class="card-text">Server: ${data.employee.name}</p>
          <p class="card-text">Receipt #: ${data.id}</p>
        </div>
      </div>

        <table class="table table-hover row pt-4">
          <thead>
            <tr class="d-flex justify-content-between">
              <th>Product</th>
              <th>QTY</th>
              <th text-center">Price</th>
              <th text-center">Total</th>
            </tr>
          </thead>
          
          <tbody>
            ${createMenuItem(data.menu_items)}
            
            <tr class="d-flex justify-content-end">
              <td>
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
                  <strong>$${"subtotal"}</strong>
                </p>
                <p>
                  <strong>$${data.tip_amount}</strong>
                </p>
                <p>
                  <strong>$${"taxAmount"}</strong>
                </p>
              </td>
            </tr>

            <tr class="d-flex justify-content-end">
              <td class="text-right">
                <h4><strong>Total:</strong></h4>
              </td>
              <td class="text-center text-danger">
                <h4><strong>$${"subtotal + data.tip_amount + taxAmount"}</strong></h4>
              </td>
            </tr>

          </tbody>
        </table>

      <div class="row justify-content-center">
        <div class="pay-button-container">
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

/* <button type="button" class="btn btn-success btn-lg split-button">
  Split Bill
</button>; */
