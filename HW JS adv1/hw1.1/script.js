// Бонусні завдання

// Завдання 1

let a1 = 1, a2 = 1;
console.log(a1);
console.log(a2);
for (let i = 3; i <= 11; i++) {
    a2 = a1 + a2;
    a1 = a2 - a1;
    console.log(a2);
}

// Завдання 2

let k = 0;
for (let i = 1000; i <= 999999; i++) {
	let i1 = parseInt(i / 100000) % 10;
	let i2 = parseInt(i / 10000) % 10;
	let i3 = parseInt(i / 1000) % 10;
	let i4 = parseInt(i / 100) % 10;
	let i5 = parseInt(i / 10) % 10;
    let i6 = i % 10;
    if (i1 + i2 + i3 == i4 + i5 + i6) {
        k += 1;
    }
} 
console.log(k);

// Завдання 3

let n = 0;
for (let i = 0; i <=23; i++) {
   if (i % 10 * 10 + parseInt(i / 10) <= 59) {
       n += 1;
   }
}
console.log(n);

// Завдання 4

let m = 0;
for (let i = 1; i <= 99999; i++) {
	let i1 = parseInt(i / 10000) % 10;
	let i2 = parseInt(i / 1000) % 10;
	let i3 = parseInt(i / 100) % 10;
	let i4 = parseInt(i / 10) % 10;
    let i5 = i % 10;
    if (i1 == 4 || i2 == 4 || i3 == 4 || i4 == 4 || i5 == 4 || i1 == 1 && i2 == 3 || i2 == 1 && i3 == 3 || i3 == 1 && i4 == 3 || i4 == 1 && i5 == 3) {
        m += 1;
    }
} 
console.log(m);