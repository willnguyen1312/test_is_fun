/* eslint-disable */

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
}



async function hello() {

    // add1(10).then(v => {
    //     console.log(v); // prints 60 after 2 seconds.
    // });

    const value = await add1(10);

    if (value) {
        console.log(value);
        return true;
    }
    add1(10).then(v => {
        console.log(v); // prints 60 after 2 seconds.
    });
}

hello();

console.log('hello');
// async function add2(x) {
//     var a = await resolveAfter2Seconds(20);
//     var b = await resolveAfter2Seconds(30);
//     return x + a + b;
// }

// add2(10).then(v => {
//     console.log(v); // prints 60 after 4 seconds.
// });
