// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б
function rectangleSquare(a, b) {
    return a * b;
}

console.log("площа прямокутника: " + rectangleSquare(10,15));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(r) {
    return Math.round(r * r * Math.PI);
}
console.log("площа кола: " + circleSquare(20));

// - створити функцію яка обчислює та повертає об'єм циліндру висотою h, та радіусом r
function cylinderVolume(h,r) {
    return Math.round(h * r * r * Math.PI);
}
console.log("об'єм циліндру: " + cylinderVolume(40,20));

//- створити функцію яка приймає масив та виводить кожен його елемент
function logArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
logArr([10,25,false,"arr"]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function makeP(text) {
    document.write(`<p>${text}</p>`);
}
makeP("some text");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function makeULWith3LI(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
makeULWith3LI("other text");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function makeULWithNElementLI(text, n) {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
makeULWithNElementLI("text n times",5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function makeListFromArr(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
makeListFromArr([false,"true",547]);

//- створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {
        id: 1,
        name: "Oskar",
        age: 25
    },
    {
        id: 2,
        name: "Suzy",
        age: 19
    },
    {
        id: 3,
        name: "Ksena",
        age: 23
    }
];
function makeDivWithUser(arr) {
    for (const arrElement of arr) {
        document.write(`<div>`);
            for (const usersKey in arrElement) {
            document.write(`${usersKey} - ${arrElement[usersKey]}; `);
            }
        document.write(`</div>`);
    }
}
makeDivWithUser(users);

//- створити функцію яка повертає найменьше число з масиву

let numbers = [-256,15,0,237,-789,14,-1015,25];
// let numbers = [5,3,2,10];
let min = Math.min();
for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]){
        min = numbers[i];
    }
}
console.log(min);

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumArrItems(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArrItems(numbers));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log(numbers)
function swap(arr, index1, index2) {
    let temp1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2]=temp1;
    return arr;
}
console.log(swap(numbers,0,2));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

currencyData= [{currency:'USD',value:40},{currency:'EUR',value:42}];
function exchange(sumUAH,arrWithData,exchangeCurrency) {
    let sum = 0;
    for (const currDataItem of arrWithData) {
            if (currDataItem.currency===exchangeCurrency){
                sum = Math.round(sumUAH/currDataItem.value * 100);
        }
    }
    return sum/100  + " " + exchangeCurrency;
}
console.log(exchange(10000,currencyData,"USD"));
