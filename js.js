window.addEventListener("load", intionlize);
const levels = {
    easy: 30,
    meduim: 20,
    hard: 10,
};

let score = 0;
let isplaying;

const wordInput = document.getElementById("word-input");
const currentword = document.getElementById("current-word");
const scoredisplay = document.getElementById("score");
const timedisplay = document.getElementById("time");
const message = document.getElementById("message");
const second = document.getElementById("seconds");
const Btns = document.querySelectorAll("button");
let words = [
    "media",
    "medical",
    "meet",
    "meeting",
    "member",
    "memory",
    "hi",
    "method",
    "mind",
    "my",
    "js",
    "hero",
    "dev",
    "new",
    "aya",
];

Btns.forEach(function(ele) {
    ele.addEventListener("click", (a) => {
        if (a.currentTarget.value == 5) {
            time = 5;
            second.innerHTML = time;
        } else if (a.currentTarget.value == 10) {
            time = 10;
            second.innerHTML = time;
        } else if (a.currentTarget.value == 15) {
            time = 15;
            second.innerHTML = time;
        }
    });
    time = 20;
    second.innerHTML = time;
});

function matchwords() {
    if (wordInput.value === currentword.innerHTML) {
        message.innerHTML = "good";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

function check() {
    if (matchwords()) {
        isplaying = true;
        wordInput.value = "";
        showword(words);
        score++;
    }
    scoredisplay.innerHTML = score;
}

function showword(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentword.innerHTML = words[randIndex];
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isplaying = false;
    }
    timedisplay.innerHTML = time;
}

function checkstatus() {
    if (!isplaying && time === 0) {
        message.innerHTML = "Game over!!";
        wordInput.disabled = true;
    }
}

function intionlize() {
    showword(words);
    wordInput.addEventListener("input", check);
    setInterval(countdown, 1000);
    setInterval(checkstatus, 1000);
}