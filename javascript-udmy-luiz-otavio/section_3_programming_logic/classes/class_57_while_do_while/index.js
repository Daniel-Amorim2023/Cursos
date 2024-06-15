function random(min, max) {
    let r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

function main () {
    const min = 1;
    const max = 50;
    let rand = random(min, max);
    let counter = 1;

    // while (rand != 10) {
    //     rand = random(min, max);
    //     console.log(counter, rand);
    //     counter++;
    // }

    do {
        rand = random(min, max);
        console.log(counter, rand);
        counter++;
    } while (rand != 10);
}

main();

// The difference between "while" and "do while" is that while checks condition first then executes the code, whereas 'do while' executes the code at least once and then checks the condition.