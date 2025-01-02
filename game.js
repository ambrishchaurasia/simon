
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;

var level =0;

$(document).keydown(function() {

  if(!started){
    started=true;
   var text="Level " + level;
  $("h1").text(text);
  nextSequence();
}
}
);

  $(document).click(function(event) {
    // Check if the clicked element is outside the .container class
    if (!$(event.target).closest('.container').length) {
      if (!started) {
        started = true;
        var text = "Level " + level;
        $("h1").text(text);
        nextSequence();
      }
    }
  });
  



$(".btn").click(function() {

 
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

 //animation 
  var hash="#"+userChosenColour;
  $(hash).addClass("pressed");
  setTimeout(function removeani(){
    $(hash).removeClass("pressed");
  },100);
 
  playSound(userChosenColour);

  var indexx=userClickedPattern.length-1;
  checkans(indexx);
});

function nextSequence() {

  userClickedPattern = [];

  level=level+1;
  var txt="Level "+level;
  $("h1").text(txt);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
 
  
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkans(index)
{
  if(gamePattern[index]===userClickedPattern[index]){
    console.log("success");
  
if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
} }

else {

  console.log("wrong");
  
    var audioo = new Audio("./sounds/wrong.mp3");
    audioo.play();

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("h1").text("Game Over, Press Any Key to Restart!");
    startOver();

  
}


}

function startOver(){

  gamePattern = [];
  userClickedPattern = [];
  level=0;
  started=false;
  
  
  }