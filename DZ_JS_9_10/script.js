// Завдання 1

function multiplyNumeric(obj) {
    for (let key in obj) {
        if ( isFinite(obj[key]) && !isNaN( parseFloat(obj[key]) ) ) {
            obj[key] *= 2;
        }
    }
    return obj;
}

let obj = {
    name: "test",
    age: 24,
    id: 12
}
console.log( multiplyNumeric(obj) );

// Завдання 2
// Клонування нормально працює з примітивами, null, 
// об'єктами-деревами, що скаладаються з примітивів та об'єктів класів
// Array, RegExp, Date, Set, Map

function deepClone(obj) {
    if (obj === null || obj instanceof RegExp || typeof obj !== "object") {
        return obj;
    }
    
    if (obj instanceof Date) {
        let copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    
    if (obj instanceof Array) {
        let copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }
    
    if (obj instanceof Set) {
        let copy = new Set();
        for (let key of obj) {
            copy.add( deepClone(key) );
        }
        return copy;
    }
    
    if (obj instanceof Map) {
        let copy = new Map();
        for( let key of obj.keys() ) {
            copy.set( deepClone(key), deepClone( obj.get(key) ) );
        }
        return copy;
    }
    
    if (obj instanceof Object) {
        let copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepClone(obj[key]);
            }
        }
        return copy;
    }
}

let obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: [1, 2],
        },
    },
    g: {
        i: 1,
        j: 5,
    }
};

let obj2 = deepClone(obj1);
obj1.c.e.f = 222;
console.log(obj2);

let aaaaa = /1q/;
let bbbbb = deepClone(aaaaa);
aaaaa = /1/;
console.log(bbbbb);

let set2 = new Set();
set2.add({ a: 1, b: 2});
set2.add([1, 2, 3]);
set2.add([1, 2]);
let set3 = deepClone(set2);
console.log(set3);

// Завдання 3

function pluck(arr, key) {
    let a = [];
    for (let i = 0; i <= arr.length; i++) {
        for (let k in arr[i]) {
            if (k === key) {
                a.push(arr[i][k]);
            }
        }
    }
    return a;
}

let characters = [
    { "name": "barney", "age": 36 },
    { "name": "fred", "age": 40 }
];
console.log( pluck(characters, "name") );

// Завдання 4
// Для примітивів і null = 0
// Для об'єктів класів Date, RegExp, SyntaxError, ... = 0?
// Для об'єктів класів Map, Set окремий метод обчислення

function count(obj) {
    if (obj === null || obj === undefined || typeof(obj) === "string") {
        return 0;
    }
    if (obj instanceof Map || obj instanceof Set) {
        return obj.size;
    }
    return Object.keys(obj).length;
}

let a = { a: 1, b: 2};
console.log( count(a) );

let b = function () {};
console.log( count(b) );

let c = [1, 2, 3];
console.log( count(c) );

let d = [];
d[100] = 1;
console.log( count(d) );

let ff = "dscfsdfv sfsagv";
console.log( count(ff) );

let gg = 23454;
console.log( count(gg) );

let kk = {
    a: 1,
    b: 2,
    c: {
        d: 2,
        f: 4
    }
}
console.log( count(kk) );

console.log( count(null) );

let ss = /[^A-Za-z0-9_]/;
console.log( count(ss) );

let ddd = new Date(2013, 13, 1);
console.log( count(ddd) );

let sym1 = Symbol();
console.log( count(sym1) );

let myMap = new Map();
myMap.set('1', 'str1');  
myMap.set(1, 'num1');     
myMap.set(true, 'bool1');
console.log( count(myMap) );

let aa;
console.log( count(aa) );

let set1 = new Set();
set1.add(a);
set1.add(c);
set1.add(d);
console.log( count(set1) );