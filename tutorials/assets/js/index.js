var radioTheme = document.getElementsByClassName('radio-theme');
var selectEle = document.getElementById('tutorial-type');
var tutorialDiv = document.getElementById('tutorial');
var tutorialResultDiv = document.getElementById('tutorial-result');
var tutorialTypes = [
  {label:"Throwing Cards Away 1",value:"tca1"},
  {label:"Binary to decimal",value:"btd"},
];
var mapValueWithFunc = {
  "tca1": throwingCardsAway1,
  "btd": binToDec,
};

function changeTheme(event) {
  var it = event.target;
  document.body.classList = "" + it.value + "-theme";
}

function changeTutorialType(event) {
  var it = event.target;
  tutorialDiv.innerHTML = "";
  tutorialResultDiv.innerHTML = "";
  if (it.value) {
    if (mapValueWithFunc.hasOwnProperty(it.value)) {
      mapValueWithFunc[it.value].call();
    }
  }
}

window.addEventListener('load', function() {
  var html = '';
  for (var i=0;i<radioTheme.length;i++) {
    radioTheme[i].addEventListener('click', changeTheme);
  }

  html += '<option value="none" selected disabled>None</option>';
  for (var i=0;i<tutorialTypes.length;i++) {
    html += "<option value=\"" + tutorialTypes[i].value + "\">" + tutorialTypes[i].label + "</option>";
  }
  selectEle.innerHTML = html;
  selectEle.addEventListener('change', changeTutorialType);
});

// Các bài toán
function throwingCardsAway1() {
  var input = [], output = [];
  function getInput(data) {
    var res = [];
    if (data) {
      res = data.split(/[\s]+/);
    }
    return res;
  }
  function solve(input) {
    var res = {
      discarded: "Discarded cards:",
      remaining: "Remaining card: ",
    };
    var arr = [];
    if (input<=1 || isNaN(input)) {
      res.remaining += input;
    } else {
      var i=0, num;
      while (i<input) {
        arr.push(++i);
      }
      while (arr.length>1) {
        num = arr.shift();
        res.discarded += (" " + num + ",");
        num = arr.shift();
        arr.push(num);
      }
      res.discarded = res.discarded.slice(0,res.discarded.length-1);
      res.remaining += arr[0];
    }
    return res;
  }
  function render() {
    var tmpEle = document.createElement("LABEL");
    tmpEle.innerHTML = "Input:";
    tmpEle.htmlFor = "1-tca1-txt-area";
    tutorialDiv.appendChild(tmpEle);
    tutorialDiv.appendChild(document.createElement("BR"));

    tmpEle = document.createElement("TEXTAREA");
    tmpEle.id = "1-tca1-txt-area";
    tmpEle.onchange = function(event) {
      tutorialResultDiv.innerHTML = "";
      input = getInput(event.target.value);
      if (input.length>0) {
        var i=0, tmp, elem;
        while (i<input.length && input[i]!=0) {
          tmp = solve(parseInt(input[i++]));
          output.push(tmp);

          elem = document.createElement("SPAN");
          elem.innerHTML = tmp.discarded;
          tutorialResultDiv.appendChild(elem);
          tutorialResultDiv.appendChild(document.createElement("BR"));

          elem = document.createElement("SPAN");
          elem.innerHTML = tmp.remaining;
          tutorialResultDiv.appendChild(elem);
          tutorialResultDiv.appendChild(document.createElement("BR"));
          tutorialResultDiv.appendChild(document.createElement("BR"));
        }
      }
    };
    tutorialDiv.appendChild(tmpEle);
  }
  render();
}

function binToDec() {
  var input = "", output = "";
  function solve(input) {
    return parseInt(input,2);
  }
  function render() {
    var tmpEle = document.createElement("LABEL");
    tmpEle.innerHTML = "Binary:";
    tmpEle.htmlFor = "2-btd-input";
    console.log(tmpEle);
    tutorialDiv.appendChild(tmpEle);
    tutorialDiv.appendChild(document.createElement("BR"));

    tmpEle = document.createElement("INPUT");
    tmpEle.id = "2-btd-input";
    tmpEle.type = "text";
    tmpEle.maxLength = "12";
    tmpEle.oninput = function(event) {
      tutorialResultDiv.innerHTML = "";
      input = event.target.value;
      input = input.replace(/[^01]/gi,"");
      input = input.replace(/^0+/g,"0");
      if (input.length>0) {
        var elem;
        output = solve(input);
        elem = document.createElement("SPAN");
        elem.innerHTML = "Decimal:";
        tutorialResultDiv.appendChild(elem);
        tutorialResultDiv.appendChild(document.createElement("BR"));

        elem = document.createElement("SPAN");
        elem.innerHTML = output;
        tutorialResultDiv.appendChild(elem);
      }
      event.target.value = input;
    };
    tutorialDiv.appendChild(tmpEle);
    tutorialDiv.appendChild(document.createElement("BR"));
    tutorialDiv.appendChild(document.createElement("BR"));
  }
  render();
}