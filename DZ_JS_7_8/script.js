// Завдання 1 string

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let s = "Вася";
console.log( ucFirst(s) );

s = ``;
console.log( ucFirst(s) );

// Завдання 2 string

function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    } else {
        return str.slice(0, maxlength - 3) + `...`;
    }
}

s = `Створіть функцію truncate (str, maxlength), яка перевіряє довжину рядка`;
console.log( truncate(s, 20) );

s = `Короткий рядок`
console.log( truncate(s, 20) );

// Завдання 1 array

function camelize(str) {
    let arr = str.split(`-`);
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(``);
}

s = `напишіть-функцію,-яка-перетворює-такі-рядки`;
console.log( camelize(s) );

// Завдання 2 array

function removeClass(obj, cls) {
    let arr = obj.className.split(` `);
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(` `);
    return obj;
}

let obj = {
    className: `дуже дуже дуже дуже довгий рядок`
}

let obj1 = {
    className: `дуже дуже дуже дуже довгий рядок`
}

console.log( removeClass(obj, `дуже`) );
console.log( removeClass(obj1, `короткий`) );
