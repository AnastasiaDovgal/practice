// const serchNumber = function (p1, p2, p3) {
//     const mas = [0, 1, 2, 3, 4, 5];
//     const oneNumber = document.getElementById('number-one').value;
//     const twoNumber = document.getElementById('number-two').value;
//     const result = document.getElementById('result');
//     mas.includes(Number(oneNumber)) && mas.includes(Number(twoNumber)) ? result.value = true : result.value = false;
// }

function getResult() {
    let code = document.getElementById('code-place').value;
    const result = document.getElementById('result-place');

    // result.value = eval(code)();
    // result.value = eval(function () { return 1; })();
    result.value = eval(code);
    // result.value = eval(document.getElementById('code-place').value)();
}

// function getResult() {
//     let code = document.getElementById('code-place').value;
//     const result = document.getElementById('result-place');

//     result.value = eval(code)();
// }

const colorString = function (colorString, str) {
    const color = JSON.parse(colorString);
    let colorStr = '', i = 0, j;
    for (j = 0; j < str.length; j++) {
        colorStr += `<span style="color: ${color[i]}">${str[j]}</span>`;
        if (str[j] != ' ') {
            i++;
        }
        if (i == color.length) {
            i = 0;
        }
    }
    return colorStr;
}

const data = {
    currentTask: 0,
    currentOutput: 0,
    tasks: [
        {
            checked: true,
            value: '0',
            caption: 'color string',
            param1: '["red", "blue", "green", "yellow", "black"]',
            param2: 'Lorem ipsum dolor sit amet',
            taskFunction: colorString
        },
        {
            value: '1',
            caption: 'Say Hello in colors',
            param1: '["red", "blue", "green", "yellow", "black"]',
            param2: 'User',
            taskFunction: function (p1, p2) {
                return colorString(p1, 'Hello ' + p2);
            }
        },
        {
            value: '2',
            caption: 'Say something',
            param1: 'Hi',
            param2: 'Mama',
            taskFunction: function (p1, p2) {
                return p1 + ' ' + p2 + ' :)';
            }
        },
        {
            value: '3',
            caption: 'including number',
            param1: [0, 1, 2, 3, 4, 5],
            param2: 5,
            param3: 1,
            taskFunction: function (p1, p2, p3) {
                let showTrueFalse;
                p1.includes(p2) && p1.includes(p3) ? showTrueFalse = true : showTrueFalse = false;
                return showTrueFalse;
            }
        }
    ]
}

function createTasks() {
    let taskElements = '';

    for (let i = 0; i < data.tasks.length; i++) {
        const value = data.tasks[i].value;
        const caption = data.tasks[i].caption;
        const checked = data.tasks[i].checked ? 'checked' : '';
        taskElements += `<p><input type="radio" name="tasks" value="${value}" ${checked} onclick="setParams(event)">${caption}</p>`;
    }

    return taskElements;
}
document.getElementById('tasks').innerHTML = createTasks();
document.getElementById('param-big').value = data.tasks[0].param1 ? data.tasks[0].param1 : '';
document.getElementById('param-small-one').value = data.tasks[0].param2 ? data.tasks[0].param2 : '';
document.getElementById('param-small-two').value = data.tasks[0].param3 ? data.tasks[0].param3 : '';

function setParams(event) {
    const obj = data.tasks[event.target.value];

    document.getElementById('param-big').value = obj.param1 ? obj.param1 : '';
    document.getElementById('param-small-one').value = obj.param2 ? obj.param2 : '';
    document.getElementById('param-small-two').value = obj.param3 ? obj.param3 : '';

    data.currentTask = event.target.value;
    console.log(obj.param3);
}

// function setOutput(event) {
//     data.currentOutput = event.target.value;
// }

function goFunction() {
    const paramBig = document.getElementById('param-big').value;
    const paramSmallOne = document.getElementById('param-small-one').value;
    const paramSmallTwo = document.getElementById('param-small-two').value;
    const output = document.getElementsByName('output');
    for (let i = 0; i < output.length; i++) {
        if (output[i].checked) {
            data.currentOutput = i;
            break;
        }
    }
    if (data.currentOutput == 0) {
        document.getElementById('result-function').innerHTML = data.tasks[data.currentTask].taskFunction(paramBig, paramSmallOne, paramSmallTwo);
    }
    if (data.currentOutput == 1) {
        alert(data.tasks[data.currentTask].taskFunction(paramBig, paramSmallOne, paramSmallTwo));
    }
    if (data.currentOutput == 2) {
        console.log(data.tasks[data.currentTask].taskFunction(paramBig, paramSmallOne, paramSmallTwo));
    }
}

// Exercises

// DOM 1

function jsStyle() {
    const text = document.getElementById('text');
    text.style.color = 'red';
    text.style.fontFamily = 'Georgia';
    text.style.fontSize = '2em';
}

// DOM 2

function getFormValue() {
    event.preventDefault();
    console.log(document.getElementsByName('fname')[0].value, document.getElementsByName('lname')[0].value)
}

