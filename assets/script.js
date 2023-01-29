
var secondsLeft = 60;
var textElement = document.querySelector(".countdown")
var currentCard = 0;
var currentScore = 0;

var startElement = document.querySelector(".startButton");
startElement.addEventListener('click', function() {
        setTime()
        showCard(0)
    })



var allCardsElem = document.querySelectorAll(".card"); // this retursn an array of elements
for(var i = 0; i < allCardsElem.length; i++){
    allCardsElem[i].style.display = "none";
}

function showCard(num){
    allCardsElem[num].style.display = "block";
    var allButtonElem = document.querySelector(".card" + (num + 1)).querySelectorAll("button"); // looks like this :(".card01 button")
    console.log("check", allButtonElem)
    for(var i = 0; i < allButtonElem.length; i++){
        allButtonElem[i].addEventListener("click", function(){
            console.log( "check",  this.getAttribute('data-answer')  )
             ///add current card + !
             //add score
            //showCard(current card)
        })
    }

}











function setTime() {


    var timerInterval = setInterval(function(){
        secondsLeft--;
        textElement.textContent = secondsLeft;
        //console.log("sec", secondsLeft)

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            //sendMessage();
        }

    },1000)




}




