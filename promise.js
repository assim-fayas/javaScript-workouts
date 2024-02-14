
//promise

const promise1 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('hai')
    } else {
        reject("error occured in p1")
    }
})
const promise2 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('hello')
    } else {
        reject("error occured in p2")
    }
})
const promise3 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('how are you')
    } else {
        reject("error occured in p3")
    }
})


const promises = [promise1, promise2, promise3]

//promise api(race,any,all,allSettled)

Promise.allSettled(promises)
    .then((rslt) => console.log(rslt))
    .catch((error) => console.error(error))




// =>>>  promise in function

function rslt() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('passed')
            } else {
                reject('failed')
            }
        }, 3000)

    })
}

rslt()
    .then((value) => console.log(value))
    .catch((error) => console.log(error))





// =>>> async await

async function result(name) {
    try {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve('passed')
                } else {
                    reject(` ${name}  ` + ' ' + 'failed')
                }
            }, 2000)
        })

        const result = `${name}` + ' ' + await p1
        return result
    } catch (error) {
        return error
    }

}
result("asim").then(result => console.log(result)).catch(error => console.error(error));


