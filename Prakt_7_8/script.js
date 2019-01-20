// Завдання 3

let arr = [];
while (true) {
    let num = prompt(`Введіть число`, ``);
    if (isFinite(num) && !isNaN(parseFloat(num))) {
        arr.push(num);
    } else {
        break;
    }
}

let s = 0;
for (i = 0; i < arr.length; i++) {
    s += arr[i];
}
console.log(arr);
console.log(s);

// Завдання 4 для ПЕРШОГО елемента, що дорівнює value

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

let a = [1, 3, -5, 3, 7, 90, 2];
console.log( find(a, 3) );
console.log( find(a, -3) );

// Завдання 4 для ВСІХ елементів, що дорівнюють value

function find1(arr, value) {
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            b.push(i);
        }
    }
    if (b.length === 0) {
        b[0] = -1;
    }
    return b;
}

console.log( find1(a, 3) );
console.log( find1(a, -3) );

// Завдання 5

function filterRange(arr, a, b) {
    let c = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            c.push(arr[i]);
        }
    }
    return c;
}

console.log( filterRange(a, 0, 10) );