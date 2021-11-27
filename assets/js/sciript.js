// function Sum(a, b, c) {
//     let result = 5;
//     return result;
// }

// const max = Math.max(5, 15, 20, 25, 90, 91, 10, 4)

// function testArg() {

//     let args = Array.from(arguments)
//     let result = 0;
//     for (let i = 0; i < args.length; i++) {
//         result += args[i]

//     }
//     return result;
// }

// console.log(testArg(5, 10, 20, 30, 50));

let firstname = "Aqil"
let surname = "Bashirov"


// let obj = {
//     firstname: "Ali",
//     surname: "Aliyev",
//     getFullname: function() {
//         return obj.firstname + " " + obj.surname + " " + firstname + " " + surname
//     }
// }

// console.log(obj.getFullname());

// console.log(func);


// var func = () => {
//     console.log("it is arrow func");
// }



// function Sum2(a, b) {
//     console.log(a + b);
// }


// console.log(Sum2(5, 6));

// func()

let func2 = a => {
    console.log(a);
}
let func3 = (a, b) => {
    console.log(a + b);
}

let func4 = (age) => { return { age: 40 } }

let func5 = (age) => ({ age: 60 })

// func2(5)
// func3(5, 7)

// console.log(func4(30));

// console.log(func5(50));

// let user = {
//     username: "crokie",
//     age: 39,
//     getUsername: function() {
//         return this
//     },
//     getAge: () => {
//         return this;
//     }
// }

// console.log(user.getAge());

let arguments = 5;

function Test() {
    return arguments
}


let func6 = () => {
    return arguments;
}

// console.log(Test());


// console.log(func6(5, 6, 10));

// let max1 = Math.max(5, 20, 30, 90)
// console.log(max1);

// function customMax() {
//     let argArr = Array.from(arguments);
//     let max = argArr[0];

//     for (let i = 0; i < argArr.length; i++) {
//         if (argArr[i] > max) {
//             max = argArr[i];
//         }
//     }
//     return max;
// }

// console.log(customMax(25, 10, 7, 15));


// let anonymFunc = function() {
//     return this
// }

// console.log(anonymFunc(1, 6, 10));

function sumArrNumberswithNine(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newNum = arr[i] + 9;
        newArr.push(newNum)
    }
    return newArr;
}

function MinusArrNumberwithFive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newNum = arr[i] - 5;
        newArr.push(newNum)
    }
    return newArr;
}

function DivideArrNumbersbyTwo(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newNum = arr[i] / 2;
        newArr.push(newNum)
    }
    return newArr;
}

// console.log(sumArrNumberswithNine([5, 20, 80, 120]));
// console.log(MinusArrNumberwithFive([5, 20, 80, 120]));
// console.log(DivideArrNumbersbyTwo([5, 20, 80, 120]));

// Callback functions

// function processArrnumbers(arr, cb) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(cb(arr[i]))
//     }
//     return newArr;
// }

// function divideByTwo(number) {
//     return number / 2
// }

// function plusWithFive(number) {
//     return number + 5;
// }

// function plusWithNine(number) {
//     return number + 9
// }

// console.log(processArrnumbers([5, 20, 80, 120], divideByTwo));
// console.log(processArrnumbers([5, 20, 80, 120], plusWithFive));
// console.log(processArrnumbers([5, 20, 80, 120], plusWithNine));


//IIFE - immediately invoked function expression

// function test() {
//     console.log("okay");
// }

// test();


// (function immediately() {
//     console.log("IIFE");
// })();


// (function test1(a, b) {
//     console.log(a + b);
// })(6, 10);

// (function test2() {
//     nickname = "crokie"
//     console.log(nickname);
// })();

// test2();


// console.log(nickname);

// nickname = "vendetta"

// console.log(nickname);