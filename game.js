var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

var buttonColors = ["red","blue","green","yellow"];

// $(document).keydown(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

$(".begin").click(function() {
  if (!started) {
    // alert("game on!");
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(event) {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});


function nextSequence() {

  userClickedPattern = [];
  
  level++;

  $("#level-title").text("Level " + level);

  var randomNumber =  Math.floor(Math.random()*4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(250).fadeIn(250);

    playSound(randomChosenColor);

    // console.log(gamePattern);

}


function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor) {
    $("."+ currentColor).addClass("pressed");
    setTimeout(function(){
      $("."+ currentColor).removeClass("pressed");
    },100);
}


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      congrats();   
      setTimeout(function() {
        nextSequence();
      },1000);
    }

  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Start Button to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


function congrats() {
  if (level === 1) {
    alert("终于来啦麦慧敏，等到花儿也谢了");
  } 
  else if (level === 2) {
    var q1 = prompt('我的英语名系？');
    var q1 = q1.toUpperCase();
    if (q1 === "EDDIE") {
      alert("Bingo, 记性几好喔,请继续。");
    } else {
      alert("哎呀，心谈啊，我叫Eddie啊，gameover");
      playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Start Button to Restart");
        startOver();
    }
  } 
  else if (level === 4) {
    alert("跟住会好难");
  } 
  else if (level === 3) {
    var q2 = prompt("我靓仔定系谢霆锋靓仔？(按1表示我，按2表示谢霆锋)");
      if (q2 === "1") {
        alert("哇！英明如你，你可以继续玩");
      }
      else if (q2 === "2") {
        alert("我都估到噶啦，不过,Gameover!");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Start Button to Restart");
        startOver();
      }
      else {
        alert("其他选择都系gameover!"); 
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Start Button to Restart");
        startOver();
      }
  } 

  else if (level === 9) {
    alert("你应该reach5到呢一关了");
  } 
  
  else if (level === 5) {
    var q1 = prompt('我属羊？(按y表示yes，按n表示no)');
      if (q1 === "n" || q1 === "N") {
        alert("好，你可以继续玩");
      } else {
        alert("我属马啊，gameover！");
        playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Start Button to Restart");
        startOver();
      }
  } 
  
  else if (level === 7) {
  alert("不得了？感犀利");
 } else if (level === 8){
  alert("中差少少扎！");
 } else if (level === 6){
  var q3 = prompt("我最中意的男歌手？");
  if (q3 === "陈奕迅") {
    alert("好犀利，请继续。");
  } else {
    alert("答案系陈奕迅啊！gameover！");
        playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Start Button to Restart");
        startOver();
  }
 } else {
  alert("恭喜晒！screenshot然后向eddie领取奖品");
 }

}