var gameElement = document.getElementById('game');
var scoreNumElement = document.querySelector('.score-num');
var theHouseElement = document.getElementById('theHousePicked');
var notiElement = document.getElementById('noti');
var rules = {
    "lizard": {
    "paper": true,
    "spock": true
    },
    "paper": {
    "rock": true,
    "spock": true
    },
    "rock": {
    "lizard": true,
    "scissors": true
    },
    "scissors": {
    "lizard": true,
    "paper": true
    },
    "spock": {
    "rock": true,
    "scissors": true
    }
};
var options = ["paper","rock","scissors","lizard","spock"];
var limit = 3;
var score = 0;
var waitingTime = 800; // milisecond

function showRules(event) {
    var elem = document.querySelector('.modal-rules');
    if (elem) {
    elem.classList.add('show');
    }
}
function hideRules(event) {
    var elem = document.querySelector('.modal-rules');
    if (elem) {
    elem.classList.remove('show');
    }
}
function choose(event) {
    var it = event.target;
    var you, theHouse, increase;
    you = it.dataset.choose;
    document.getElementById('youPicked').className = "g-btn " + you;
    goToStep(2);
    
    setTimeout(function() {
    theHouse = theHouseChoose();
    theHouseElement.className = "g-btn " + theHouse;
    goToStep(3);
    setTimeout(function() {
        var msg = "DRAW";
        increase = compareChoice(you, theHouse);
        switch(increase) {
        case 1:
            msg = "YOU WIN";
            break;
        case -1:
            msg = "YOU LOSE";
            break;
        default: // draw 
        }
        notiElement.innerText = msg;
        goToStep(4);
        score += increase;
        scoreNumElement.innerHTML = score.toString();
    }, 300);
    }, waitingTime);
}
function theHouseChoose() {
    var tmp = Math.floor(Math.random() * limit);
    return options[tmp];
}
function compareChoice(you, theHouse) {
    var result;
    if (you === theHouse) {
    result = 0;
    } else {
    if (rules[you][theHouse]) {
        result = 1;
    } else {
        result = -1;
    }
    }
    return result;
}
function goToStep(step = 1) {
    step = +step;
    gameElement.className = ("game step-"+step.toString());
}
function playAgain() {
    goToStep(1);
    theHouseElement.className = 'g-btn void';
}
window.addEventListener('load', function() {
    goToStep();
});