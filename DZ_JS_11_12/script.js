// Завдання 1

let tab = document.createElement("table");

for (let i = 0; i < 5; i++) {
    let row = tab.insertRow();
    for (let j = 0; j < 5; j++) {
        row.insertCell();
    }
};

tab.style.borderCollapse = "collapse";
document.body.appendChild(tab);

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        tab.rows[i].cells[j].innerHTML = `${i+1}:${j+1}`;
        tab.rows[i].cells[j].style.border = "solid 1px";
        tab.rows[i].cells[j].style.padding = "10px";
    }
};

for (let i = 0; i < 5; i++) {
    tab.rows[i].cells[i].style.backgroundColor = "red";
}

// Завдання 2

let list = document.createElement("ul");
let n = 1;

document.body.appendChild(list);

for (let i = 0; i < 5; i++) {
    let ulList = document.createElement("li");
    list.appendChild(ulList);
    ulList.innerHTML = `text ${n}`;
    n++;
}

let list1 = list.cloneNode(false);
list.childNodes[2].appendChild(list1);

for (let i = 0; i < 4; i++) {
    let ulList = document.createElement("li");
    list1.appendChild(ulList);
    ulList.innerHTML = `text ${n}`;
    n++;
}

let list2 = list.cloneNode(false);
list1.childNodes[2].appendChild(list2);

for (let i = 0; i < 2; i++) {
    let ulList = document.createElement("li");
    list2.appendChild(ulList);
    ulList.innerHTML = `text ${n}`;
    n++;
}

let list3 = list.cloneNode(false);
list.childNodes[4].appendChild(list3);

for (let i = 0; i < 3; i++) {
    let ulList = document.createElement("li");
    list3.appendChild(ulList);
    ulList.innerHTML = `text ${n}`;
    n++;
}

let listOfUl = list.getElementsByTagName("li");
for (i = 0; i < listOfUl.length; i++) {
    console.log(listOfUl[i].firstChild);
    console.log("Кількість вкадених LI - " + listOfUl[i].getElementsByTagName("li").length);
}




