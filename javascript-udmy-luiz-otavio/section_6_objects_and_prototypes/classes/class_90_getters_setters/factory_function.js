// factory function
function product (price) {
    return {
        get price() {
            return price
        },
        set price (value) {
            price = value
        }
    }
}

const p1 = product(10);

console.log(p1);