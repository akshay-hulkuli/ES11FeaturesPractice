//there are cases in which the failure of one promise doesn’t matter, and the rest would resolve. To achieve that, the new JavaScript ES11 unpacks Promise.allSettled.
promise_1 = Promise.resolve('hi')
promise_2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'world'))

Promise.allSettled([promise_1, promise_2])
    .then(([promise_1_result, promise_2_result]) => {
        console.log(promise_1_result) 
        console.log(promise_2_result) 
    })