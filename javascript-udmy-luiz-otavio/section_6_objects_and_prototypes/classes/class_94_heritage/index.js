// product -> increase and discount
// shirt -> color || mug -> material

function Product (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percentage) {
    this.price = this.price - (this.price * percentage) / 100;
};

Product.prototype.increase = function (percentage) {
    this.price = this.price + (this.price * percentage) / 100;
};

function Shirt (name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

function Mug (name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material;
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function () {
            return stock;
        },
        set: function (value) {
            if (typeof value !== 'number') return;
            stock = value;
        }
    })
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constrctor = Mug;

// const shir1 = new Shirt('shirt1', 20, 'red');
const mug1 = new Mug('Gold Mug', 35, 'plastic', 5);
mug1.stock = 100;
console.log(mug1);




