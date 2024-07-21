// polymorphism is characterized when methods of classes that are children of the same parents behave differently.

// There is anoother polymorphism which is overload polymorphism that in Javascript is not possible, but we can do superscript polymorphism 

function Account (agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.toWithdraw = function (value) {
    if (value > this.balance) {
        console.log(`insufficient balance: ${this.balance}`);
        return;
    }

    this.balance -= value;
    this.seeBalance();
}
Account.prototype.deposit = function (value) {
    this.balance += value;
    this.seeBalance();
} 
Account.prototype.seeBalance = function () {
    console.log(`AG/AC: ${this.agency} / ${this.account} |\nSaldo: R$${this.balance.toFixed(2)}`);
} 

function CurrentAccount (agency, account, balance, limit) {
    Account.call(this, agency, account, balance);
    this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.toWithdraw = function (value) {
    if (value > this.balance + this.limit) {
        console.log(`insufficient balance: ${this.balance + this.limit}`);
        return;
    }

    this.balance -= value;
    this.seeBalance();
}

function SavingsAccount (agency, account, balance) {
    Account.call(this, agency, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

const ca = new CurrentAccount(190, 2545, 0, 50);
ca.seeBalance();
ca.deposit(150);
ca.toWithdraw(125);
ca.toWithdraw(100);

console.log();

const sa = new SavingsAccount(180, 1453, 0)

sa.seeBalance();
sa.deposit(150);
sa.toWithdraw(125);
sa.toWithdraw(100);
