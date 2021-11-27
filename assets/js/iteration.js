let arr = [1, 20, 30, "Idris", null, undefined, { age: 30 }, 70, true, "", 0]

// let newArr = arr.forEach((value, index, array) => {
//     // console.log(value + 5);
//     return value += 5;
// })

// console.log(newArr);

// let mapArr = arr.map((value, index, array) => {
//     return value += 5;
// })

// console.log(mapArr);

let numArr = [5, 10, 23, 69, 29, 5, 83]

// let filterArr = numArr.filter((value, index, array) => {
//     return value > 20;
// })

// console.log(filterArr);

// let numberArrayFilter = arr.filter(Boolean)
// console.log(numberArrayFilter);

// let totalPrice = numArr.reduce((total, value, index, array) => {
//     return total += value;
// })

// let total = numberArrayFilter.reduce((total, value) => {
//     return total += value;
// })

// console.log(total);

// let reverseArr = ["know", "to", "have", "you"]

// let reduceRight = reverseArr.reduceRight((total, value, index, array) => {
//     return total = total + " " + value;
// })

// console.log(reduceRight);


let every = numArr.every((value, index, array) => {
    return value > 20;
})

console.log(every);


let some = numArr.some((value, index, array) => {
    return value > 82;
})


let index = numArr.indexOf(5);

console.log(index);

let lastIndex = numArr.lastIndexOf(5);
console.log(lastIndex);