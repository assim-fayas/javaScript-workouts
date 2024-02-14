//generator function 

// eg-1

// function* count(value) {
//     for (let i = 1; i <= value; i++) {
//         yield i

//     }
//     yield 'haiiii'
// }

// let rslt = count(10)

// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);
// console.log(rslt.next().value);





// eg-2

function* countUpto(num) {
    for (let i = 1; i <= num; i++) {
        yield i
    }
    yield 'finally'

}

let result = countUpto(4)
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);


