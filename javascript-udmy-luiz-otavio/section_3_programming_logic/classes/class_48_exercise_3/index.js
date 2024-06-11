// function getDays () {
//     const date = new Date();
//     const day = date.getDay()
//     switch (day) {
//         case 0:
//             return 'Domingo';
//         case 1:
//             return 'Segunda-feira';
//         case 2:
//             return 'Terça-feira';
//         case 3:
//             return 'Quarta-feira';
//         case 4:
//             return 'Quinta-feira';
//         case 5:
//             return 'Sexta-feira';
//         case 6:
//             return 'Sábado';
//         default:
//             return '';        
//     }
// }

// Alternative solution:

function getDays () {
    const date = new Date();
    const day = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return day[date.getDay()];
}

// function getMonths () {
//     const date = new Date();
//     const month = date.getMonth();
//     switch (month) {
//         case 0:
//             return 'Janeiro';
//         case 1:
//             return 'Feveiro';
//         case 2:
//             return 'Março';
//         case 3:
//             return 'Abril';
//         case 4:
//             return 'Maio';
//         case 5:
//             return 'Junho';
//         case 6:
//             return 'Julho';
//         case 7:
//             return 'Agosto';
//         case 8:
//             return 'Setembro';
//         case 9:
//             return 'Outubro';
//         case 10:
//             return 'Novembro';
//         case 11:
//             return 'Dezembro';
//         default:
//             return '';
//     }              
// }

// Alternative solution:

function getMonths () {
    const date = new Date();
    const month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "sgosto", "setembro", "outubro", "novembro", "dezembro"];
    return month[date.getMonth()]            
}

function zeroOfTheLeft (num) {
    return num > 9 ? num : `0${num}`
}

function main() {
    message = document.querySelector("#hours p");
    const dateHour = new Date();
    message.innerHTML = `<strong>${getDays()}</strong>, ${dateHour.getDate()} de ${getMonths()} de ${dateHour.getFullYear()}, ${zeroOfTheLeft(dateHour.getHours())}:${zeroOfTheLeft(dateHour.getMinutes())}.`;
}

// function main() {
//     message = document.querySelector("#hours p");
//     const dateHour = new Date();
//     message.innerHTML = dateHour.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'full'});
// }

main();