function calculator () {
    this.display = document.querySelector('.display-input');
    
    // Start method
    this.start = () => {
        this.clickButtons();
        this.enterPress();
    }
    
    // All event methods
    this.clickButtons = () => {
        document.addEventListener ('click', (e) => {
            const el = e.target;
            if (el.classList.contains('num-btn')) this.addNumDisplay(el);
            if (el.classList.contains('clear-btn')) this.clearDisplay();
            if (el.classList.contains('dell-btn')) this.delLastCharacter();
            if (el.classList.contains('equal-btn')) this.runsEqual();
        }); 
    };

    this.enterPress = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 13) this.runsEqual();
        })
    }

    // All methods
    this.addNumDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };
     
    this.clearDisplay = () => this.display.value = '';  
    this.delLastCharacter = () => this.display.value = this.display.value.slice(0, -1);

    this.runsEqual = () => {
        try {
            let account = eval(this.display.value); 

            if ((account !== 0) && !account) {
                alert('Invalid account! Try again.');
                return;
            }

            this.display.value = account;

        } catch (e) {
            alert('Invalid account! Try again');
            return
        }

    }
}


function main () {
    const cal = new calculator();
    cal.start() ;
}

main();