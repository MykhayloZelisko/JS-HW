// Завдання 1

//function factorial(n) {
//    if (n > 1) {
//        return n * factorial(n - 1)
//    } else if (n === 1 || n === 0)
//        return 1;
//}
//alert( factorial(10) ); 

// Завдання 2

//function fib(n) {
//    if (n > 2) {
//        return fib(n - 1) + fib(n - 2);
//    } else if (n === 1 || n === 2) {
//        return 1;
//    }
//}
//alert( fib(10) ); 

// Завдання 3

var a = +prompt("a?", "");
switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3")
        break;
}