// DOM 3

function changeP() {
    document.getElementById('changing-text').style.backgroundColor = 'yellowgreen';
}

// DOM 4

function getAttributes() {
    // Solution 1:
    // const l = document.getElementById('w3r');
    // console.log(l.href, l.hreflang, l.rel, l.target, l.type);

    // Solution 2:
    const link = document.getElementById('w3r');
    for (let i = 1; i < link.attributes.length; i++) {
        console.log(link.attributes[i].name + ': ' + link.attributes[i].value);
    }
}

// DOM 5

function insertRow() {
    const table = document.getElementById('sampleTable');
    let rowNumber = table.rows.length;
    const addRow = table.insertRow(rowNumber);
    const addCellOne = addRow.insertCell(0);
    const addCellTwo = addRow.insertCell(1);
    rowNumber++;
    addCellOne.innerHTML = 'Row' + rowNumber + ' cell1';
    addCellTwo.innerHTML = 'Row' + rowNumber + ' cell2';
}

// DOM 6

function changeContent() {
    const table = document.getElementById('my-table');
    const content = document.getElementById('content-my-table').value;
    const row = document.getElementById('row-my-table').value;
    const column = document.getElementById('column-my-table').value;

    table.rows[row].cells[column].innerHTML = content;
}

// DOM 7

function createTable() {
    const table = document.getElementById('myTable-create');
    const row = document.getElementById('table-create-row').value;
    const column = document.getElementById('table-create-column').value;
    let tableContent = '';
    for (let i = 0; i < row; i++) {
        tableContent += `<tr>`;
        for (let j = 0; j < column; j++) {
            tableContent += `<td>Row-${i} Column-${j}</td>`;
        }
        tableContent += `</tr>`;
    }
    table.innerHTML = tableContent;
}

// DOM 8

function removeColor() {
    let op = document.getElementById('colorSelect');
    op.remove(op.selectedIndex);
}

// DOM 9

function getOptions() {
    const select = document.getElementById('mySelect');
    let options = [];
    for (let i = 0; i < select.options.length; i++) {
        options.push(select.options[i].innerHTML);
    }

    alert('Options: ' + options + '; \nLength: ' + options.length);
}

// DOM 10

function calcVolumeSphere() {
    event.preventDefault();
    const radius = 4 / 3 * Math.PI * (document.getElementById('sphere-radius').value ** 3);
    let volume = document.getElementById('sphere-volume');

    volume.value = radius;
}

// DOM 11

function showRandomImage() {
    const imgArrayObj = [
        {
            src: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg',
            width: '240',
            height: '160',
            alt: 'img1'
        },
        {
            src: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg',
            width: '320',
            height: '195',
            alt: 'img2'
        },
        {
            src: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg',
            width: '500',
            height: '343',
            alt: 'img3'
        }
    ]
    const randomImg = Math.floor(Math.random() * 3);
    document.getElementById('display-random-img').innerHTML = imgArrayObj[randomImg];

    document.getElementById('display-random-img').innerHTML = `
        <img src="${imgArrayObj[randomImg].src}" width="${imgArrayObj[randomImg].width}" height="${imgArrayObj[randomImg].height}" alt="${imgArrayObj[randomImg].alt}">`
}

// DOM 12

function highlightAllWords() {
    const words = document.getElementById('words').children;
    for (let i = 0; i < words.length; i++) {
        words[i].style.color = 'blue';
    }
}

function normalAllWords() {
    const words = document.getElementById('words').children;
    for (let i = 0; i < words.length; i++) {
        words[i].style.color = '';
    }
}

// DOM 13

function getWindowSize() {
    const p = document.getElementById('show-window-size');
    const height = window.outerHeight;
    const width = window.outerWidth;
    const txt = "Window size: height=" + height + ", width=" + width;
    p.innerHTML = txt;
}

// Object 1

const student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12
};

function getObjectProperties(obj) {
    let number = 0;
    for (let p in obj) {
        number++;
    }
    let currentNumber = 0;
    for (let p in obj) {
        currentNumber++;
        console.log(p + ': ' + obj[p] + (currentNumber != number ? "," : ''));
    }
    // console.log(Object.keys(student).join());
}

// function go() {
//     return 1;
// }

// const go = function () {
//     return 1;
// }

// const go = function (num) {
//     return num * 2;
// }

// const go = num => num * 2;

// const go = () => {
//     return 1;
// }

// Object 2

function deleteObjectPropertie() {
    console.log(student);
    delete (student.rollno);
    // delete student.rollno;
    console.log(student);
}

// Object 3

function getObjectLength() {
    // const output = document.getElementById('put-object-length');
    let number = 0;
    for (let p in student) {
        number++;
    }
    document.getElementById('put-object-length').innerHTML = 'Object length: ' + number;
}

// Object 4

const libraryOne = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

