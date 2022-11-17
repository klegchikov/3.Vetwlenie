const button = document.querySelector("button");
const input = document.querySelector(".age");

button.onclick = function () {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log("welcome")
    }
    else if (num > 60) {
        console.log("Ты точно сюда")
    }
    else {
        console.log("Ты не пройдед!")
    }
}
