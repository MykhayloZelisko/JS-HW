let users = [
    {
        login: "user",
        password: "aaa"
	},
    {
        login: "user2",
        password: "bbb"
	},
    {
        login: "user3",
        password: "ccc"
	},
    {
        login: "user4",
        password: "ddd"
	}
]

localStorage.setItem("users", JSON.stringify(users));

let form = document.getElementById("form");
let but = document.getElementById("but");
let inp1 = document.getElementById("id1");
let inp2 = document.getElementById("id2");
form.addEventListener("submit", function () {
    let t = true;
    let arr = JSON.parse(localStorage.getItem("users"));
    arr.find(x => {
        if (x.login == inp1.value && x.password == inp2.value) {
            alert("Ласкаво просимо, " + x.login);
            t = false;
        }
    });
    if (t) alert("Невірний логін або пароль");
});

let reg = document.getElementById("reg");
let formreg = document.getElementById("formreg");
let cancel = document.getElementById("cancel");
let butreg = document.getElementById("butreg");
let inp3 = document.getElementById("id3");
let inp4 = document.getElementById("id4");

reg.addEventListener("click", function () {
    formreg.removeAttribute("hidden");
});

formreg.addEventListener("click", function (event) {
    if (event.target == cancel) {
        formreg.setAttribute("hidden", "");
    }
});

formreg.addEventListener("submit", function (event) {
    if (event.target == butreg) {
        if (inp3.value === "" || inp4.value === "") {
            alert("Одне з полів не заповнене")
        } else {
            let arr = JSON.parse(localStorage.getItem("users"));
            arr[arr.length].login = inp3.value;
            arr[arr.length].password = inp4.value;
            localStorage.setItem("users", JSON.stringify(arr))
        }
    }
});