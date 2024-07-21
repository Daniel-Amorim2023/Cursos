const object1 = {
    ob1: 'ob1'
}

const object2 = {
    ob2: 'ob2'
}

const object3 = new Object();
object3.ob3 = 'ob2'

Object.setPrototypeOf(object2, object1);
Object.setPrototypeOf(object3, object2);

// it's recommend to use Object.getPrototypeOf(object1) instead of __proto__ 