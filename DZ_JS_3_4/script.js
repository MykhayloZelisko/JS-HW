// Завдання 1

//let k = 0;
//for (let i = 1; i <= 5; i++) {
//    let num = +prompt("Введіть число");
//    if (num < 0) k++;
//}
//alert(k);

// Завдання 2

//let star = +prompt("Введіть кількість зірок", "");
//let line = +prompt("Введіть 1 для горизонтального і 2 для вертикального розміщення", "");
//if (line === 1) {
//    for (let i = 1; i <= star; i++) {
//        document.write("*");
//    }
//} else if (line === 2) {
//    for (let i = 1; i <= star; i++) {
//        document.write("*" + "<br>");
//    }
//}

// Завдання 3

//let bool;
//let line = +prompt("Введіть 1 для горизонтального і 2 для вертикального розміщення зірок", "");
//if (line === 1) {
//    do {
//        document.write("*");
//        bool = confirm("Виводити ще?");
//    } while (bool);
//} else if (line === 2) {
//    do {
//        document.write("*" + "<br>");
//        bool = confirm("Виводити ще?");
//    } while (bool);
//}

// Завдання 4

let k = 0, num;
do {
    num = +prompt("Введіть число");
    k++;
} while (num >= 0);
console.log(k);
