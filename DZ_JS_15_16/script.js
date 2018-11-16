let but = document.createElement("input");

function showHTML() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    let zag = document.createElement("h1");
    zag.innerHTML = "Натисніть на кнопку нижче";
    document.body.appendChild(zag);

    but.setAttribute("type", "button");
    but.setAttribute("value", "Натисніть, щоб показати форму");
    document.body.appendChild(but);
}

function showBlok() {
    let blok = document.createElement("div");
    blok.style.width = "100%";
    blok.style.height = "100%";
    blok.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    blok.style.zIndex = "1000";
    blok.style.position = "fixed";
    blok.style.left = "0";
    blok.style.top = "0";
    blok.id = "blok";
    document.body.appendChild(blok);
}

function hideBlok() {
    let blok = document.getElementById("blok")
    document.body.removeChild(blok);
}

function output(value) {
    alert("Ви ввели: " + value);
}

function showPrompt(text, callback) {
    let container = document.createElement("div");
    let form = document.createElement("form");
    let divText = document.createElement("div");

    showBlok();
    showForm();
    container.style.display = "flex";
    divText.innerHTML = text;
    form.elements.text.value = "";
    form.elements.text.focus();

    function showForm() {
        container.style.display = "none";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.position = "fixed";
        container.style.left = "0";
        container.style.top = "0";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.zIndex = "2000";
        document.body.appendChild(container);

        form.style.background = "white url(prompt.png) no-repeat left 5px";
        form.style.padding = "5px 5px 5px 60px";
        form.style.width = "200px";
        form.style.border = "1px solid black";
        form.style.textAlign = "center";
        
        form.appendChild(divText);

        let inpText = document.createElement("input");
        inpText.setAttribute("type", "text");
        inpText.setAttribute("name", "text");
        inpText.style.margin = "5px";
        form.appendChild(inpText);

        let butSubmit = document.createElement("input");
        butSubmit.setAttribute("type", "submit");
        butSubmit.setAttribute("value", "Ok");
        form.appendChild(butSubmit);

        let butCancel = document.createElement("input");
        butCancel.setAttribute("type", "button");
        butCancel.setAttribute("value", "Cancel");
        butCancel.setAttribute("name", "cancel");
        butCancel.style.marginLeft = "5px"
        form.appendChild(butCancel);

        container.appendChild(form);
    }

    function complete(value) {
        hideBlok();
        container.style.display = "none";
        callback(value);
    }

    form.onsubmit = function () {
        let value = form.elements.text.value;
        if (value === "") {
            return false;
        }
        complete(value);
        return false;
    }

    form.elements.cancel.addEventListener("click", function () {
        complete(null);
    });

    document.onkeydown = function (e) {
        if (e.keyCode == 27) {
            complete(null);
        }
    };

    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];

    lastElem.onkeydown = function (e) {
        if (e.keyCode == 9 && !e.shiftKey) {
           firstElem.focus();
           return false;
        }
    };

    firstElem.onkeydown = function (e) {
        if (e.keyCode == 9 && e.shiftKey) {
           lastElem.focus();
           return false;
        }
    };
}

showHTML();
but.addEventListener("click", function () {
    showPrompt("Введіть що-небудь <br> ...розумне:)", output);
});
