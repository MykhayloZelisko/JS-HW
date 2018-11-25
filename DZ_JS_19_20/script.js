let inputText = document.getElementById("inputText");
let addText = document.getElementById("add");
let container = document.querySelector("#container");
let list = container.children;

let cols = new Array;

function validAdd() {
    if ((inputText.value === "") || (list.length === 10)) {
        addText.setAttribute("disabled", "disabled");
    } else {
        addText.removeAttribute("disabled");
    };
}

function validInputText() {
    if (list.length === 10) {
        inputText.setAttribute("disabled", "disabled");
        document.body.children[1].style.display = "block";
    } else {
        inputText.removeAttribute("disabled");
        document.body.children[1].style.display = "none";
    }
}

function addItem() {
    let item = document.createElement("div");
    item.className = "items";
    item.setAttribute("draggable", "true");
    
    let check = document.createElement("input");
    check.className = "checkbox";
    check.setAttribute("type", "checkbox");
    
    let p = document.createElement("p");
    p.innerHTML = inputText.value;
    inputText.value = "";
    addText.setAttribute("disabled", "disabled");
    
    let iconDel = document.createElement("i");
    iconDel.className = "del material-icons";
    iconDel.innerHTML = "delete";
    
    let label = document.createElement("label");
    label.appendChild(check);
    label.appendChild(p);
    
    item.appendChild(label);
    item.appendChild(iconDel);
    container.appendChild(item);
    
    cols.push(item);
    
    validInputText();
}

function delItem() {
    let k = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].children[1] == event.target) {
            k = i;
        } 
    };
    
    if (k >= 0) {
        container.removeChild(container.children[k]);
        cols.splice(k, 1);
    }
    
    validInputText();
}

function disabledChek() {
    let k = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].children[0].children[0] == event.target) {
            k = i;
        } 
    };
    
    if (k >= 0) {
        event.target.setAttribute ("disabled", "disabled");  
    }
}

document.addEventListener("keyup", validAdd);
addText.addEventListener("click", addItem);
container.addEventListener("click", delItem);
container.addEventListener("click", disabledChek);

// - - - - - - - - - - - - - - - - drag and drop - - - - - - - - - - - - - - -

let dragSrcEl = null;

function handleDragStart(e) {
    this.classList.add("dragOpacity");
//    dragSrcEl = this;
//    e.dataTransfer.effectAllowed = "move";
//    e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    
    e.dataTransfer.dropEffect = "move";
}

function handleDragEnter(e) {
    this.classList.add("over");
}

function handleDragLeave(e) {
    this.classList.remove("over");
}

//function handleDrop(e) {
//    if(e.preventDefault) {
//        e.preventDefault();
//    }
//    
//    if (dragSrcEl !== this) {
//        dragSrcEl.innerHTML = this.innerHTML;
//        this.innerHTML = e.dataTransfer.getData("text/html");
//    }
//    
//    return false;
//}

function handleDragEnd(e) {
    cols.forEach(function(col) {
        col.classList.remove("over");
        col.classList.remove("dragOpacity");
    });
}

function initEvents() {
    cols.forEach(function(col) {
        col.addEventListener("dragstart", handleDragStart, true); 
        col.addEventListener("dragenter", handleDragEnter, false);
        col.addEventListener("dragover", handleDragOver, false);
        col.addEventListener("dragleave", handleDragLeave, false);
//        col.addEventListener("drop", handleDrop, false);
        col.addEventListener("dragend", handleDragEnd, false);
    });
}

initEvents();
