function load() {
    let name = prompt("Your name")
    let address = prompt("Address")
    let phoneNumber = prompt("phoneNumber")
    let city = prompt("city")

    console.log(name);
    console.log(address);
    console.log(phoneNumber);
    console.log(city);
    console.log(name, address, phoneNumber);

    test()
    triangle()
    calculator()

    isLeap()
    getInput()
    arrays()

}

const test = () => {
    var a = "3";
    var b = "8";

    [a, b] = [b, a]

    console.log("a is " + a);
    console.log("b is " + b);
}

const triangle = () => {
    let [l, w] = [5, 12];
    console.log("Perimeter: ", (l + w) * 2);
    console.log("Area: ", l * w);

    document.write("Perimeter: ", (l + w) * 2)
    document.write("Area: ", l * w)
}

function calculator() {
    let num1 = Number(prompt("num1"))
    let num2 = Number(prompt("num2"))
    let operator = prompt("operator")

    switch(operator) {
        case '-':
            console.log(num1- num2);
            break;
        case '*':
            console.log(num1*num2);
            break;
        case '+':
            console.log(num1+num2);
            break;
        case '/':
            if (num2 === 0) console.log("Dividing be zero");

            console.log(num1/num2);
            break;
        default:
            console.log("try again!");
    }

}

function isLeap() { 
    let year = Number(prompt("Enter a year: "))

    if(year % 4 === 0) {
        if(year % 100 !== 0) {
            console.log('.');
        }
        else {
            if(year % 400 === 0 && year % 100 === 0) {
                console.log(year + " is a leap year");
            }
            else console.log(year + " is not a leap year");
        }
    }
}

const square = (a) => {
    return a ** 2
}

const sumCubes = (a, b) => {
    return a ** 3 + b ** 3
}

const reverseNumber = (num) => {
    return Number(num.toString().split('').reverse().join(""))
}

console.log(reverseNumber(123));


const divByZ = (z) => {
    for(let i = 1;i<101;i++) {
        if(i % z === 0) {
            console.log(i);
        }
    }
}

let a = "hello"
console.log(a.substring(0, 4)); // 4 betu lesz az index az 3


function getInput() {
    let input = prompt("Email")

    let ls = input.split('@')
    console.log("username: " + ls[0]);
    console.log("domain: " + ls[1]);
}

function whosPaying(names) {

}

var name = []


const arrays = () => {
    let arr = [1,2,3,4,5,6,8,9,9,10];
    let sum = 0;
    arr.forEach((num) => {
        sum += num;
    })

    let average = sum / arr.length
    let max = Math.max(...arr);
    let min = Math.min(...arr)

    console.log(sum, average, max, min);

}

function show() {
    document.getElementById('text').innerHTML = "Hello, World!" // p tag in html file
}
