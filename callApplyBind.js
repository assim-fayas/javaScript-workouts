// eg=>1

let name = 'Alice'

function greet(name) {
    console.log(`hello  ${name} ,my name is ${this.name}`);
}

const namee = { name: 'asim' }




// call
// greet.call(namee, "alice")

// apply
// greet.apply(namee, ['hamna'])


// bind
const info = greet.bind(namee, 'Alishba')

info()



// eg=>2

const person = {
    name: 'asim',
    secName: 'fayas'
}


function greet(name) {
    return ` hello ${this.name}, my name is ${name}`
}

// call
const p1 = greet.call(person, 'alishba')
console.log(p1);

// apply
const p2 = greet.apply(person, ['hamna'])
console.log(p2);

const p3 = greet.bind(person, 'nameer')
console.log(p3());