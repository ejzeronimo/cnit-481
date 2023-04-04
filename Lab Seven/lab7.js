// step 1
let outputDiv = document.getElementById("output");

// step 2
let clickButton = document.getElementsByTagName("button")[0];

function buttonClicked() {
    console.log("Button clicked!");
    outputDiv.textContent = "Button clicked!";
}

clickButton.addEventListener("click", buttonClicked);

// step 3
let nameInput = document.getElementsByTagName("input")[0];

function inputChanged(e) {
    outputDiv.textContent = e.target.value;
}

nameInput.addEventListener("change", inputChanged);

// step 4
let startButton = document.getElementsByTagName("button")[1];
let stopButton = document.getElementsByTagName("button")[2];

let timerInterval;

function startTimer() {
    let seconds = 0;

    function tick() {
        seconds++;
        outputDiv.textContent = seconds + "s";
    }

    timerInterval = setInterval(tick, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

// step 5
let counterButton = document.getElementsByTagName("button")[3];

function clickCounter() {
    let click_nums = 0;

    function click(){
        click_nums++;

        return click_nums;
    }

    return click;
}

let num_clicks = clickCounter();


counterButton.addEventListener("click", () => {
    outputDiv.textContent = num_clicks() + " click(s)";
});