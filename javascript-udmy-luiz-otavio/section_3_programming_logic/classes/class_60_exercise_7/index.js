function main () {
    console.log(isLandscape(100, 150));
}

const isLandscape = (height, width) => width > height;

// const isLandscape = (height, width) => width > height ? console.log(true) : console.log(false);


// function isLandscape (height, width) {
//     return width > height ? console.log(true) : console.log(false);
// }


// function isLandscape (height, width) {
//     if (width > height) return console.log(true);
//     return console.log(false);
// }

// function isLandscape (height, width) {
//     if (width > height) {
//         return console.log(true);
//     }
//     return console.log(false);
// }


// function isLandscape (height, width) {
//     if (width > height) {
//         return console.log(true);
//     } else {
//         return console.log(false);
//     }
// }

main ();