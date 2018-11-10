// Завдання 1

let buttons = document.querySelectorAll(".close");
let message = document.querySelectorAll(".message");

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener("click", function () {
        message[i].setAttribute("hidden", true);
    })
};

// Завдання 2

let carousel = document.getElementById('carusel');
let list = carusel.querySelector('ul');
let listElems = carusel.querySelectorAll('li');

let position = 0;
let width = 100; 
let count = 4; 

carusel.querySelector(".prev").addEventListener("click", function() {
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
});

carusel.querySelector(".next").addEventListener("click", function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
});
