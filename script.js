// 1. Arrow Function და ორი რიცხვის დაჯამება:
// დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.
//  მაგალითად: const add = (a, b) => a + b;

let sum = (a , b) => {
    return a + b
}

console.log(sum(10,11))

// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. 
// მაგალითად: (function(a, b) { return a - b; })(8, 3);

let idk = function(x , y) {
    return x - y
}
console.log(idk(10 , 2));

// 3. Arrow Function
// დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი 
// (თუ ლუწია დააბრუნებს true). მაგალითად: const isEven = (num) => num % 2 === 0;

let isEven = (num) => {
    if(num % 2 === 0 ){
        console.log(true);
    }else{
        console.log(false);
    }
}

isEven(3)

// 4. Callback Function და გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას,
//  რომელიც გამოიყენებს ამ რიცხვების ნამრავლის დასათვლელად:

let cheaked = (a , b) => a * b

let Multiplied = (z , m , cheaked) =>{
    return cheaked (z , m)
}
console.log(Multiplied(11 , 2 , cheaked));

// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს,
//  არის თუ არა ის დადებითი. მაგალითად: const isPositive = (num) => num > 0;

const isPositive = (number) => {
    if(number > 0){
        console.log("its positive");
    }else{
        console.log("its negative");
    }
}

isPositive(-11)


// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და
//  დააბრუნებს მის გაორმაგებულ მნიშვნელობას. მაგალითად: (function(n) { return n * 2; })(5);

let doubling = (number1) => number1 * number1

console.log(doubling(3));

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას,
//  რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ მნიშვნელობას:

function cheakednumber(a) {
    return a * a
}

let doubling2 = (z , cheakednumber) =>{
    return cheakednumber (z)
}
console.log(doubling(15 , cheakednumber));

// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე
//  (მაგალითად, არის თუ არა რიცხვი 3-ზე გაყოფადი).
//  მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;

let isDivisibleByThree = (number3) => {
    if(number3 % 3 === 0){
        console.log("რიცხვი იყოფა 3 - ზე");
    }else{
        console.log("რიცხვი არ იყოფა 3 - ზე და რჩება ნაშთი", number3 % 3);
    }
}
isDivisibleByThree(11)

// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას,
//  და გამოიძახებს Callback-ს, რომ შეამოწმოს, არის თუ არა ეს რიცხვი ლუწი.

function returnnumber2(num4) {
    if(num4 % 2 === 0){
        console.log("რიცხვი ლუწია");
    }else{
        console.log("რიცხვი კენტია");
    }
}

function funcidk(number4 , returnnumber2) {
    return returnnumber2(number4)
}

funcidk(12 , returnnumber2);



// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს.
//  მაგალითად: const cube = (num) => num * num * num;

let numbcube = num9 => num9 * num9 * num9
console.log(numbcube(3));

// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, 
// რომელიც დააბრუნებს მათ ნამრავლს.

let idk2 = (idknumber1 , idknumber2) => idknumber1 * idknumber2

let idk3 = (idknumber3 , idknumber4 , idk2) => idk2(idknumber3 , idknumber4)

console.log(idk3(4 , 2 , idk2));


// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. 
// მაგალითად: const isGreaterThanZero = (num) => num > 0;

let isGreaterThanZero = numbisGreaterThanZero => {
    if(numbisGreaterThanZero > 0){
        console.log("დადებითია");
    }else{
        console.log("უარეყოფითია");
    }
}
isGreaterThanZero(-10)

// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს.
//  მაგალითად: (function(n) { return n / 2; })(10);

let Anonymousnumber = function (Anonymousnumber) {
    return Anonymousnumber / 2
}
console.log(Anonymousnumber(100));



// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას,
//  რომელიც შეაჯამებს ამ რიცხვებს.

function callback9(k , j) {
    return k + j
}

function kplusj(number9 , number0 , callback9 ) {
    return callback9(number9 , number0)
}
console.log(kplusj(15 , 5 , callback9));


// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს.
//  მაგალითი: const square = (num) => num * num;

let square2 = (squarenumb) =>  squarenumb * squarenumb

console.log(square2(5));