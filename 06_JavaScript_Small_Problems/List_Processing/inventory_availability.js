"use strict";
/*
=== Understand the Problem ===
- input:
  - an id number, and an array of transaction objects
- output:
  - boolean true or false
  - true when the sum of the `quantity` values of the `item's` transactions is greater than 0
    - a movement value of `out` decreases an items quantity.
- explicit requirements:
  - 
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- select transactions for an item
- reduce to a total quantity
- return true if positive and false if negative
*/

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, transactions) {
  let itemTransactions = transactionsFor(id, transactions);
  let amount = itemTransactions.reduce(totalQuantity, 0);
  return amount > 0;
}

function totalQuantity(sum, {movement, quantity}) {
  return sum + (movement === 'in' ? quantity : -quantity);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true