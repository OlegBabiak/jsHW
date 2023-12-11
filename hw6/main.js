//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let strings1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string of strings1) {
    console.log(`довжина "${string}" = ${string.length}`);
}
console.log("------------");
//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
for (const string of strings1) {

    console.log(string.toUpperCase());
}
console.log("------------");
//- Перевести до нижнього регістру настипні стрінгові значення


//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let upperStrings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

for (const upperString of upperStrings) {
    console.log(upperString.toLowerCase());
}
console.log("------------");

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dStr = ' dirty string   ';
console.log(dStr.trim());

console.log("------------");
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
const stringToArray = () => str.split(' ');
let arr = stringToArray();
console.log(arr);
console.log("------------");
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];

// let strNumbers = numbers.map(
//     (value,index,array) => array[index] = value.toString() // змінює за посиланням також масив numbers
// );
let strNumbers = numbers.map((value) => value.toString());
console.log(numbers);
console.log(strNumbers);
console.log("------------");

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(nums,direction) {
    if (direction ==='ascending'){
        return nums.sort((a,b)=>a-b)
    }else if (direction ==='descending'){
        return nums.sort((a,b)=>b-a)
    }else return nums + " choose direction please";
}
console.log(sortNums(nums));
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));
console.log("------------");

//==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort(
    (a,b)=>a.monthDuration-b.monthDuration
));
//  -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(
    value => value.monthDuration > 5
));
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map(
    (value, index) => {
        value.id = index + 1;
        return value;
    }
));
console.log("------------");

// =========================
//  описати колоду карт (від 6 до туза без джокерів)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================

let playCards = [
    {
        cardSuit: 'spade',
        value: '6',
        color:'black'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color:'black'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color:'black'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color:'black'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color:'black'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color:'black'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color:'black'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color:'black'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color:'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color:'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color:'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color:'red'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color:'red'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color:'red'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color:'red'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color:'red'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color:'red'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color:'red'
    }
// 'spade', 'clubs', 'diamond','heart'
//     value: '', // '6'-'10', ,'jack','queen','king','ace'
//     color:'', // 'red','black'
];
console.log(playCards);
//  - знайти піковий туз
let spadeAce = playCards.filter(
    value => value.cardSuit==="spade"&&value.value==="ace"
);
spadeAce = spadeAce[0];
console.log(spadeAce);
//  - всі шістки
let all6 = playCards.filter(
    value => value.value==='6'
);
console.log(all6);
//  - всі червоні карти
let allRed = playCards.filter(
    value => value.color==='red'
);
console.log(allRed);
//  - всі буби
let allDiamonds = playCards.filter(
    value => value.cardSuit==='diamond'
)
console.log(allDiamonds)
//  - всі трефи від 9 та більше
let almostAllClubs = playCards.filter(
    value => value.cardSuit==='clubs'&&value.value!=='9'&&value.value!=='8'&&value.value!=='7'&&value.value!=='6'
)
console.log(almostAllClubs)
console.log("------------");

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let packOfCards = playCards.reduce((accumulator,card, )=>{
    if (card.cardSuit==="spade"){
        accumulator.spades.push(card);
    }
    else if (card.cardSuit==="diamond"){
        accumulator.diamonds.push(card);
    }
    else if (card.cardSuit==="heart"){
        accumulator.hearts.push(card);
    }
    else if (card.cardSuit==="clubs"){
        accumulator.clubs.push(card);
    }
    return accumulator
    },
    {spades:[], diamonds:[], hearts:[], clubs:[]}

)
console.log(packOfCards)
console.log("------------");
//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter(
    value => value.modules.includes('sass')
);
console.log(sass);
// --написати пошук всіх об'єктів, в який в modules є docker

let docker = coursesArray.filter(
    value => value.modules.includes('docker')
);
console.log(docker);