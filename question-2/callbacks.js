function resolvedPromise(done) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(done){
                resolve({'message' : 'delayed success!'})
            }else{
                reject('Rejected')
            }
        }, 500)
    })
}

function rejectedPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let Msg = ""
            try {
                throw new Error({ 'error': 'delayed excelption!' })
            } catch (e) {
                Msg = e.message
            }

            if(false){
                resolve('there was no error')
            }
            else{
                reject(Msg)
            }
        }, 500)
    })
}

rejectedPromise(true).then((result) =>{
    console.log(result)
}, error =>{
    console.log(error)
})

resolvedPromise(true).then((result) => {
    console.log(result)
}, error => {
    console.log(error)
})
