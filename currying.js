// function currying

function multiply(a) {
    return function (b) {
        return a * b
    }
}
console.log("multiplication of two");
const multOfTwo = multiply(2)
console.log(multOfTwo(1));
console.log(multOfTwo(2));
console.log(multOfTwo(3));
console.log(multOfTwo(4));
console.log(multOfTwo(5));
console.log(multOfTwo(6));
console.log(multOfTwo(7));
console.log(multOfTwo(8));
console.log(multOfTwo(9));
console.log(multOfTwo(10));


