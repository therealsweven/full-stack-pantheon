let subTotal = 0;
module.exports = {
  multiply: (num1, num2) => {
    return num1 * num2;
  },
  subTotal: (num1, num2) => {
    let itemTotal = num1 * num2;
    subTotal = subTotal + itemTotal;
    return subTotal;
  },
  tipAmount: () => {
    return subTotal * 0.2;
  },
  taxAmount: () => {
    return subTotal * 0.029;
  },
};
