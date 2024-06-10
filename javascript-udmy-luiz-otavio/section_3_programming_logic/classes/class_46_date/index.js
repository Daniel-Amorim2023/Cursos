// To learn more about Date, visit the website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;

// Ground zero
let data = new Date(0); // wed(wednesday) Dec(December) 31 1969 21:00:00
console.log(data.toString());

// From ground zero
const outraData = new Date(0 + tresHoras);
console.log(outraData.toString());

// From ground zero
const novaData = new Date(0 + tresHoras + umDia);
console.log(novaData.toString());

//  **** Other way

const outraManeira = new Date(1999,   3,    22,  20,    22,    26,        500);
//                            year/ month/ day/ hour/ minuto/ second/ millisecond
console.log(outraManeira.toString()); 
//  Note: ** month in JavaScript goes from 0 to 11 becouse 3 is april.
//        ** Millisecond goes from 0 to 999.
//        ** Second goes from 0 to 59.
//        ** .....
//        ** It's important to spend two arguments or more, becouse the date function will understand millisecond.
const dataNova = new Date('1999-04-22T22:20:11.200');
//                         year-mo-day-h: m: s. ms
//  Note: ** It's important to use the letter 'T' between date and hours, when to use the millesecond. 
console.log(dataNova.toString());
console.log('Day: ', dataNova.getDate());
console.log('Month: ', dataNova.getMonth() + 1);
console.log('Year: ', dataNova.getFullYear());
console.log('Hour: ', dataNova.getHours());
console.log('Minute: ', dataNova.getMinutes());
console.log('Second: ', dataNova.getSeconds());
console.log('Millesecond: ', dataNova.getMilliseconds());
console.log('Day of the week: ', dataNova.getDay() + 1); // 0 is sundays and 6 is saturday

console.log(Date.now())

const dataAgora = new Date(1717837333392); 
//  Note: ** The number 1717837333392 is milleseconds from Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)
console.log(dataAgora.toString())