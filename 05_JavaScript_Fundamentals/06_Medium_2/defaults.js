function processOrder(price, quantity = 1, discount = 0, serviceCharge = 0.1, tax = 0.15) {
  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100, 2, 0.1, 0, 0));