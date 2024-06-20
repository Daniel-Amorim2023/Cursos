function main () {
    try {
        const date1 = new Date('01-01-1970 12:58:12');
        console.log(returnHour(date1));
        console.log(returnHour());
    } catch (e) {
        console.log('Error happened.')
    } finally {
        console.log('Treating error')
    }
}

main();

function returnHour(date) {
    if (date && !(date instanceof Date)) throw new TypeError('Waiting instance of Date');
    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}




// try {
//     console.log(error);
//     console.log('tente isso.');
// } catch(e) {
//     console.log('tratando o error');
// } finally {
//     console.log('finalizando');
// }

// console.log(e);