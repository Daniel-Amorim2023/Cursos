function product (name, price, stock) {
    // this.name = name;
    // this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true, // show the kay
        value: stock,  // show the value
        writable: false, // cannot change
        configurable: false // setting
    });

    Object.defineProperties(this, {
        name:{
            enumerable: true, // show the kay
            value: name,  // show the value
            writable: false, // cannot change
            configurable: false // setting
        },
        price:{
            enumerable: true, // show the kay
            value: price,  // show the value
            writable: false, // cannot change
            configurable: false // setting
        }}, )
}

const p1 = new product('Arroz', 32.2, 3);
p1.stock = 4
console.log(p1);

console.log(Object.keys(p1));