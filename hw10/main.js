//Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів,
// та вивести об'єкт в документ. Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form1 = document.forms[0];
let div1 = document.createElement("div");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
form1.onsubmit = function (ev) {
    ev.preventDefault();
    document.body.append(div1);
    p1.innerHTML = `Name: ${this.username.value}`;
    div1.append(p1);
    p2.innerHTML = `Surname: ${this.userSurname.value}`;
    div1.append(p2);
    p3.innerHTML = `Age: ${this.userAge.value}`;
    div1.append(p3);
}

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let increment = document.getElementsByClassName("num")[0].innerHTML;
window.onload = function () {
    if (localStorage.getItem("in") || localStorage.setItem("in", increment)) {
        let j = localStorage.getItem("in");
        j++;
        localStorage.setItem("in", j);
        document.getElementsByClassName("num")[0].innerHTML = j;
    }
}

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let sessions = [];
let date;
window.addEventListener('load', function () {
    if (localStorage.getItem("sessions") || localStorage.setItem("sessions", JSON.stringify(sessions))) {
        let s = localStorage.getItem("sessions");
        date = new Date();
        let se = JSON.parse(s);
        se.push(date);
        localStorage.setItem("sessions", JSON.stringify(se));
    }
});

//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let objects = [];
for (let i = 1; i <= 100; i++) {
    objects.push({objName: `Object ${i}`})
}
let iDiv4 = 0;
let jDiv4 = 10;

function printDiv4(i, j) {
    for (; i < j; i++) {
        let div4 = document.createElement("div");
        div4.innerHTML = objects[i].objName;
        document.body.append(div4);
    }
}

printDiv4(iDiv4, jDiv4);

let buttonNext = document.createElement("button");
buttonNext.innerHTML = " NEXT ";
document.body.append(buttonNext);

let buttonPrev = document.createElement("button");
buttonPrev.innerHTML = " PREV ";
document.body.append(buttonPrev);

buttonNext.onclick = function () {
    iDiv4 = iDiv4 + 10;
    jDiv4 = jDiv4 + 10;
    if (iDiv4 < 100) {
        printDiv4(iDiv4, jDiv4);
    } else {
        let divOutOfNextRange = document.createElement("div");
        divOutOfNextRange.innerHTML = "we do not have next objects in this array";
        document.body.append(divOutOfNextRange);
    }
}

buttonPrev.onclick = function () {
    iDiv4 = iDiv4 - 10;
    jDiv4 = jDiv4 - 10;
    if (jDiv4 > 0) {
        printDiv4(iDiv4, jDiv4);
    } else {
        let divOutOfPrevRange = document.createElement("div");
        divOutOfPrevRange.innerHTML = "we do not have previous objects in this array";
        document.body.append(divOutOfPrevRange);
    }
}


//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div5 = document.createElement("div");
div5.id = "text"
div5.style.width = "100px";
div5.style.backgroundColor = "pink";
div5.style.height = "100px";
div5.innerHTML = "Lorem ipsum dolor sit amet."
document.body.append(div5);
let buttonTextEliminator = document.createElement("button");
buttonTextEliminator.innerHTML = " Text Eliminator ";
document.body.append(buttonTextEliminator);
buttonTextEliminator.onclick = function () {
    if (document.getElementById("text")) {
        let element = document.getElementById("text")
        element.remove();
    }
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form2 = document.createElement("form");
let inputAge = document.createElement("input");
let submitAge = document.createElement("button");
inputAge.placeholder = "enter your age";
inputAge.type = "number";
submitAge.innerHTML = "submit age"
document.body.append(form2);
form2.append(inputAge, submitAge);

let forbiddenAgeDiv = document.createElement("div");

submitAge.onclick = function (ev) {
    ev.preventDefault();
    if (inputAge.value < 18) {
        forbiddenAgeDiv.innerHTML = "your age is under 18";

    }else {
        forbiddenAgeDiv.innerHTML = "your age is ok";
    }
    document.body.append(forbiddenAgeDiv)
}
