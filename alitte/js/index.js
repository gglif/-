let left = document.querySelector(".left")
let right = document.querySelector(".right")
let min = document.querySelectorAll(".min")
let images = document.querySelector(".images")
let index = 0
min[index].classList.add('so-min');
let time
// let names = document.getElementById("called")
// const id = JSON.parse(localStorage.getItem('账户')) || [];
// console.log(id.name);
// names.innerHTML = `${id.name}`;

function position() {
    images.style.left = (index * -100) + "%"
    min[index].classList.add('so-min');
}
function add() {
    if (index >= min.length - 1) {
        index = 0
    } else {
        index++
    }
}
function desc() {
    if (index < 1) {
        index = min.length - 1
    } else {
        index--
    }
}

function timer() {
    time = setInterval(() => {
        min[index].classList.remove('so-min');
        index++
        desc()
        add()
        min[index].classList.add('so-min');
        position()
    }, 5000)
}

left.addEventListener("click", () => {
    desc()
    position()
    clearInterval(time)
    timer()
})

right.addEventListener("click", () => {
    add()
    position()
    clearInterval(time)
    timer()
})

for (let i = 0; i < min.length; i++) {
    min[i].addEventListener("click", () => {
        min[index].classList.remove('so-min');
        index = i
        position()
        clearInterval(time)
        timer()
    })
}

timer()

function goTo3() {
    window.location.href = "../detailPage/putaoyoulv.html?data=" + 3;
}
function goTo6() {
    window.location.href = "../detailPage/hongcha.html?data=" + 6;
}
function goTo7() {
    window.location.href = "../detailPage/yangleduo.html?data=" + 7;
}

// function sb() {
//     let id = JSON.parse(localStorage.getItem('账户'));

// }