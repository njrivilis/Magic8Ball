var trueNumber = Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

var answers = ["Too High, Guess Again", "Too Low, Guess Again", "You got it!"];

function number_test(n) {
  var result = (n - Math.floor(n)) !== 0;

  if (result)
    return false; //has decimals
  else
    return true; //is an integer whole number
}

//function from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-38.php


window.onload = function () {
  var eight = document.getElementById("eight");
  var answer = document.getElementById("answer");
  var eightball = document.getElementById("eight-ball");
  var numberGuessed = document.getElementById("numberGuessed");

  eightball.addEventListener("click", function () {

    if (numberGuessed.value.length < 1) {
      alert('Guess a Number!');
    }

    else if (numberGuessed.value < 1) {
      alert('Your number must be at least 1')
    }

    else if (numberGuessed.value > 10) {
      alert('Your number must be less than 10')
    }

    else if (!number_test(numberGuessed.value)) {
      alert('Your number can\'t be a decimal')
    }

    else if (numberGuessed.value == trueNumber){
            eight.innerText = "";
      answer.innerText = answers[2];

    }


else if (numberGuessed.value > trueNumber){
            eight.innerText = "";
      answer.innerText = answers[0];

    }

else if (numberGuessed.value < trueNumber){
            eight.innerText = "";
      answer.innerText = answers[1];

    }

    
  });
};