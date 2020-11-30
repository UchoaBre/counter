const date = document.querySelector("[name=date]");
const startButton = document.querySelector("#start");

startButton.addEventListener('click', event => {
    localStorage.setItem("userDate", date.value);

    if (localStorage.userDate == "") {
        alert("Você precisa definir uma data!");
    } else {
        window.location.replace("/src/pages/contador.html");
    }
});