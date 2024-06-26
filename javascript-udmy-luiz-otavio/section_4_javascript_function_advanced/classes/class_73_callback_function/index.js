// Callback function is function that is executed when an action occurs.

function rand(min = 1000, max = 4000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num);
}

function f1 (callback) {
    setTimeout( function ()
        {console.log('f1')
        if (callback) callback();},
        rand()
    );
    
}

function f2 (callback) {
    setTimeout( function ()
        {console.log('f2')
        if (callback) callback();},
        rand()
    );
    

}

function f3 (callback) {
    setTimeout( function ()
        {console.log('f3')
        if (callback) callback();}
        ,
        rand()
    );
    

}

// f1();
// f2();
// f3();
// console.log('Last');

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Last')
//         })
//     })
// })

f1(callbackf2);

function callbackf2 () {
    f2(callbackf3);
}

function callbackf3 () {
    f3(function() {
        console.log('Last');
    })
}