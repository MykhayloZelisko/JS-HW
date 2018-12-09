let inputText = $("#inputText");
let list = container.children;
let dragSrcEl = null;

$("h3").hide();

function validAdd() {
    if ((inputText.value === "") || (list.length === 10)) {
        $("#add").prop("disabled", true);
    } else {
        $("#add").prop("disabled", false);
    };
}

function validInputText() {
    if (list.length === 10) {
        $("#inputText").prop("disabled", true);
        $("h3").show();
    } else {
        $("#inputText").prop("disabled", false);
        $("h3").hide();
    }
}

function addItem() {
    let text = $("#inputText").val();
    $("#container").append('<div class="items" draggable="true"><label><input class="checkbox" type="checkbox"><p>' + text + '</p></label><i class="del material-icons">delete</i></div>');
    
    inputText.val("");
    
    $("#add").prop("disabled", true);
    
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
$("#add").click(addItem);
$("#container").click(delItem);
$("#container").click(disabledChek);
$("#container").sortable({axis: "y"});