
score=0
buttons=[]
for (i =1; i < 27; i++){
  buttons.push(document.getElementsByClassName('btn')[i])
}
var wordList= ['starship','enterprise','klingon','vulcan','federation','tribble', 'computer','stardate' ]
var word = wordList[Math.floor(Math.random()*wordList.length)];


spaces=[]
for (i=0;i<word.length;i++){
  spaces.push('_')
}

document.getElementById('jumbo').innerHTML=spaces.join(' ')
var letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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
                  document.getElementById('winNum').innerHTML = score
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
document.onkeyup=gameLogic
document.getElementById('jumbo').innerHTML=spaces.join(' ')
