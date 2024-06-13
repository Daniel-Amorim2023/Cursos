function main () {
    const body = document.querySelector("#body");
    const section = document.getElementById('section');
    const title = document.querySelector('.title');
    
    const element = [
        {tag: 'p', text: 'text inside p'},
        {tag: 'div', text: 'text inside div'},
        {tag: 'footer', text: 'text inside footer'},
        {tag: 'section', text: 'text inside section'},
    ];

    const div = document.createElement('div');
    for (let i = 0; i < element.length; i++) {
        let {tag, text} = element[i];
        let tags = document.createElement(tag);
        tags.innerText = text
        div.appendChild(tags); 
    }
    section.appendChild(div)
}

main();