const data = new Date();
const daysOfWeek = data.getDay()

if (daysOfWeek === 0) {
    console.log('Sunday');
} else if (daysOfWeek === 1) {
    console.log('Monday');
} else if (daysOfWeek === 2) {
    console.log('Tuesday');
} else if (daysOfWeek === 3) {
    console.log('wednesday');
} else if (daysOfWeek === 4) {
    console.log('Thursday');
} else if (daysOfWeek === 5) {
    console.log('Friday');
} else if (daysOfWeek === 6) {
    console.log('Saturday');
};

console.log("Situação 1 \n")
// simpliflying with switch case.

switch (daysOfWeek) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('#')
}

console.log("Situação 2 \n")

// reusing with function

function getDayOfWeek (day) { 
    // let dayOfWeek = day;
    switch (day) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('#')}
}

getDayOfWeek (daysOfWeek);
console.log("Situação 3")                                                                                                                                                                                   