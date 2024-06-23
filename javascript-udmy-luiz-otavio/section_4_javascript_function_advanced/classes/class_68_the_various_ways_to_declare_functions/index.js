// function declaration (hosting)
speaksHi()

function speaksHi () {
    console.log('Hi..')
}


// ----------------------------------------------------------------------

// first-class (functions can be as data)
const iamAData = function () {
    console.log("I'm a data");
};
iamAData();
// function runsOtherFunction (otherFuntion){
//     otherFuntion();
// }

// runsOtherFunction(iamAData);


// ----------------------------------------------------------------------
// arrow function

const imArrowFunction = () => console.log("I'm arrow function") //{
//     console.log("I'm arrow function");
// }
imArrowFunction();


// ----------------------------------------------------------------------
// functions inside objects

const obj = {
    speak() {
        console.log("I'm function in object or i'm method");
    }
}

// const obj = {
//     speak: function () {
//         console.log("I'm function in object or i'm method");
//     }
// }

obj.speak();



