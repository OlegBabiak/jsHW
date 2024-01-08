// 1

// console.log("log1");
// setTimeout(function () {
//     console.log("asd")
// }, 2000)
//
// setTimeout(function () {
//     console.log("qwe")
// }, 1000)
// console.log("log2");


//2

// let i = 0
//
// // while (i < 5) {
// //     setTimeout(function () {
// //         console.log(i)
// //     })
// //     i++
// // }
//
// while (i < 5) {
//     makeTimeout(i)
//     i++
// }
//
// function makeTimeout(i) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
//
// }

//3

// let it = 1;
// console.log("log1");
//
// setTimeout(() => {
//     console.log("timeout1");
//     it++;
// }, 0);
// console.log("log2");
//
// setTimeout(() => {
//     console.log("timeout2");
//     it++;
// }, 1110);
//
// setTimeout(function () {
//     console.log("log it with timeout 1000 it = " + it);
// }, 1000);
// setTimeout(function () {
//     console.log("log it with timeout 2000 it = " + it);
// }, 2000);
//
// console.log("log3");

//4

// setTimeout(function () {
//     console.log("1 timeout");
//     setTimeout(function () {
//         console.log("2 timeout");
//         setTimeout(function () {
//             console.log("3 timeout");
//             setTimeout(function () {
//                 console.log("4 timeout");
//             },1000);
//         },500);
//     },2000);
// },1000);

//5

// new Promise(function (resolve) {
//     setTimeout(function () {
//         console.log("1 timeout");
//         resolve();
//     }, 2000);
// }).then(() => {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             console.log("2 timeout");
//             resolve();
//         }, 10);
//     });
// }).then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("3 timeout");
//             resolve();
//         }, 1500);
//     });
// }).then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("4 timeout");
//             resolve();
//         }, 2000);
//     });
// });

//6

// let x = new Promise((resolve, reject) => {
//     let counter = 10;
//     setTimeout(function () {
//         if (counter < 0) {
//             reject("counter less than zero");
//         }
//         console.log(counter);
//         counter++;
//         resolve(counter);
//     }, 1000);
// })
//     .then((counter) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             }, 1500)
//         });
//     })
//     .then((counter) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             }, 1500);
//         });
//     })
//     .then((counter) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (counter===4){
//                     reject("counter = 4")
//                 }
//                 console.log(counter);
//                 counter++;
//                 resolve(counter);
//             }, 700);
//         });
//     })
//     .catch(reason => {
//         console.log(reason);
//     });


//7

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(value => value.json())
    .then(todos =>{
        for (const todo1 of todos) {
            let div = document.createElement("div");
            div.innerText = todo1.id + " " + todo1.title;
            if (todo1.completed){
                div.style.backgroundColor = "lightyellow";
            }
            document.body.appendChild(div);
        }
        return fetch("https://jsonplaceholder.typicode.com/posts");
    })
    .then(value => value.json())
    .then(value => console.log(value));

//8

// let resultAll = Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/todos").then(value => value.json()),
//     fetch("https://jsonplaceholder.typicode.com/posts").then(value => value.json())
// ]);
// // console.log(resultAll)
//
// resultAll.then(value => console.log(value))

//9

async function asyncFunction() {
    let todos = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(value => value.json());
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(value => value.json());
    console.log(todos);
    console.log(posts);

    return {todos,posts}
}
// asyncFunction()

console.log(asyncFunction());












