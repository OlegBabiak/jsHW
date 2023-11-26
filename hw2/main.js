// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = [1,"a", true, {},5,"b",6, 7,[],9];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.

let book1 = {
    title: "book1Title",
    pageCount: 451,
    genre: "si - fi"
};
let book2 = {
    title: "book2Title",
    pageCount: 145,
    genre: "non fiction"
};
let book3 = {
    title: "book3Title",
    pageCount: 514,
    genre: "pulp fiction"
};
console.log(book1, book2, book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: "book4Title",
    pageCount: 228,
    genre: "si - fi",
    authors: [
        Author1={Author1Name:"Author1Name",Author1Age: 52},
        Author2={Author2Name:"Author2Name",Author2Age: 35}
    ]
};

let book5 = {
    title: "book4Title",
    pageCount: 159,
    genre: "si - fi",
    authors: [
        Author3={Author3Name:"Author3Name",Author3Age: 63},
        Author4={Author4Name:"Author4Name",Author4Age: 25}
    ]
};
let book6 = {
    title: "book4Title",
    pageCount: 311,
    genre: "pulp fiction",
    authors: [
        Author5={Author5Name:"Author5Name",Author3Age: 92},
        Author6={Author6Name:"Author6Name",Author4Age: 18}
    ]
};
console.log(book4, book5, book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username, password. Вивести в консоль пароль кожного користувача

let users = [
    user1 = {
        name: "user1Name",
        username: "nickName1",
        password: 123456
    },
    user2 = {
        name: "user2Name",
        username: "nickName2",
        password: 654321
    },
    user3 = {
        name: "user3Name",
        username: "nickName3",
        password: "kjsgckl;"
    },
    user4 = {
        name: "user4Name",
        username: "nickName4",
        password: "nickName4_123"
    },
    user5 = {
        name: "user5Name",
        username: "nickName5",
        password: "852123"
    },
    user6 = {
        name: "user6Name",
        username: "nickName6",
        password: "qwerty"
    },
    user7 = {
        name: "user7Name",
        username: "nickName7",
        password: "asd123"
    },
    user8 = {
        name: "user8Name",
        username: "nickName8",
        password: "password"
    },
    user9 = {
        name: "user9Name",
        username: "nickName9",
        password: "myPassword"
    },
    user10 = {
        name: "user10Name",
        username: "nickName10",
        password: "myDateOfBirth"
    }
];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].password);
// }
console.log(users[0].password, users[1].password,users[2].password,users[3].password,users[4].password,
    users[5].password,users[6].password,users[7].password,users[8].password,users[9].password,);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x === 0){
    console.log("Невірно");
} else {
    console.log("Вірно");
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 23;
if (time>=0 && time<=14){
    console.log("first quarter");
} else if (time>=15 && time<=29){
    console.log("second quarter");
} else if (time>=30 && time<=44){
    console.log("third quarter");
} else if (time>=45 && time<=59){
    console.log("fourth quarter");
} else {
    console.log("this is not a right time")
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;
if (day>=1 && day<=10){
    console.log("first decade");
} else if (day>=11 && day<=20){
    console.log("second decade");
} else if (day>=21 && day<=31){
    console.log("third decade");
} else {
    console.log("this is not a right day");
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//   відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = prompt("введіть порядковий номер дня тижня (від 1 до 7)");
switch (dayOfWeek){
    case "1":
        console.log("Sunday");
        break;
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break;
    case "4":
        console.log("Wednesday");
        break;
    case "5":
        console.log("Thursday");
        break;
    case "6":
        console.log("Friday");
        break;
    case "7":
        console.log("Saturday");
        break;
    default:
        console.log("this is not a right day");
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.

let numberOne = 11;
let numberTwo = 55;

if (numberOne===numberTwo){
    console.log("The numbers is equal")
}else if (numberOne > numberTwo){
    console.log("numberOne is bigger than numberTwo")
}else if (numberOne < numberTwo){
    console.log("numberTwo is bigger than numberOne")
}else {
    console.log("Something went wrong with your numbers")
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x2 = null;
if (x2 === undefined || x2 === null || x2 === NaN || x2 === 0 || x2 === "" || x2 === false ){
x2 = "default";
}
console.log(x2);


//- з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray.
//   За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців
//   вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].monthDuration > 5){
//         console.log("Супер")
//     }
// }
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log("Супер")
}