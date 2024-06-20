function main() {
    // const time1 = returnHour();
    // const displaysTime = displaysHour(time1);
    const timer = setInterval(function () {console.log(returnHour())}, 1000);

    setTimeout(function () {clearInterval(timer)}, 3000);
    setTimeout(function () {console.log('Olá mundo!')}, 1000);
}

main();

// This is a function that returns a time.
function returnHour () {
    const time = new Date();
    return time.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}



// ---------------------------------------------------

// This code must be replaced by anonymous function

// // This is a function that displays a time
// function displaysHour () {
//     console.log(returnHour());
// } 