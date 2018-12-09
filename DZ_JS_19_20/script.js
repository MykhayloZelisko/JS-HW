let inputText = document.getElementById("inputText");
let addText = document.getElementById("add");
let container = document.querySelector("#container");
let list = container.children;
let dragSrcEl = null;

document.body.children[1].setAttribute("hidden", "true");

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
        document.body.children[1].removeAttribute("hidden");
    } else {
        inputText.removeAttribute("disabled");
        document.body.children[1].setAttribute("hidden", "true");
    }
}

function createItem() {
    let item = document.createElement("div");
    item.className = "items";
    item.draggable = "true";
    
    let check = document.createElement("input");
    check.className = "checkbox";
    check.setAttribute("type", "checkbox");
    
    let p = document.createElement("p");
    
    let iconDel = document.createElement("i");
    iconDel.className = "del material-icons";
    iconDel.innerHTML = "delete";
    
    let label = document.createElement("label");
    label.appendChild(check);
    label.appendChild(p);
    
    item.appendChild(label);
    item.appendChild(iconDel);

    return item;
}

function addItem() {
    let item = createItem();
    let p = item.children[0].children[1];
    
    p.innerHTML = inputText.value;
    inputText.value = "";
    addText.setAttribute("disabled", "disabled");
    
    container.appendChild(item);
    
    validInputText();
    initEvents(item);
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

function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    
    e.dataTransfer.dropEffect = "move";
}

function handleDragEnter(e) {

}

function handleDragLeave(e) {

}

function handleDrop(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    
    if ((dragSrcEl !== this) && (dragSrcEl !== null)) {
        let newItem = createItem();
        newItem.innerHTML = e.dataTransfer.getData("text/html");
        container.insertBefore(newItem, this);
        container.removeChild(dragSrcEl);
    }
    
    return false;
}

function handleDragEnd(e) {

}

function initEvents(e) {
        e.addEventListener("dragstart", handleDragStart, true); 
        e.addEventListener("dragenter", handleDragEnter, false);
        e.addEventListener("dragover", handleDragOver, false);
        e.addEventListener("dragleave", handleDragLeave, false);
        e.addEventListener("drop", handleDrop, false);
        e.addEventListener("dragend", handleDragEnd, false);
}
