function sum(num1, num2) {
  return num1 + num2;
}

function diff (num1, num2) {
  return num1 - num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

//console.log(calc(10, 5, diff));

//Aplicar descuento a una compra

function applyDiscount (amount) {
  return amount * 0.9;
}

function calcPayment (quantity, priceUnit, callback) {
  let payment = quantity * priceUnit;
  return callback(payment);
}

//console.log(calcPayment(5, 20, applyDiscount));

//simulando una carrera de automovilismo

function start (speed, callback) {
  console.log('El auto inicia la carrera');
  setTimeout (function () {
    callback(speed);
  }, 5000);
}

function calcDistance (speed) {
  let distance = speed * 0.00139;
  console.log('El auto ha recorido ' + distance + ' km');
}

start(100, calcDistance);

