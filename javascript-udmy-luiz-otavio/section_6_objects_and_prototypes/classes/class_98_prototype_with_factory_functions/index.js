// when I compose an object with several other objects I am composing or mixing.

const speak = {
    personIsSpeaks () {
        console.log(`${this.name} is speaking!`)
    }
};

const eat = {
    personIsEating () {
        console.log(`${this.name} is eating!`)
    }
};

const drink = {
    personIsDrinking () {
        console.log(`${this.name} is drinking!`)
    }
};

// const prototypePerson = {...speak, ...eat, ...drink};
const prototypePerson = Object.assign({}, drink, eat, speak);

function person (name, fullname) {
    return Object.create(prototypePerson, {
        name: {value: name},
        fullname: {value: fullname},
    })
}

const p1 = person('Daniel', 'Amorim');
p1.personIsDrinking();

function anotherPerson (name, fullname) {
    return Object.create(prototypePerson, {
        name: {value: name},
        fullname: {value: fullname},
    })
}

const ap1 = anotherPerson('Karina', 'Amorim');
ap1.personIsDrinking();

// herige

// function person (name, fullname) {
//     const prototypePerson = {
//         personIsSpeaks () {
//             console.log(`${name} is speaking!`)
//         },
//         personIsEating () {
//             console.log(`${name} is eating!`)
//         },
//         personIsDrinking () {
//             console.log(`${name} is drinking!`)
//         }
//     };

//     return Object.create(prototypePerson, {
//         name: {value: name},
//         fullname: {value: fullname},
//     })
// }

// const p1 = person('Daniel', 'Amorim');
// p1.personIsDrinking();