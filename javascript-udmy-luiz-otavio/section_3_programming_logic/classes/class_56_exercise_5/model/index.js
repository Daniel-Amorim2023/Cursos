function main () {
    const paragraph = document.querySelector('#paragraph');
    const ps = paragraph.querySelectorAll('p');
    const styleBody = getComputedStyle(document.body);
    const backgroundColorBody = styleBody.backgroundImage;
    
    console.log(backgroundColorBody)

    for (let p of ps) {
        p.style.backgroundImage = backgroundColorBody;
        p.style.color = 'white';
        p.style.padding = '10px'
        p.style.borderRadius = '5px'
        p.style.textAlign = 'center'
        p.style.fontFamily = 'Arial'
    }
}

main();