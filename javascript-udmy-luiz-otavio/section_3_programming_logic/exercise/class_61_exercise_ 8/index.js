function main () {
    console.log(category(0));
    console.log('');
    for (let i = 0; i < 100; i++) {
        console.log(i, category(i));
    }
}

main()

function category (num) {
    if (typeof(num) !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'Fizz and Buzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}