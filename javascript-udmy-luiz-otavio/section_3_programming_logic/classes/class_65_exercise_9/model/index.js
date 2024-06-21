let seconds = 0;
let timerSeconds;

function main () {
    const timer = document.querySelector('#timer');
    // const start = document.querySelector('.start');
    // const pause = document.querySelector('.pause');
    // const reset = document.querySelector('.reset');

    document.addEventListener('click', function (e) {
        const event = e.target;
        
        if (event.classList.contains('start') ) {
            timer.classList.remove('pausing');
            pause.classList.remove('pausing');
            clearInterval(timerSeconds);
            startTimer();
        }
        if (event.classList.contains('pause')) {
            timer.classList.add('pausing');
            pause.classList.add('pausing');
            clearInterval(timerSeconds);
        }
        if (event.classList.contains('reset')) {
            clearInterval(timerSeconds);
            timer.innerHTML = '00:00:00';
            timer.classList.remove('pausing');
            pause.classList.remove('pausing');
        }
    })


//     start.addEventListener('click', function () {
//         pause.classList.remove('pausing')
//         timer.classList.remove('pausing')
//         clearInterval(timerSeconds);
//         startTimer()
//     })

//     pause.addEventListener('click', function () {
//         timer.classList.add('pausing')
//         pause.classList.add('pausing')
//         clearInterval(timerSeconds);
//     })

//     reset.addEventListener('click', function () {
//         pause.classList.remove('pausing')
//         timer.classList.remove('pausing')
//         clearInterval(timerSeconds);
//         timer.innerHTML = '00:00:00';
//         seconds = 0;
//     })
 }

main();

function startTimer () {
    timerSeconds = setInterval(function () {
        seconds++;
        timer.innerHTML = createTimer(seconds);
    }, 1000);
}

// This function returns a time
function createTimer (second) {
    const newsecond = new Date(second * 1000);
    return newsecond.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'GMT'
    })
}
