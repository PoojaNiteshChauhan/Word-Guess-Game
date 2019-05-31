var computerChoices = ["tiger", "Elephant", "Deer" ,"Giraffe", "Bear"];
var wrongLetter =[];
var userWord = [];
var userGuess =" "
var roundCounter =0;
var userScore = 0;
var guessesLeft = 0;


function usserAnswer(userChoice)
{
    document.getElementById("already-guessed").innerText = userChoice;
} 

function createDashes(animalName)
{
    var showDash= " ";
    for (var i= 0; i < animalName.length ; i++)
    {
        showDash = showDash + "-";
    }
    document.getElementById("Answer").innerText = showDash;
}

function fillword(lengthOfWord)
{
    for (var i= 0; i < lengthOfWord ; i++)
    {
        userWord.push("-");
    }
}

createDashes (computerChoices[roundCounter]);


function findletter(Guess)
{
    var currentWord = computerChoices[roundCounter];
    
    console.log(currentWord);
    console.log(currentWord.indexOf(Guess))
    console.log(Guess);


        if (currentWord.indexOf(Guess) != -1)
            {
                userWord[currentWord.indexOf(Guess)]=Guess;
                document.getElementById("Answer").innerText = userWord;
                console.log(userWord);               
            }
        else 
            {
                wrongLetter.push(Guess);
                document.getElementById("already-guessed").innerText = wrongLetter;

            }

    
}

function playGame()
{
    fillword(computerChoices[roundCounter].length);
    document.onkeyup = function(event) 
    {
        userGuess = event.key;
        findletter(userGuess);
    }
}

function restGame (){
    guessesLeft = 0;
    wrongLetter =[];
    


    


}
    
    
    





playGame();
