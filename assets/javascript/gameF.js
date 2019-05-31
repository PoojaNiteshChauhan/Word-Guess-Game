var computerChoices = ["tiger", "Elephant", "Deer" ,"Giraffe", "Bear"];
var wrongAnswer =[];
var Answer = [];
var wins = 0;
var losses = 0;
var guessesLeft = 13;
var animalName = 0
var userLetter = ""


function restGame (){
    guessesLeft = 0;
    wrongAnswer =[];
    Answer = [];
    document.getElementById("Result").textContent = ""
    createDashes(computerChoices[animalName]);
}

function createDashes(animal)
{
    var showDash= " ";
    for (var i= 0; i < animal.length ; i++)

    {
        showDash = showDash + "-";
    }
    document.getElementById("Answer").innerText = showDash;
}

function playGame (){
    restGame();
    document.onkeyup = function(event) 
    {
        userLetter = event.key;
        if ((guessesLeft > 0) && (computerChoices[animalName] != Answer) )
        {

        
        }
        else if (computerChoices[animalName] === Answer)
        {
            win++;
            restGame();
            updateScoreBoard();
            document.getElementById("Result").innerText = " You Win "; 
        }
    }

}

function updateScoreBoard (){
document.getElementById("win").innerText = " Wins: " + wins;
document.getElementById("losses").innerText = " Loss: " + losses;  
}
playGame ();


