let answer, mistakes=0, maxWrong = 6, judgeme = '', guessed = [], guessMe = 'html';

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

// guessed word
function myGuess(letter) {
    if(guessed.indexOf(letter) !== -1){
    } else{
        guessed.push(letter);
        checkWord(guessed);
    }
}
// check the word
function checkWord(guessed) {
    console.log(guessed.join(''));
    if (guessMe == guessed.join('')) {
        gameWon();
    } else {
        gameLoss();
    }
}

function gameWon() {
    console.log('game won');
}
function gameLoss() {
    const count = mistakes++;
    console.log('game loss: ' + mistakes);
    updatePicture();
    document.getElementById('mistakes').innerHTML = count+1;
    if (count+1 === maxWrong) {
        document.getElementById('keyboard').innerHTML = 'you dead, please refresh the bowser';
    }
}
function updatePicture() {
    document.getElementById('manPic').src = './images/' + mistakes + '.jpg';
}
// reset
function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('manPic').src = './images/0.jpg';
    createButton();
}

// function calling
document.getElementById('maxWrong').innerHTML = maxWrong;
createButton();