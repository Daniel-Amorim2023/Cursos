// object.values
// object.entries
// object.getOwnPropertyDescriptor(Object, 'property')
// object.assign(des, any)
// ...spread

// object.keys( returns the keys)
// object.freeze(freezes the object)
// object.defineProperties(defines several properties)
// object.defineProperty(Defines property)



const product = {name: 'mug', price: 23.0}
const p1 = product;

// p1.name = 'pen';
// console.log(product, 'p1');

// const p2 = {...product}
// p2.name = 'glass'
// console.log(product, 'p2');

// const p3 = {name: product.name, price: product.price};
// console.log(p3, 'p3')

// const p4 = {...product, id: 23};
// console.log(p4, 'p4')

// const p5 = Object.assign({}, product, {id: 45});
// console.log(p5, 'p5')

// console.log(p1);
// console.log(Object.getOwnPropertyDescriptor(p1, 'name'));
// Object.defineProperty(p1, 'name', {
//     writable: false,
//     configurable: false
// })

// p1.name = 'shirt';
// delete p1.name;
// console.log(p1);

console.log(Object.values(p1));
console.log(Object.keys(p1));
console.log(Object.entries(p1));

const arraysKeys = Object.values(p1);
console.log(arraysKeys);