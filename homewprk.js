// 1)
//как называется функция 
function showMessage(параметры) {
    //код
}
// showMessage

// 2)
//как называется функция 
let showMessage1 = function (параметры) {
    //код
}
// showMessage

// 3)
//как называется функция 
let showMessage2 = (параметры) => {
    //код
}

// showMessage
// 4)
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию
function start() {
    console.log('launch');
}
start()
// 5)
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров
function sum(a, b) {
    return a + b

}
sum()
// 6)
//конвертируйте функцию ниже в функциональное вырожение

const sum3 = function (text = 'text', age = 24) {
    return `${text} ${age}`;

}
// 7)
//создайте функцию с помощбю конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров 
// function sum2(a,b,return a+b)
const sum2 = new Function("a", "b", "return a+b")
console.log(sum2(4, 3));
// 8)
//можно ли вызвать функцию до ее обьявления?
// можно
// 9)
//создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'
(function(){
console.log('Запуск');
}

)()

// 10)
//что такое arguments в функциях?
function sum(text, age) {
    console.log(arguments);
}

sum('text', 24);

// text,age

// 11)
//выведите в консоли обьект с параметрами из функции
function sum(text, age) {
    //код
}


sum('text', 24);

// ????


// 12)
//задайте параметру text значение 'some text' по умолчанию
function sum(text='some text', age) {
    //код

}

sum('text', 24)

// 13)
//вызовите функцию ниже
function sum(text, age, job) {
    //код
}
sum('something',13,'programmer')
// 14)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const person = {
    firstFunc: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
person.firstFunc.call(person1)
// 15)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const person2 = {
    firstFunc: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person3 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
person2.firstFunc.apply(person3)
// 16)
//какой из методов может принять массив параметров
// call()
// apply()

// oba

// 17)
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3
Math.max(1,2,3)

// 18)
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]
Math.max.apply(null,[1,2,4])
// 19)
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3
Math.min(1,2,3)

// 20)
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]
Math.min(null,[1,2,4])