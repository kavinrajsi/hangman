let answer='', mistakes=0, maxWrong = 6, judgeme = '', guessed = [];

let guessMe = ['antman', 'spiderman', 'iornman', 'blackpanther', 'deadpool', 'captianamerica', 'hulk'];

// keyboard
function createButton() {
    let buttonsTag = 'qwertyuiopasdfghjklzxcvbnm'.split('').map(letter =>
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

// assign the value to guess the word
function randomWord() {
    answer = guessMe[Math.floor(Math.random() * guessMe.length)];
}

function hint() {
    switch (answer) {
        case 'antman':
            document.getElementById('hint').innerHTML = 'ant';
            console.log('ant');
          break;
        case 'spiderman':
            document.getElementById('hint').innerHTML = 'spiderman';
            console.log('spiderman');
          break;
        case 'iornman':
            document.getElementById('hint').innerHTML = 'electronics';
            console.log('electronics');
          break;
        case 'blackpanther':
            document.getElementById('hint').innerHTML = 'panther';
            console.log('panther');
          break;
        case 'deadpool':
            document.getElementById('hint').innerHTML = 'dead';
            console.log('dead');
          break;
        case 'hulk':
            document.getElementById('hint').innerHTML = 'green';
            console.log('green');
          break;
          case 'captianamerica':
              document.getElementById('hint').innerHTML = 'america';
              console.log('america');
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

    (guessed.indexOf(letter) !== -1 ) ? null: guessed.push(letter);
    console.log(answer.indexOf(letter));

    if (answer.indexOf(letter) >= 0) {
        console.log('if :'+ answer);
        checkWord();
        gameWon();
    } else if (answer.indexOf(letter) === -1) {
        console.log('else :'+ answer);
        mistakes++;
        guessWorngCount();
        gameLoss();
        updatePicture();
    }
}
function guessWorngCount(){
    document.getElementById('mistakes').innerHTML = mistakes;
}

function updatePicture() {
    document.getElementById('manPic').src = './images/' + mistakes + '.jpg';
}

// check the word
function checkWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('spotMe').innerHTML = wordStatus;
}

function gameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
      }
    console.log('game won');
}
function gameLoss() {
    if (mistakes === maxWrong) {
        document.getElementById('keyboard').innerHTML = 'You Lost!!!';
      }
}
// reset
function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('manPic').src = './images/0.jpg';
    createButton();
    checkWord();
}

// function calling
document.getElementById('maxWrong').innerHTML = maxWrong;
randomWord();
createButton();
checkWord();
hint();