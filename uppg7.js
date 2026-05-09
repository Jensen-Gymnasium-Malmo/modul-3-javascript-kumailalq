let slider = document.getElementById("valueSlider");
let hintElement = document.getElementById("hint");
let selectedNumberElement = document.getElementById("selectedNumber");

let maxValue = 100;
let targetNumber = generateRandomNumber(maxValue);
let correctCount = 0;

selectedNumberElement.innerText = slider.value;

// när slider ändras
slider.addEventListener("input", function () {

    let guess = Number(slider.value);

    selectedNumberElement.innerText = guess;

    if (guess < targetNumber) {
        hintElement.innerText = "För lågt!";
        hintElement.style.color = "blue";

    } else if (guess > targetNumber) {
        hintElement.innerText = "För högt!";
        hintElement.style.color = "red";

    } else {
        correctCount++;

        hintElement.innerText =
            "Rätt! Du har gissat rätt " + correctCount + " gånger!";
        hintElement.style.color = "green";

        maxValue += 100;
        slider.max = maxValue;

        setTimeout(resetGame, 1200);
    }
});

function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

function resetGame() {
    targetNumber = generateRandomNumber(maxValue);
    slider.value = 0;
    selectedNumberElement.innerText = 0;
    hintElement.innerText = "";
}