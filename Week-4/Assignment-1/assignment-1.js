//A.   Complete the function below to show a delayed result in the console.
function delayedResult(n1, n2, delayTime, callback) {
    let result = n1 + n2;
    setTimeout(() => console.log(result), delayTime);
}
delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

//B.   To implement delayedResult again using promise this time. It should look like:
function delayedResultPromise(n1, n2, delayTime) {
    let result = n1 + n2;
    return new Promise((resolve, reject) => {
        if (delayTime > 0) {
            setTimeout(() => {
                resolve(result);
            }, delayTime);
        } else {
            reject();
        }
    });
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

//C.  To implement it using async/await this time.
function delayedResultPromise(n1, n2, delayTime) {
    let result = n1 + n2;
    return new Promise((resolve, reject) => {
        if (delayTime > 0) {
            setTimeout(() => {
                resolve(result);
            }, delayTime);
        } else {
            reject();
        }
    });
}

async function main(n1, n2, delayTime) {
    let result = await delayedResultPromise(n1, n2, delayTime);
    console.log(result);
}

main(3, 6, 3000);
