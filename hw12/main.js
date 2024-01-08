//зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді корис

fetch("http://jsonplaceholder.typicode.com/users")
    .then(value => value.json())
    .then(value => {
        let ul1 = document.createElement("ul")
        document.body.append(ul1)
        for (const user of value) {
            let li1 = document.createElement("li")
            li1.innerHTML =`<a href="users.html?id=${user.id}"> ${user.id} ${user.name}</a>`
            document.body.append(li1)
            console.log()
        }
    });


