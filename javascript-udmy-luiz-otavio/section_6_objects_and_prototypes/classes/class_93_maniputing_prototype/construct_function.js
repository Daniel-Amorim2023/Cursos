function Product (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percentage) {
    this.price = this.price - (percentage * this.price) / 100;
};

Product.prototype.increase = function (percentage) {
    this.price = this.price + (percentage * this.price) / 100;
};

const p2 = {
    name: 'Bag',
    price: 50
}

// Object.setPrototypeOf(p2, Product.prototype);

// p2.discount(15);
// const p1 = new Product('shirt', 20);
// p1.discount(20);
// console.log(p1.price);
// console.log(p2.price);

// const p3 = Object.create(Object.prototype);
// console.log(p3);

// const p3 = Object.create(Product.prototype);
// p3.name = 'pen';
// p3.price = 5;
// p3.discount(10);

// console.log(p3.price);

const p3 = Object.create(Product.prototype, , {
    property: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 'value'
    }
})

console.log(p3)