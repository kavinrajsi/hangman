let answer = '', mistakes = 0, maxWrong = 6, judgeme = '', guessed = [], score =parseInt(document.getElementById("points").value);
let guessMe = ['antman', 'spiderman', 'iornman', 'blackpanther', 'deadpool', 'captianamerica', 'hulk'];
let guessMe2 = ['ramnathkovind', 'pranabmukherjee', 'pratibhapatil', 'abdulkalam', 'kocherilramannarayanan', 'shankardayalsharma', 'ramaswamyvenkataraman'];
let letterList = "abcdefghijklmnopqrstuvwxyz";

/**
 * Screnn display manipulation
 */
document.getElementById('game-station').style.display = 'none';

function start() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('game-station').style.display = 'block';
}
function end() {
    document.getElementById('introduction').style.display = 'grid';
    document.getElementById('game-station').style.display = 'none';
    reset();
     document.getElementById("points").value = 0;
}
document.getElementById("start").onclick = function () {
    start();
};
document.getElementById("end").onclick = function () {
    end();
};

function restart() {
    document.getElementById('result-area').style.display = 'none';
    document.getElementById('game-action').style.display = 'flex';
    reset();
}

/**
 * Create keyboard layout
 */
function createButton() {
    let buttonsTag = letterList.split('').map(letter =>
        `
        <button
          class="keyboard-key"
          id='` + letter + `'
          onClick="myGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');

    document.getElementById('keyboard').innerHTML = buttonsTag;
}

/**
 * keyboar binding with keyboard
 */
function checkKeycode() {
    if (window.event.key === 'Enter') {
        start();
    } else if (window.event.key === 'Backspace') {
        reset();
    } else if (window.event.key === 'Delete') {
        end();
    } else if (!window.event.key.match(/[a-z]/i)) {
        console.log('do');
    } else {
        for (let char of letterList) {
            if (char === window.event.key) {
                myGuess(window.event.key);
                console.log('if: ' + window.event.key);
            }
        }
    }
}
document.onkeydown = checkKeycode;

/**
 *  assign the value to answer from guessMe array with math random
 *  added dash to #spotMe
 */
function randomWord() {
    console.log(score);
    if (score < 10) {
        answer = guessMe[Math.floor(Math.random() * guessMe.length)];
    } else if (score > 15) {
        answer = guessMe2[Math.floor(Math.random() * guessMe2.length)];
    }
    //// let answerArray = [];
    // // for (var i = 0; i < answer.length; i++) {
    // //     answerArray[i] = ' _ ';
    // //     document.getElementById('spotMe').innerHTML += answerArray[i];
    // // }
    // console.log(answer);
}


/**
 * Generate the hint for the answer word
 */
function hint() {
    switch (answer) {
        case 'antman':
            document.getElementById('hint').innerHTML = 'Guess the character from avengers who has the power of ant';
            break;
        case 'spiderman':
            document.getElementById('hint').innerHTML = 'Guess the character from avengers who has the power of spiderman';
            break;
        case 'iornman':
            document.getElementById('hint').innerHTML = 'Guess the character from avengers who has the power of electronics';
            break;
        case 'blackpanther':
            document.getElementById('hint').innerHTML = 'Guess the character from avengers who has the power of panther';
            break;
        case 'deadpool':
            document.getElementById('hint').innerHTML = 'Guess the character from avengers who has the power of dead';
            break;
        case 'hulk':
            document.getElementById('hint').innerHTML = 'Guess the character from avengers who has the power of green';
            break;
        case 'captianamerica':
            document.getElementById('hint').innerHTML = 'Guess the character from avengers who has the power of america';
            break;
        case 'ramnathkovind':
            document.getElementById('hint').innerHTML = '14th president';
            break;
        case 'pranabmukherjee':
            document.getElementById('hint').innerHTML = '13th president';
            break;
        case 'pratibhapatil':
            document.getElementById('hint').innerHTML = '12th president';
            break;
        case 'abdulkalam':
            document.getElementById('hint').innerHTML = '11th president';
            break;
        case 'kocherilramannarayanan':
            document.getElementById('hint').innerHTML = '10th president';
            break;
        case 'shankardayalsharma':
            document.getElementById('hint').innerHTML = '11th president';
            break;
        case 'ramaswamyvenkataraman':
            document.getElementById('hint').innerHTML = '10th president';
            break;
    }
}

/**
 *  check of the clicked letter in array or not
 *  if the letter is present assign null value
 *  else push the value to array
 *  assign the value to answer
 */
function myGuess(letter) {
    // check if enterted value is in array or not
    (guessed.indexOf(letter) !== -1) ? null : guessed.push(letter);
    // console.log(answer.indexOf(letter));
    if (answer.indexOf(letter) >= 0) {
        console.log('if :' + answer);
        checkWord();
        gameWon();
    } else if (answer.indexOf(letter) === -1) {
        console.log('else :' + answer);
        if (mistakes <= maxWrong) {
            mistakes++;
            guessWorngCount();
            gameLoss();
            updatePicture();
        }
    }
}

/**
 * Check the word match with answser
 */
function checkWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('spotMe').innerHTML = wordStatus;
}

/**
 * Update mistakes count
 */
function guessWorngCount() {
    document.getElementById('mistakes').innerHTML = mistakes;
    document.querySelector(`#demos li:nth-child(${mistakes}) i`).style.color='#FF0000';
    document.querySelector(`#demos li:nth-child(${mistakes}) i`).style.transition = "color 0.5s linear 0s";
}

/**
 * Update Picture
 */
function updatePicture() {
    document.getElementById('manPic').src = './images/' + mistakes + '.jpg';
}

/**
 * Game Won
 */
function gameWon() {
    if (wordStatus === answer) {
        let score = parseInt(document.getElementById("points").value);
        console.log('word: ' + wordStatus.length);
        console.log('scrore: ' + score);
        document.getElementById('game-action').style.display = 'none';
        document.getElementById('game-action').style.transition = "display 0.5s linear 0s";
        document.getElementById('result-area').style.display = 'block';
        document.querySelector('.result-status').innerHTML = '🙌, let try another word by pressing start';
        document.getElementById('points').value = score + wordStatus.length;
    }
}

/**
 * Game Loss
 */
function gameLoss() {
    if (mistakes === maxWrong) {
        document.getElementById('game-action').style.display = 'none';
        document.getElementById('game-action').style.transition = "display 0.5s linear 0s";
        document.getElementById('result-area').style.display = 'block';
        document.querySelector('.result-status').innerHTML = 'You had a great progrees 👍 . Press start to rework';
    }
}

/**
 * Reset
 */
function reset() {
    console.clear();
    mistakes = 0;
    guessed = [];
    let elems = document.querySelectorAll('#demos li i');
    let length = elems.length;
    for (let index = 0; index < length; index++) {
        elems[index].style.transition = "color 0.5s linear 0s";
        elems[index].style.color='#FFDF00';
    }

    document.getElementById('manPic').src = './images/0.jpg';
    createButton();
    randomWord();
    hint();
    checkWord();
}

// function calling
document.getElementById('maxWrong').innerHTML = maxWrong;
randomWord();
createButton();
checkWord();
hint();