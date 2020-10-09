function resolvedPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let success = {'message' : 'delayed success!'}
            console.log(success);
        }, 500)
    })
}

function rejectedPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!');
            }catch (e) {
                console.error(e);
            }
        }, 500)
    })
}

let test = resolvedPromise();
test.then(success => console.log(success))

let test2 = rejectPromise();
test2.then(success => console.log(success))
