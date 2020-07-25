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
        // console.log('if : ' + guessed);
    } else{
        guessed.push(letter);
        checkWord(guessed);
        // console.log('else : ' + guessed);
    }
}
// check the word
function checkWord(guessed) {
    // console.log('check word : ' + typeof guessed);
    console.log( guessed.stringify);
}
function gameWon() {
    alert('game won');
}
function gameLoss(){
    alert('game loss');
}
// reset
function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('manPic').src = './images/0.jpg';
}

// function calling
document.getElementById('maxWrong').innerHTML = maxWrong;
createButton();