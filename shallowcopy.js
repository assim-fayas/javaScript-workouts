// shallow copy

const shallowObject = Object.assign({}, obj1) //you can also add spread operator instead of this
shallowObject.name = 'alishba'
shallowObject.language.english = false
console.log(obj1);
console.log(shallowObject);




// deep copy


const deepObject = JSON.parse(JSON.stringify(obj1))

deepObject.language.hindi = true
console.log(deepObject);
console.log(obj1);


//nestead array object


const arr = [{ name: 'a' }, { name: 'c' }]


function change(array, value) {
    const copyArray = array.map(value => ({ ...value }))
    copyArray.push({ ...value })
    copyArray[0].name = 'z'
    console.log(copyArray, 'cpy');


}


change(arr, { name: 'd' })
console.log(arr);
