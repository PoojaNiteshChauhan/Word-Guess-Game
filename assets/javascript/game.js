var computerChoices = ["tiger", "bear", "rat" ,"monkey", "dog","pig","wolf","lion","mouse","lamb"];
var wrongAnswer =[];
var Answer = [];
var wins = 0;
var losses = 0;
var guessesLeft = 13;
var animalName = 0
var userLetter = ""


function restGame (){
    wrongAnswer =[];
    Answer = [];
    document.getElementById("Result").textContent = ""
    createDashes(computerChoices[animalName]);
    console.log (computerChoices[animalName])
    console.log (computerChoices[animalName].length)
    guessesLeft = computerChoices[animalName].length + 5;
}

function createDashes(animal)
{
    var showDash= " ";
    for (var i= 0; i < animal.length ; i++)
    {
        Answer[i] = "-";
    }
    document.getElementById("Answer").innerText = Answer.join("");
}

function playGame (){
    restGame();
    document.onkeyup = function(event) 
    {
        
        userLetter = event.key.toLowerCase();
        if (guessesLeft <= 0 )
        {
            losses++;
            updateScoreBoard();
            document.getElementById("Result").textContent = " You Lose Press Any Key Continue"; 
            animalName = Math.floor(Math.random()*computerChoices.length);
            restGame();
        }
        else if ((guessesLeft > 0) && (computerChoices[animalName] != Answer.join("")) )
        {
            
            if (computerChoices[animalName].indexOf(userLetter )!= -1)
            {
                Answer[computerChoices[animalName].indexOf(userLetter )]=userLetter;
                document.getElementById("Answer").textContent = Answer.join("");
                guessesLeft--;
                if (computerChoices[animalName] === Answer.join(''))
                {
                    wins++;
                    updateScoreBoard();
                    document.getElementById("Result").textContent = " You Win Press Any Key Continue"; 
                    animalName = Math.floor(Math.random()*computerChoices.length);
                    restGame();
                }               
            }
            else
            {
                if (wrongAnswer.indexOf(userLetter)=== -1)
                    {
                        wrongAnswer.push(userLetter);
                    }
                document.getElementById("wrongAnswer").textContent = wrongAnswer;              
                guessesLeft--;
                
            }       
        }
        
    }

}

function updateScoreBoard (){
    document.getElementById("Win").textContent = " Wins: " + wins;
    document.getElementById("Losses").textContent = " Loss: " + losses;  
}
playGame ();