const displayReadingStatus = (array) => {
    let book = '';
    for (let i = 0; i < array.length; i++) {
        book = '"' + array[i].title + '"' + ' by ' + array[i].author + '.';
        if (array[i].readingStatus) {
            console.log("Already read " + book);
        } else {
            console.log("You still need to read " + book);
        }
    }
}

// Object 5

const Cylinder = function (height, diameter) {
    this.height = height;
    this.diameter = diameter;
    this.volume = () => {
        const radius = this.diameter / 2;
        return this.height * Math.PI * radius * radius;
    }
}

const calcAndOtputCylinder = function () {
    const num1 = document.getElementById('cyl-num-one').value;
    const num2 = document.getElementById('cyl-num-two').value;
    const output = document.getElementById('output-cylinder');
    const cyl = new Cylinder(num1, num2);
    output.innerHTML = 'Volume = ' + cyl.volume(num1, num2);
}

// const calcAndOtputCylinder = function () {
//     const num1 = document.getElementById('cyl-num-one').value;
//     const num2 = document.getElementById('cyl-num-two').value;
//     const output = document.getElementById('output-cylinder');
//     const cyl1 = cylinder(num1, num2);
//     output.innerHTML += cylinder(num1, num2);
// }

// const cylinder = (height, diameter) => {
//     const cyl = {
//         height: height,
//         diameter: diameter,
//         volume: () => {
//             const radius = this.diameter / 2;
//             return this.height * Math.PI * radius * radius;
//         }
//     }
//     return cyl;
// }

// Object 6

const getBubbleSortAlgorithm = array => {
    const arr = [...array];
    const newArr = [];
    let minEl = arr[0];
    let index = 0;
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (minEl > arr[i + 1]) {
                minEl = arr[i + 1];
                index = i + 1;
            }
        }
        newArr.push(minEl);
        arr.splice(index, 1);
        minEl = arr[0];
        index = 0;
    }
    console.log(newArr);
}

// Object 7

// const returnsSubsetOfString = () => {

// }

String.prototype.returnsSubsetOfString = function () {
    const subset = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length + 1; j++) {
            subset.push(this.slice(i, j));
        }
    }
    return subset;
};

console.log("dog".returnsSubsetOfString());

// // Object 8

const createClockTimer = setInterval(createClock, 1000);
// var createClock = () => {
function createClock() {
    const clock = new Date();
    document.getElementById('clock-place').innerHTML = clock.toLocaleTimeString();
}

var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
// Object 9

const calculateAreaAndPerimeterOfCircle = () => {
    const radius = document.getElementById('circle-radius').value;
    const area = document.getElementById('output-circle-area');
    const perimeter = document.getElementById('output-circle-perimeter');

    area.value = Math.PI * radius * radius;
    perimeter.value = 2 * Math.PI * radius;
}

// Object 10

const libraryTwo = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

// const  = () => {

// }

// Object 11

// const  = () => {

// }


// JavaScript conditional statements and loops 1

// function (){

// }


// const fleshka = {
//     name: 'Fleshka',
//     animal: 'cat',
//     voice: () => 'Meaw'
// }

// fleshka.voice;
// () => 'Meaw'
// fleshka.voice();
// "Meaw"
// const tiger = {
//     name: 'Tiger',
//     animal: 'cat',
//     voice: () => 'Meaw'
// }

// tiger.voice();
// "Meaw"
// const cat = function (name) {
//     this.name = name;
//     this.animal = 'cat';
//     this.voice = () => 'Meaw';
// }

// cat
// ƒ(name) {
//     this.name = name;
//     this.animal = 'cat';
//     this.voice = () => 'Meaw';
// }
// const kyzia = new cat('kyzia');

// kyzia;
// cat { name: "kyzia", animal: "cat", voice: ƒ }
// kyzia.voice();
// "Meaw"
// cat.prototype.weapon = 'clows';
// "clows"
// cat;
// ƒ(name) {
//     this.name = name;
//     this.animal = 'cat';
//     this.voice = () => 'Meaw';
// }
// const mania = new cat('Mania');

// mania;
// cat { name: "Mania", animal: "cat", voice: ƒ } animal: "cat"name: "Mania"voice: () => 'Meaw'__proto__: Objectweapon: "clows"constructor: ƒ(name)__proto__: Object
// mania.weapon;
// "clows"
// kyzia.weapon;
// "clows"


// const dogs = (name) => {
//     const dog = {
//         name: name,
//         animal: 'dog',
//         voice: () => 'Woof'
//     }
//     return dog;
// }

// const juck = dogs('Juck');

// juck.voice();
// "Woof"


const testArray = [
    1,
    'string',
    {
        p1: 'something',
        p2: 'something'
    },
    [1, 2, 3],
    true,
    null
]
console.log(testArray);
const testObj = {
    string: 'string',
    number: 1,
    array: [1, 2, 3],
    obj: {
        p1: 'something',
        p2: 'something'
    },
    true: true,
    null: null,
    function: function () {
        console.log("I'm working!");
    }
}
console.log(testObj);