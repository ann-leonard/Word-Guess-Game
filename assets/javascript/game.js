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
    buttons[i].style.backgroundColor = null;
  }
}

//Takes in letter pressed and sees if it's in the word
function gameLogic(){
    index_of_letter=[]
    var userChoice = event.key;
    for (i=0; i<letters.length;i++){

        if (userChoice === letters[i]){


          for (j=0; j<word.length;j++){
            if (word[j]===userChoice){


              for (l=0; l<word.length;l++){
                if (word[l]===userChoice){
                    index_of_letter.push(l)
                }
              }

              buttons[i].style.backgroundColor = 'green'

              for(k=0; k < index_of_letter.length;k++){
                console.log(index_of_letter)
                spaces[index_of_letter[k]]=userChoice
                document.getElementById("jumbo").innerHTML = spaces.join(' ')
                if (spaces.join('') === word){
                  score++
                  domWinScore.innerHTML = score
                }
              }
              break
            }
            else{
              buttons[i].style.backgroundColor = 'red';

            }
          }
        }
      }

   }

function checkLose(letter){

}

function checkWin(){

}


document.getElementById("resetButton").onclick = function(){newGame()};
document.onkeyup=gameLogic;
