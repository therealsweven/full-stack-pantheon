module.exports = {
  multiply: (num1, num2) => {
    return (num1 * num2).toFixed(2);
  },
  salesTax: (data) =>{
    return (calculateTotals(data) * 0.029).toFixed(2);
  },
  totals: (data) => {
    let total = calculateTotals(data);
    return (total + total* 0.029).toFixed(2);
  }
};

function calculateTotals(data){
  var total = 0.00;

  data.forEach(item => {
    let subtotal = item.price * item.ticket_items.quantity;
    total += subtotal;
  });

  return total;
}