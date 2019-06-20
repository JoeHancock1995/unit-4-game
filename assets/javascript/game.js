var wins = 0;
var losses = 0;
var userScore = 0;
function getCardNumber () {
    return (Math.floor(Math.random() * 12 + 1));
}

var minimum = 19;
var maximum = 120;
var randomNumber;
function getRandomNumber () {
    return (Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum);
}

var cardArray = [];
var emperorCard;
var priestessCard;
var magicianCard;
var strengthCard;

function setWins() {
    $("#wins").append(wins);
}

function setLosses () {
    $("#losses").append(losses);
}

function setRandomNumber () {
    randomNumber = getRandomNumber();
    $("#randomNumber").append(randomNumber);
}

function setTotalScore() {
    userScore = 0;
    $("#totalScore").append(userScore);
}

function setCardNumber() {
    emperorCard = getCardNumber();
    priestessCard = getCardNumber();
    magicianCard = getCardNumber();
    strengthCard = getCardNumber();
    $("#emperorText").append(emperorCard);
    $("#priestessText").append(priestessCard);
    $("#magicianText").append(magicianCard);
    $("#strengthText").append(strengthCard);
    cardArray.push(emperorCard, priestessCard, magicianCard, strengthCard);
    console.log(cardArray);

        for (var iterator = 0; iterator > cardArray.length; iterator++) {
            if (cardArray.indexOf(iterator)) {
                console.log(true);
                $("#emperorText, #priestessText, magicianText, #strengthText").empty();
                setCardNumber();
            }
            else {
                console.log(false);
            }
        }
    }


function hideNumbers() {
    $("#emperorText").css("display", "none");
    $("#priestessText").css("display", "none");
    $("#magicianText").css("display", "none");
    $("#strengthText").css("display", "none");
}

function showEmperor () {
    $("#emperorText").css("display", "block");
}

function showPriestess () {
    $("#priestessText").css("display", "block");
}

function showMagician () {
    $("#magicianText").css("display", "block");
}

function showStrength () {
    $("#estrengthText").css("display", "block");
}

function reset() {
    $("#totalScore").empty();
    $("#randomNumber").empty();
    $("#emperorText, #priestessText, #magicianText, strengthText").empty();
    cardArray.empty();
    setRandomNumber();
    setTotalScore();
    setCardNumber();
    hideNumbers();
}

$(".button").one("click", function startGame () {
    setWins();
    setLosses();
    setRandomNumber();
    setTotalScore();
    setCardNumber();
    hideNumbers();
});

$("#emperorCard").click(function () {
    showEmperor();
    userScore = userScore + emperorCard;
    console.log("Current score: " + userScore);
    $('#totalScore').text(userScore);
        if (userScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            alert("You win!");
            reset();
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("You lose");
            reset();
        }
});

$("#priestessCard").click(function () {
    showPriestess();
    userScore = userScore + priestessCard;
    console.log("Current score:" + userScore);
    $('#totalScore').text(userScore);
        if (userScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            alert("You win!");
            reset();
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("You lose");
            reset();
        }
});

$("#magicianCard").click(function () {
    showMagician();
    userScore = userScore + magicianCard;
    console.log("Current score: " + userScore);
    $('#totalScore').text(userScore);
        if (userScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            alert("You win!");
            reset();
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("You lose");
            reset();
        }
});

$("#strengthCard").click(function () {
    showStrength();
    userScore = userScore + strengthCard;
    console.log("Current score: " + userScore);
    $('#totalScore').text(userScore);
        if (userScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            alert("You win!");
            reset();
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("You lose");
            reset();
        }
});