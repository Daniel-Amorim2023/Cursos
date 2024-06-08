const data = new Date();
const dayOfWeek = data.getDay()

if (dayOfWeek === 0) {
    console.log('Sunday');
} else if (dayOfWeek === 1) {
    console.log('Monday');
} else if (dayOfWeek === 2) {
    console.log('Tuesday');
} else if (dayOfWeek === 3) {
    console.log('wednesday');
} else if (dayOfWeek === 4) {
    console.log('Thursday');
} else if (dayOfWeek === 5) {
    console.log('Friday');
} else if (dayOfWeek === 6) {
    console.log('Saturday');
};