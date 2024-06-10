function getDays () {
    const date = new Date();
    const day = date.getDay()
    switch (day) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            return '';        
    }
}

function getMonths () {
    const date = new Date();
    const month = date.getMonth();
    switch (month) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Feveiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return '';
    }              
}

function main() {
    message = document.querySelector("#hours");
    const dateHour = new Date();
    message.innerHTML = `<strong>${getDays()}</strong>, ${dateHour.getDate()} de ${getMonths()} de ${dateHour.getFullYear()}, ${dateHour.getHours()}:${dateHour.getMinutes()}`;
}

main();