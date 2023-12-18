//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
for (let i = 1; i <= 10; i++) {
    users.push(new User(i * 1000 + parseInt("" + Math.random() * 100), "nameUser" + i, "surnameUser" + i, "surnameUser" + i + "@gmail.com",
        "+380" + Math.round(Math.random() * 1000000000)));
}
console.log(users);
console.log("---------------------------");

//- Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

let filteredEvenId = users.filter(user => user.id % 2 === 0);

console.log(filteredEvenId);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedById = users.sort((a, b) => a.id - b.id);
console.log(sortedById);


//- створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
let possibleOrder = ["bread", "milk", "butter", "bananas", "potatoes", "tomatoes", "beer", "meat", "fish", "water", "wine"];
for (let i = 1; i <= 10; i++) {
    let purchases = [];
    for (let j = 0; j < Math.random() * 10; j++) {
        purchases.push(possibleOrder[Math.round(Math.random() * 10)])
    }
    clients.push(new Client(i * 1000 + Math.round(Math.random() * 100), "nameUser" + i,
        "surnameUser" + i, "surnameUser" + i + "@gmail.com",
        "+380" + Math.round(Math.random() * 1000000000), purchases));

}
console.log(clients);

console.log("------------------")
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedByOrderClient = clients.sort((a, b) => a.order.length - b.order.length);
for (const client of clients) {
}
for (const sortedByOrderClientElement of sortedByOrderClient) {
    console.log(sortedByOrderClientElement.order)
}
console.log("------------------");


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        // for (const argumentsKey in this) {
        //     console.log(argumentsKey + " - " + this[argumentsKey]);
        // }
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engineVolume - ${this.engineVolume}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car("mazda6", "mazda", 2023, 210, 2.0);
car1.drive();
console.log(car1)
car1.info()
car1.increaseMaxSpeed(250)
car1.changeYear(2024)
car1.addDriver({driverName: "Ravlyk"})
console.log(car1)
console.log("------------------");

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engineVolume - ${this.engineVolume}`);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue
    };

    addDriver(driver) {
        this.driver = driver;
    }
}


let car2 = new Car2("M5", "BMW", 2020, 250, 3.0);
car2.drive();
console.log(car2)
car2.info()
car2.increaseMaxSpeed(280)
car2.changeYear(2023)
car2.addDriver({driverName: "Pavlyk"})
console.log(car2)
console.log("------------------");


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


class Cinderella {
    constructor(cindName, cindAge, cindFoot) {
        this.cindName = cindName;
        this.cindAge = cindAge;
        this.cindFoot = cindFoot;
    }
}

let cinderellas = [];
for (let i = 0; i < 10; i++) {
    cinderellas[i] = new Cinderella("CindName" + i, 18 + Math.round(Math.random() * 10), 41 - i)
}

console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(princeName, princeAge, shoe) {
        this.princeName = princeName;
        this.princeAge = princeAge;
        this.shoe = shoe;
    }
}

let prince = new Prince("Prince", 21, 35);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const cinderella of cinderellas) {
    if (cinderella.cindFoot === prince.shoe) {
        console.log(`This is new happy couple: ${prince.princeName} and ${cinderella.cindName}!!!`)
    }
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = cinderellas.filter(value => value.cindFoot === prince.shoe);

console.log("Cinderella winner: " + findCinderella[0].cindName);
