var gameElement = document.getElementById('game');
var scoreNumElement = document.querySelector('.score-num');
var youElement = document.getElementById('youPicked');
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
    youElement.className = "g-btn " + you;
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
            youElement.parentNode.querySelector('.decor').className = 'decor show';
            break;
        case -1:
            msg = "YOU LOSE";
            theHouseElement.parentNode.querySelector('.decor').className = 'decor show';
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
    var tmp = document.querySelector('.decor.show');
    goToStep(1);
    theHouseElement.className = 'g-btn void';
    if (tmp) {
        tmp.className = 'decor';
    }
}
function resizeScreen(event) {
    const minHeightForLandscapeView = 1024;
    var width = window.innerWidth,
        height = window.innerHeight,
        max = Math.max(width, height);
    if (max < minHeightForLandscapeView) {
        if (width > height) {
            document.documentElement.classList.add('forced');
        } else {
            document.documentElement.classList.remove('forced');
        }
    }
}

if (window.location) {
    var search = window.location.search;
    search = search.split('\?');
    if (search.length > 1) {
        search = search[1];
        var query = search.split('\&');
        var mode;
        for (var i=0; i<query.length; i++) {
            if (query[i].includes('mode')) {
                mode = query[i].split('\=')[1];
                break;
            }
        }
        if (mode==='bonus') {
            document.body.className = mode;
            limit = 5;
        }
    }
}
window.addEventListener('resize', resizeScreen);
window.addEventListener('load', function() {
    goToStep();
    resizeScreen();
});