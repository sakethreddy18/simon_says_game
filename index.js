var buttonColor = ["red" , "blue" , "yellow" , "green"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var gameLevel = 0;


$(document).keydown(function() {
    if(!started){


        $("#level-title2").text("Level" + gameLevel);
        nextSequence();
        started = true;
    }
});

$(".btn").click( function() {
   var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

 

  
  checkAnswer(userClickedPattern.length-1);


});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            } , 1000);
        }
    }
    else{
            playSound("wrong");

            $("body").addClass("game-over");

            setTimeout(function () {
                $("body").removeClass("game-over")
            },200)

            $("#level-title2").text("Game over press any key to start over")
            
            
            startOver()

            
        }
    
}



function nextSequence() {
    userClickedPattern = [];

  
  gameLevel++;


  $("#level-title2").text("Level " + gameLevel);



  var randomNumber = Math.floor(Math.random() * 4);

 
  var randomChosenColour = buttonColor[randomNumber];

  
  gamePattern.push(randomChosenColour);

  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);



  
  playSound(randomChosenColour);

    
}



function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")

    setTimeout(function (){
        $("#" + currentColour).removeClass("pressed")
    },100)
}


function startOver() {
    gameLevel = 0
    gamePattern = []
    started = false
}



