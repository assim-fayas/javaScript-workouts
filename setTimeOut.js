
// eg - 1

function x() {
    var i = 1
    setTimeout(() => {
        console.log(i);
    }, 3000)

    console.log("helllow");
}
x()


// eg-2

function yz() {
    console.log("starts");
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i)
    }
    console.log("ends");
}
yz()