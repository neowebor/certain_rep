"use strict";

function userName() {
  var userName = prompt("Enter your name!");
  alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(userName));
}

function userBirthday() {
  var thisYear = 2021;
  var yearOfBirth = parseInt(prompt("Enter your Year of birth!"));
  alert("You are ".concat(thisYear - yearOfBirth, " years old!"));
}

function perimeterSquare() {
  var square = 4;
  var oneSide = parseInt(prompt("Enter one side of a square!"));
  alert("Your result ".concat(square * oneSide));
}

function perimeterCircle() {
  var PI = Math.PI;
  var radius = parseInt(prompt("Enter one side of a circle!")),
      radiusCircle = Math.pow(radius, 2);
  alert("Your result ".concat(radiusCircle * PI));
}

function travelSpeed() {
  var km = parseInt(prompt("Enter kilometeres:"));
  var hoursTravel = parseInt(prompt("How much time do you want to spend on the trip"));
  alert("You need to move with speed: ".concat(km / hoursTravel, "km/h"));
}

function converter() {
  var euro = 0.83;
  var numberDollar = parseInt(prompt("Enter dollar:"));
  alert("Euro ".concat(numberDollar * euro));
}

function userFlashDrive() {
  var mb = 1000;
  var file = 820;
  var flashGB = parseInt(prompt("Enter how many GB can your flash drive contain"));
  alert("\u041C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u044C\u0441\u044F ".concat(parseInt(flashGB * mb / file), " \u0444\u0430\u0439\u043B\u043E\u0432 \u043F\u043E 820\u043C\u0431 \u043D\u0430 \u0432\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443"));
}

function chocolate() {
  var quantityMoney = parseInt(prompt("Enter how much money do you have?"));
  var chocolatePrice = parseInt(prompt("Enter chocolate price"));
  alert("\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C ".concat(parseInt(quantityMoney / chocolatePrice), "(\u0448\u0442) \u0438 \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F ").concat(quantityMoney - parseInt(quantityMoney / chocolatePrice) * chocolatePrice, "\u0433\u0440\u043D"));
}

function reverseNumber() {
  var number = parseInt(prompt("Enter 3 digit number"));
  var s = 0,
      d = 0,
      e = 0,
      rez = 0;
  s = parseInt(number / 100);
  d = parseInt(number % 100 / 10);
  e = number % 10;
  rez = e * 100 + d * 10 + s;
  alert(rez);
}

function summDeposit() {
  var perecent = 0.05,
      months = 0.2,
      oneYear = 1;
  var number = parseInt(prompt("Enter summ for deposit"));
  var precentTwoMonths = perecent * 0.2 / 1;
  alert("\u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u0437\u0430 2 \u043C\u0435\u0441\u044F\u0446\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: ".concat(number * precentTwoMonths, "$"));
}