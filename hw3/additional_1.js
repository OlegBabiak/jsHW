document.write(`<p>--------------------additional_1--------------------</p>`);
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let mixArr = [1,2,3,4,5,"a","b","c","d","e",["a","b","c","d","e",1,2,3,4,5,true,false,true,true,false]];
for (let i = 0; i < mixArr.length; i++) {
    console.log(mixArr[i]);
    if (Array.isArray(mixArr[i])){
        let innerArr = mixArr[i];
        for (let j = 0; j < innerArr.length; j++) {
            console.log(innerArr[j]);
        }
    }
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let secondArr = [];
secondArr[0] = 1;
secondArr[1] = "gj;ldk";
secondArr[2] = "lsjr";
secondArr[3] = "12ed";
secondArr[4] = true;
console.log(secondArr);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
console.log("- є масив [2,17,13,6,22,31,45,66,100,-18] :")
let thirdArr = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
console.log("1. перебрати його циклом while");

let iW = 0;
while (iW < thirdArr.length){
    console.log(thirdArr[iW]);
    iW++;
}

// 2. перебрати його циклом for
console.log(" 2. перебрати його циклом for");

for (let i = 0; i < thirdArr.length; i++){
    console.log(thirdArr[i]);
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log("3. перебрати циклом while та вивести  числа тільки з непарним індексом");
iW = 0;
while (iW < thirdArr.length){
    if (iW %2 !== 0){
        console.log(thirdArr[iW]);
    }
    iW++;
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log("4. перебрати циклом for та вивести  числа тільки з непарним індексом");

for (let i = 0; i < thirdArr.length; i++){
    if (i %2 !== 0){
        console.log(thirdArr[i]);
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення
console.log("5. перебрати циклом while та вивести  числа тільки парні  значення");

iW = 0;
while (iW < thirdArr.length){
    if (thirdArr[iW] %2 === 0){
        console.log(thirdArr[iW]);
    }
    iW++;
}

//6. перебрати циклом for та вивести  числа тільки парні  значення
console.log("6. перебрати циклом for та вивести  числа тільки парні  значення");

for (let i = 0; i < thirdArr.length; i++){
    if (thirdArr[i] %2 === 0){
        console.log(thirdArr[i]);
    }
}

//7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < thirdArr.length; i++){
    if (thirdArr[i] %3 === 0){
        thirdArr[i] = "okten";
    }
}

//8. вивести масив в зворотньому порядку.
console.log("8. вивести масив в зворотньому порядку.");

iW = thirdArr.length - 1;
while (iW >= 0){
    console.log(iW + " = " + thirdArr[iW]);
    iW--;
}

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 9.1. перебрати його циклом while в зворотньому циклі
console.log("9.1. перебрати його циклом while в зворотньому циклі");

iW = thirdArr.length - 1;
while (iW >= 0){
    console.log(iW + " = " + thirdArr[iW]);
    iW--;
}

// 9.2. перебрати його циклом for в зворотньому циклі
console.log(" 9.2. перебрати його циклом for в зворотньому циклі");

let l = thirdArr.length - 1;
for (l; l >= 0; l--){
    console.log(thirdArr[l]);
}


//9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log("9.3. перебрати циклом while та вивести  числа тільки з непарним індексом в зворотньому циклі");
iW = thirdArr.length - 1;
while (iW >= 0){
    if (iW %2 !== 0){
        console.log(iW + " = " + thirdArr[iW]);
    }
    iW--;
}

//9.4. перебрати циклом for та вивести  числа тільки з непарним індексом в зворотньому циклі
console.log("9.4. перебрати циклом for та вивести  числа тільки з непарним індексом в зворотньому циклі");

l = thirdArr.length-1;
    for (l; l >= 0; l--){
        if (l %2 !== 0){
            console.log(l + " = " + thirdArr[l]);
        }
    }

//9.5. перебрати циклом while та вивести  числа тільки парні  значення в зворотньому циклі
console.log("9.5. перебрати циклом while та вивести  числа тільки парні  значення  в зворотньому циклі");

iW = thirdArr.length - 1;
while (iW >= 0){
    if (thirdArr[iW] %2 === 0){
        console.log(iW + " = " + thirdArr[iW]);
    }
    iW--;
}

//9.6. перебрати циклом for та вивести  числа тільки парні  значення в зворотньому циклі
console.log("9.6. перебрати циклом for та вивести  числа тільки парні  значення в зворотньому циклі");

l = thirdArr.length - 1;
for (l; l >= 0; l--){
    if (thirdArr[l] %2 === 0){
        console.log(l + " = " + thirdArr[l]);
    }
}


//9.7. замінити кожне число кратне 3 на слово "okten" в зворотньому циклі(якби вже не були замінені це б спрацювало :) )
l = thirdArr.length - 1;
for (l; l >= 0; l--){
    if (thirdArr[l] %3 === 0){
        thirdArr[l] = "okten";
    }
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log("- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.");

let numArr = [1,2,3,4,5,6,7,8,9,10];
for (const num of numArr) {
    console.log(num);
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log("- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.");

let strArr = ["er","tg","dsigj","sssjf","qaz","ujhg","hbva","wuirqfg","lwehgfl","ouaequgeo"];
for (let str of strArr){
    console.log(str);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log("- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.");
let mixedArr = [5,"tg","dsigj",3,"qaz",true,"hbva","wuirqfg",false,null];
for (let mixItem of mixedArr){
    console.log(mixItem);
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log("- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи");

let mixedArr2 = [true,"tg","dsigj",3,"qaz",true,"hbva","wuirqfg",false,"null"];
for (let mixItem of mixedArr2){
    if (typeof mixItem === "boolean"){
        console.log(mixItem);
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log("- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи");

let mixedArr3 = [587,"tg","dsigj",3,"qaz",true,"hbva","wuirqfg",false,"bull"];
for (let mixItem of mixedArr3){
    if (typeof mixItem === "number"){
        console.log(mixItem);
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log("- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи");

let mixedArr4 = [87,"tg","dsigj",35,"qaz",true,"hbva","wuirqfg",false,"bull"];

for (let mixItem of mixedArr4){
    if (typeof mixItem === "string"){
        console.log(mixItem);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log("- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.");

let someArr = [];
someArr[0] = "sjdv";
someArr[1] = 8798;
someArr[2] = true;
someArr[3] = 852;
someArr[4] = "uewohr";
someArr[5] = false;
someArr[6] = null;
someArr[7] = 753;
someArr[8] = "slf;l";
someArr[9] = "fin";

for (let i of someArr){
    console.log(i);
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log("- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write");

for (let i =0; i < 10; i++){
    console.log("номер кроку - " + i);
    document.write(`<p> номер кроку - ${i} </p>`);
}

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log("- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write");

for (let i =0; i < 100; i++){
    console.log("номер кроку - " + i);
    document.write(`<p> номер кроку - ${i} </p>`);
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log("- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write");

let ji = 0;
for (let i =0; i < 200; i+=2){
    console.log("номер кроку - " + ji + "; індекс = "+ i);
    document.write(`<p> номер кроку - ${ji} індекс = ${i}</p>`);
    ji++;
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log("- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write");

for (let i =0; i < 100; i++){
    if (i%2===0){
        console.log("номер кроку - " + i);
        document.write(`<p> номер кроку - ${i} </p>`);
    }
}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log("- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write");

for (let i =0; i < 100; i++){
    if (i%2!==0){
        console.log("номер кроку - " + i);
        document.write(`<p> номер кроку - ${i} </p>`);
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        bookTitle : "firstBook",
        pages : 238,
        authors: ["firstAuthor","secondAuthor"],
        genres: ["thriller","si-fi","darkComedy"]
    },
    {
        bookTitle : "secondBook",
        pages : 382,
        authors: ["oneAuthor"],
        genres: ["thriller","si-fi","drama"]
    },
    {
        bookTitle : "thirdBook",
        pages : 382,
        authors: ["firstAuthor","secondAuthor", "thirdAuthor"],
        genres: ["si-fi"]
    }
];
// -знайти наібльшу книжку.
let pagesMax = 0;


console.log("найбільша(найбільші книги) книга:");
for (let book of books) {
    if (book.pages > pagesMax){
        pagesMax = book.pages;
    }
}
for (let book of books){
    if (pagesMax===book.pages){
        console.log(book);
    }
}
// - знайти книжку/ки з найбільшою кількістю жанрів
console.log("книжки/ки з найбільшою кількістю жанрів:");

let genresMax = 0;
for (let book of books) {
    if (book.genres.length > genresMax){
        genresMax = book.genres.length;
    }
}
for (let book of books){
    if (genresMax===book.genres.length){
        console.log(book);
    }
}

// - знайти книжку/ки з найдовшою назвою
console.log("книжки/ки з найдовшою назвою:");

let lengthNameMax = 0;


for (let book of books) {
    if (book.bookTitle.length > lengthNameMax){
        lengthNameMax = book.bookTitle.length;
    }
}
for (let book of books){
    if (lengthNameMax===book.bookTitle.length){
        console.log(book);
    }
}
// - знайти книжку/ки які писали 2 автори
console.log("книжки/ки яку/які писали 2 автори:");
for (let book of books) {
    if (2 === book.authors.length){
        console.log( book);
    }
}
// - знайти книжку/ки які писав 1 автор
console.log("книжки/ки яку/які писав 1 автор:");

for (let book of books) {
    if (1 === book.authors.length){
        console.log( book);
    }
}








