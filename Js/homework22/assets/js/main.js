function userName() {
    let userName = prompt("Enter your name!");
    alert(`Привет, ${userName}`);
}

function userBirthday() {
    const thisYear = 2021;
    let yearOfBirth = parseInt(prompt("Enter your Year of birth!"));
    alert(`You are ${ thisYear - yearOfBirth } years old!`);
}

function perimeterSquare(){
    const square = 4;
    let oneSide = parseInt(prompt("Enter one side of a square!"));
    alert(`Your result ${square*oneSide}`)
}

function perimeterCircle() {
    const PI = Math.PI;
    let radius = parseInt(prompt("Enter one side of a circle!")),
        radiusCircle = Math.pow(radius, 2);
    alert(`Your result ${radiusCircle*PI}`)
}

function travelSpeed() {
    let km = parseInt(prompt("Enter kilometeres:"));
    let hoursTravel = parseInt(prompt("How much time do you want to spend on the trip"));
    alert(`You need to move with speed: ${km/hoursTravel}km/h`)
}

function converter(){
    const euro = 0.83;
    let numberDollar = parseInt(prompt("Enter dollar:"));
    alert(`Euro ${numberDollar*euro}`)
}

function userFlashDrive() {
    const mb = 1000;
    const file = 820;
    let flashGB = parseInt(prompt("Enter how many GB can your flash drive contain"));
    alert(`Может поместиться ${parseInt(flashGB*mb/file)} файлов по 820мб на вашу флешку`)
}

function chocolate() { 
    let quantityMoney = parseInt(prompt("Enter how much money do you have?")); 
    let chocolatePrice = parseInt(prompt("Enter chocolate price")); 
    alert(`Вы можете купить ${parseInt(quantityMoney/chocolatePrice)}(шт) и у вас останется ${(quantityMoney - (parseInt(quantityMoney/chocolatePrice)*chocolatePrice))}грн`) 
}

function reverseNumber() {
    const number = parseInt(prompt("Enter 3 digit number"))
    let s = 0,
        d = 0,
        e = 0,
        rez = 0;

    s = parseInt(number/100); 
    d = parseInt((number%100)/10); 
    e = number%10; 

    rez = e*100+d*10+s;
    alert(rez)
}

function summDeposit() {
    const perecent = 0.05,
    months = 0.2,
    oneYear = 1;
    let number = parseInt(prompt("Enter summ for deposit")); 
    let precentTwoMonths = perecent*0.2/1;
    alert(`Сумма начисленных процентов за 2 месяца составляет: ${number*precentTwoMonths}$`)
}