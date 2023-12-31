//- створити блок,
let div1 = document.createElement("div");
// - додати йому класи wrap, collapse, alpha, beta
div1.classList.add("wrap", "collapse", "alpha", "beta");
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.style.backgroundColor = "pink";
div1.style.width = "50px";
div1.style.height = "50px";
div1.style.color = "red";
div1.style.fontSize = "12px";
div1.innerHTML = "12px";
// - додати цей блок в body.
document.body.append(div1);
// - клонувати його повністю, та додати клон в body.
let div2 = div1.cloneNode(true);
document.body.append(div2);

//- Є масив:
// ['Main','Products','About us','Contacts']
let someArr = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul1 = document.createElement("ul");
document.body.append(ul1);
for (const str of someArr) {
    let li = document.createElement("li");
    li.innerHTML = str;
    ul1.append(li);
}

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const arrayElement of coursesAndDurationArray) {

    let div2 = document.createElement("div");

    for (const arrayElementKey in arrayElement) {
        let inner = document.createElement("span");
        inner.innerHTML = " " + arrayElementKey + ": " + arrayElement[arrayElementKey];
        div2.append(inner)

    }
    document.body.append(div2)
}

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


for (const arrayElement of coursesAndDurationArray) {

    let div3 = document.createElement("div");
    div3.classList.add("item");

    let h1 = document.createElement("h1");
    h1.classList.add("heading");
    let p1 = document.createElement("p");
    p1.className = "description";
    h1.innerHTML = arrayElement.title;
    p1.innerHTML = arrayElement.monthDuration;
    div3.append(h1, p1)
    document.body.append(div3)
}


//- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];


// for (const simpson of simpsons) {
//     let div4 = document.createElement("div");
//     div4.className = "member";
//     for (const simpsonKey in simpson) {
//         let inner2 = document.createElement("p");
//         inner2.innerHTML =  simpsonKey + ": " + simpson[simpsonKey];
//         div4.append(inner2);
//     }
//     document.body.append(div4);
// }

for (const simpson of simpsons) {
    let div4 = document.createElement("div");
    div4.className = "member";
    let simpsonFullName = document.createElement("h2");
    let simpsonAge = document.createElement("p");
    let simpsonInfo = document.createElement("p");
    let simpsonPhoto = document.createElement("img");

    simpsonFullName.innerHTML = simpson.name + " " + simpson.surname
    simpsonAge.innerHTML = "age: " + simpson.age;
    simpsonInfo.innerHTML = simpson.info;
    simpsonPhoto.setAttribute("src", simpson.photo);
    div4.append(simpsonFullName, simpsonAge, simpsonInfo, simpsonPhoto);
    document.body.append(div4);
}

//Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const course of coursesArray) {
    let div5 = document.createElement("div");
    let courseTitle = document.createElement("div");
    let durationWrapper = document.createElement("div");
    let monthDuration = document.createElement("div");
    let hourDuration = document.createElement("div");
    let modules = document.createElement("div");
    durationWrapper.style.display = "flex";
    monthDuration.style.width = "37%";
    hourDuration.style.width = "60%";
    let ulModule = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
        let moduleI = document.createElement("div");
        moduleI.innerHTML = course.modules[i];
        moduleI.className = "border004080"
        modules.append(moduleI);
    }
    for (let i = 3; i < course.modules.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = course.modules[i];
        ulModule.append(li);
    }
    // for (const module of course.modules) {
    // let li = document.createElement("li");
    // li.innerHTML = module;
    // ulModule.append(li);
    // }

    courseTitle.innerHTML = course.title;
    monthDuration.innerHTML = "month duration: " + course.monthDuration;
    hourDuration.innerHTML = "hour duration: " + course.hourDuration;
    durationWrapper.append(monthDuration, hourDuration);
    modules.append(ulModule)
    div5.append(courseTitle, durationWrapper, modules);
    div5.style.border = "solid red"
    div5.style.marginBottom = "5px"
    monthDuration.className = "border004080"
    hourDuration.className = "border004080"
    courseTitle.className = "border004080"
    modules.className = "border004080"
    for (let i = 0; i < 7; i++) {
        div5.getElementsByClassName("border004080")[i].style.border = "solid #004080"
        div5.getElementsByClassName("border004080")[i].style.margin = "5px"
        div5.getElementsByClassName("border004080")[i].style.padding = "5px"
    }
    document.body.append(div5);
}