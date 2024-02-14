// closure

function closure() {
    let a = 'hello'

    function greet() {
        console.log(a);

    }
    return greet
}

var rslt = closure()
console.log(rslt);
rslt()