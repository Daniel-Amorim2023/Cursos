// constructor function
function product (name, price, stock) {
    this.name = name;
    this.price = price;

    let value = stock;
    Object.defineProperty(this, 'stock', {
        enumerable: true, // show the kay
        configurable: true, // setting
        get: function () {
            return value
        },
        set: function (value) {
            if (typeof value !== 'number') {
                console.log(stock)
                throw new TypeError('its not a number');
            }
        }
    });
}

const p1 = new product('Arroz', 32.2, 'ola');
console.log(p1.stock);

console.log(Object.keys(p1));
