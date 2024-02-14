//protoypal inheritance

const animal = {
    eats: true,
    tame: false
}

const rabbit = {
    jump: true
}


rabbit.__proto__ = animal


console.log(rabbit.eats);
console.log(rabbit.tame);





// Map

// const values = new Map()

// values.set(true, 'sss')
// values.set('asim', 'fff')
// values.set(true, '111')
// values.set(1, 22)


// console.log(values.keys()); 