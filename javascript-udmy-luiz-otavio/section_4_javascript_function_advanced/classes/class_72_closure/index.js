// closure is the ability he has to remenber his lexicol scope

function returnsFunction (name) {
    return function () {
            return name;
        } 
}

const f1 = returnsFunction('Daniel');
const f2 = returnsFunction('Karina');
console.dir(f1);
console.log(f1(), f2());
