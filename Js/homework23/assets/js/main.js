function checkAge(){
    let num = parseInt(prompt("Введите возраст:"));
    if (num >= 0 && num < 12) {
        alert("Вы ребёнок!")
    }else if(num >= 12 && num <= 18){
        alert("Поздравляю, вы подросток!")
    }else if(num >= 18 && num <= 60){
        alert("Вы взрослый!")
    }else if(num > 60){
        alert("Вы пенсионер!")
    }else{
        alert("Некорректное значение")
    }
}

function getSymbol(){
    const number = parseInt(prompt("Введите число от 0 до 9-ти:"));
    let symbol = '';
    switch(number){
        case 1:
            symbol = '!';
            break;
        case 2:
            symbol = '@';
            break;
        case 3:
            symbol = '#';
            break;
        case 4:
            symbol = '$';
            break;
        case 5:
            symbol = '%';
            break;
        case 6:
            symbol = '^';
            break;
        case 7:
            symbol = '&';
            break;
        case 8:
            symbol = '*';
            break;
        case 9: 
            symbol = '('
            break;
        case 0:
            symbol = ')';
            break;
        default:
            symbol = 'Введите корректное число от 1 до 9-ти';
            break;
    }
    alert(`Ваш символ: ${symbol}`);
}

function checkNumber(){
    const number = parseInt(prompt("Введите трёхзначное число:"));
    let s = 0,
        d = 0,
        e = 0;
    s = parseInt(number/100); 
    d = parseInt((number%100)/10); 
    e = number%10;
    if(isNaN(number)){
        alert("Введите корректное число");
    }else if((s == d) || (d == e) || (s == e)){
        alert("Данное число имеет одинаковые цифры");
    }else{
        alert("Данное число не имеет одинаковых цифер")
    }
}

function leapYear(){
    const year = parseInt(prompt("Введите год:"));
    let rez = ((year%400==0 || year%4==0) && !(year%100==0))?alert("Високосный год"):alert("Невисокосный год")
}

function palindromNumber(){
    debugger;
    const number = parseInt(prompt("Введите 5-ти значное число:"));
    let digit1 = 0,
        digit2 = 0,
        digit4 = 0,
        digit5 = 0;
    digit1 = parseInt(number/10000); 
    digit2 = parseInt((number%10000)/1000);
    digit4 = parseInt((number%100)/10);
    digit5 = parseInt(number%10);
    if(digit1 == digit5 && digit2 == digit4){
        alert("Это число палиндром!");
    }else if(isNaN(number)){
        alert("Введите корректное число.")
    }else{
        alert("Это обычное число.")
    }
}

function converter(){
    const usd = parseInt(prompt("Введите сколько долларов хотите конвертировать:"));
    const EUR = parseFloat(0.83),
          UAH = parseFloat(27.75),
          AZN = parseFloat(1.70);  
    const currency = parseInt(prompt("Выберите валюту:\rEUR - 1\rUAH - 2\rAZN - 3"));
    let rez = 0;
    switch(currency){
        case 1:
            rez = usd*EUR;
            break;
        case 2:
            rez = usd*UAH;
            break;
        case 3:
            rez = usd*AZN;
            break;
        default:
            rez = 'Выберите валюту в предоставленном списке';
            break;
    }
    alert(`Перевод успешно завершён: ${rez}`)
}

function userSumm(){
    const summ = parseInt(prompt("Введите сумму покупки:"));
    let discount1 = 0.03,
        discount2 = 0.05,
        discount3 = 0.07;
    if(summ >= 200 && summ < 300){
        alert(`Ваша сумма со скидкой: ${summ - (summ*discount1)}`);
    }else if(summ > 300 && summ < 500){
        alert(`Ваша сумма со скидкой: ${summ - (summ*discount2)}`);
    }else if(summ > 500){
        alert(`Ваша сумма со скидкой: ${summ - (summ*discount3)}`);
    }else if(summ < 200 && summ > 0){
        alert("Упс! У вас нету скидки.");
    }else{
        alert("Введите корректное значение")
    }
}

function myCircle(){
    const circle = parseInt(prompt("Введите длину окружности")),
          square = parseInt(prompt("Введите периметр квадрата"));
    let diamCircle = circle / Math.PI;
    let sideSquare = square / 4;
    if(diamCircle <= sideSquare){
        alert("Окружность может поместиться в квадрат");
    }else if(diamCircle > sideSquare){
        alert("Окружность не поместится");
    }else{
        alert("Некорректные значения длины или периметра")
    }
}

function questions(){
    debugger;
    const question1 = prompt("Сколько будет 2+2?\r1 - Четыре\r2 - Пять\r3 - Шесть");
    const question2 = prompt("Назовите столицу Украины:\r1 - Париж\r2 - Киев\r3 - Москва");
    const question3 = prompt("Какой самый зелёный овощь:\r1 - Яблоко\r2 - Капуста\r3 - Помидор");
    let q1 = (question1 == ("Четыре"))?2:0;
    let q2 = (question2 == ("Киев"))?2:0;
    let q3 = (question3 == ("Капуста"))?2:0;

    alert(`Вы набрали: ${q1+q2+q3} баллов`)
}