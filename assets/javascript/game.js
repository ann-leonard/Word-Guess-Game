var domGuesses = document.getElementById("domGuesses");
var domWinScore = document.getElementById('winNum');
var score = 0;
var guessesLeft = 8;
var gameRunning = false;
var guessedLetterBank = [];
var incorrectLetterBank = [];
var spaces;
var wordList= ['starship','enterprise','klingon','vulcan','federation','tribble','spock','kirk','scotty','computer','stardate' ]
var word;
var letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var buttons

//function to reset all stats but score, pick new word and create placeholders
function newGame(){
  gameRunning = true;
  guessesLeft = 8;
  guessedLetterBank = [];
  incorrectLetterBank = [];
  word = wordList[Math.floor(Math.random()*wordList.length)];
  spaces=[]
    for (i=0;i<word.length;i++){
        spaces.push('_')
      }
  domGuesses.textContent = guessesLeft;
  document.getElementById('jumbo').innerHTML=spaces.join(' ')
  buttons=[]
    for (i =1; i < 27; i++){
      buttons.push(document.getElementsByClassName('btn')[i])
    }
    for (i =0; i < 27; i++){
    (document.getElementsByClassName('btn')[i]).style.backgroundColor = null;
  }
}

function storeIndex(userChoice){
  var index_of_letter=[];
  for (l=0; l<word.length;l++){
    if (word[l]===userChoice){
        index_of_letter.push(l)
    }
  }
  return index_of_letter;
}

function updateSpaces(userChoice){

  var letterIndex = letters.indexOf( userChoice);

  if (letterIndex >= 0) {

      var indexes_of_letter = storeIndex(userChoice);
            
      buttons[letterIndex].style.backgroundColor = (indexes_of_letter.length > 0) ? 'green' : 'red';

      for ( i = 0; i < indexes_of_letter.length; i++) {
           spaces[indexes_of_letter[i]] = userChoice;
      }

      document.getElementById("jumbo").innerHTML = spaces.join(' ');

      if (indexes_of_letter.length === 0) {
         domGuesses.innerHTML = --guessesLeft;

         if (guessesLeft === 0) {
            gameRunning = false; 
         }

      }

      if (spaces.join('') === word) {
         domWinScore.innerHTML = ++score;
         gameRunning = false;
      }
  }
}


//Takes in letter pressed and sees if it's in the word

function gameLogic(userChoice){
   
   if (gameRunning) {
      var userChoice = event.key;
  
      if (!guessedLetterBank.includes(userChoice)) {
          guessedLetterBank.push(userChoice);
          updateSpaces(userChoice);
       }
    } 

    document.getElementById("resetButton").hidden = gameRunning;

    return;
}



document.getElementById("resetButton").onclick = function(){newGame()};
document.onkeyup=gameLogic;
newGame();