(function recursive (num) {
    if (num > 10) return;
    console.log(num);
    num++;
    recursive(num);
})(0);

// There are a limit to repeating the interactions of recursive functions