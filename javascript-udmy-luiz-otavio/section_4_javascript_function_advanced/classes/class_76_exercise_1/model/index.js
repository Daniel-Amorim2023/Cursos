function creteCalculator () {
    return {
        display: document.querySelector('.display'),


        start() {
            this.clickButtons();
            this.touchEnter();
        },

        clearCharacter () {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay () {
            this.display.value = ''
        },

        executeAccount () {
            let account = this.display.value;
            try {
                account = eval(account);
// eval is a command that requeres attention due to malicious code 

                if (!account) {
                    alert('Invalid account');
                    return;
                    };
                this.display.value = account; 
            } catch (e) {
                alert('invalid account!');
                return;
            }
        },

        touchEnter () {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.executeAccount();
                }
            })
        },

        clickButtons () {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                };

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-dell')) {
                    this.clearCharacter();
                }

                if (el.classList.contains('btn-equal')) {
                    this.executeAccount()
                }
            })//,bind(this)
        },

        btnToDisplay (text) {
            this.display.value += text;
        }
    }
}

const calculator = creteCalculator();
calculator.start()