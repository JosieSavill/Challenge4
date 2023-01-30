
var secondsLeft = 60;
var textElement = document.querySelector(".countdown")
var currentCard = 0;
var currentScore = 0;
var allCardsElem;
var timerInterval; 
var saveBtn = document.querySelector(".saveInitials");
var saveInitialsInput;
var clearFormBtn = document.querySelector(".clearForm");
var playAgainBtn = document.querySelector(".playAgain");


saveBtn.addEventListener('click', function() {
    saveInitialsInput = document.querySelector(".initials").value;
    console.log(saveInitialsInput);
    showCard(6)
})

clearFormBtn.addEventListener('click', function() {

})

playAgainBtn.addEventListener("click", function() {
    showCard(0);
    currentCard = 0
    currentScore = 0;
    secondsLeft = 60;
    setTime();
})


var startElement = document.querySelector(".startButton");
startElement.addEventListener('click', function() {
        setTime()
        showCard(0)
    })

//onload
function hideAllCards() {
    allCardsElem = document.querySelectorAll(".card"); // this retursn an array of elements
    for(var i = 0; i < allCardsElem.length; i++){
        allCardsElem[i].style.display = "none";
    }
}

hideAllCards()

function showCard(num){
    currentCard = num;
    console.log(num, currentCard)
    hideAllCards(); //hide all cards
    //console.log(allCardsElem)
    allCardsElem[num].style.display = "block"; //show one
    if(num == 6){
    
        var topScorerInitials = document.querySelector(".topScorerInitials");
        topScorerInitials.textContent = saveInitialsInput  
        var userScoreElem = document.querySelector(".userScore");
        userScoreElem.textContent = currentScore


    }else if(num == 5) {
            var scoreElem = document.querySelector(".score"); //<div class="score"></div>
            clearInterval(timerInterval);
            scoreElem.textContent = currentScore;

    } else { // question card logic
    var allButtonElem = document.querySelector(".card" + (num + 1)).querySelectorAll("button"); // looks like this :(".card01 button")
    //console.log("check", allButtonElem)
    for(var i = 0; i < allButtonElem.length; i++){
            //question cards
            allButtonElem[i].addEventListener("click", function(e){

                console.log( "check",  e.target.getAttribute('data-answer')  )
                var selectedAnswer = e.target.getAttribute('data-answer')
                if(selectedAnswer === "true"){
                    currentScore = currentScore + 10
                } 
                console.log("current score:",currentScore)
                currentCard = currentCard + 1;
                showCard(currentCard)


            })//end of addEventLisetner
     
        } //end of for loop
    }//end of if else statement 

}






// meed to add nextQuestion function

// display prompt of correct or incorrect answer selection




function setTime() {


        timerInterval = setInterval(function(){
        secondsLeft--;
        textElement.textContent = secondsLeft;
        //console.log("sec", secondsLeft)

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            //sendMessage();
            // display high score
            // display prompt to add initials
            // display card allDone
        }

    },1000)




}




