function questions() {
  var questionsTotal = [
    {
        q: "How much damage does fireball do?",
        a1: "8 plus spell mod",
        a2: "8 d6",
        a3: "6 d8",
        a4: "4 d4",
        correct: "8 d6"
    },
    {
        q: "What is the name of Jasmine's tiger?",
        a1: "Raja",
        a2: "Apu",
        a3: "Sher",
        a4: "Khan",
        correct: "Raja"
    },
     {   
       q: "Who shot JFK?",
       a1: "Lee Harvey Oswald",
       a2: "Jack Ruby",
       a3: "John Hinkley",
       a4: "A Grassy Gnoll",
       correct: "Lee Harvey Oswald"
     },
     {   
      q: "In which year was Alaska sold to the U.S.?",
      a1: "11",
      a2: "1867",
      a3: "1904",
      a4: "1794",
      correct: "1867"
    },
    {   
      q: "Where would you find the Sea of Tranquility?",
      a1: "The Moon",
      a2: "India",
      a3: "China",
      a4: "Philly",
      correct: "The Moon"
    },
    {   
      q: "What kind of weapon is a falchion",
      a1: "Gun",
      a2: "Sword",
      a3: "GunSword",
      a4: "Bow",
      correct: "Sword"
    },
    {   
      q: "Who was the legendary Benedictine monk who invented champagne?",
      a1: "Dom Perignon.",
      a2: "Don Flamingo",
      a3: "La Croix",
      a4: "Lincoln",
      correct: "Dom Perignon"
    },
    {   
      q: "What does a Barbarian use as hit dice?",
      a1: "D12",
      a2: "D8",
      a3: "D20",
      a4: "D4",
      correct: "D12"
    },
    {   
      q: "Who was the legendary Benedictine monk who invented champagne?",
      a1: "Dom Perignon.",
      a2: "Don Flamingo",
      a3: "La Croix",
      a4: "Lincoln",
      correct: "Dom Perignon"
    },
  ]

  var correctpoints;
  var incorrectpoints;
  function display() {
    // start the timer now


    // Display the questions on the page
    for (var i = 0; i < questionsTotal.length; i++) {
      console.log(questionsTotal[i].q);
      console.log(questionsTotal[i].a1);
      console.log(questionsTotal[i].a2);
      console.log(questionsTotal[i].a3);
      console.log(questionsTotal[i].a4);
      console.log(questionsTotal[i].correct);

function submitFunction(){
  if("question"=questionsTotal.correct){
    correctpoints++
  }
  else{
    incorrectpoints++
  }
  alert("You got "+ correctpoints + "correct")
  alert("You got "+ incorrectpoints + "wrong")
}

      var newDiv = $("<div>");
      newDiv.append("<div>" + questionsTotal[i].q + "</div>");
      newDiv.append("<div><input type='radio' name='question" + (i + 1) + "' value='" +questionsTotal[i].a1 + "' /><span>"+ questionsTotal[i].a1 + "</span></div>");
      newDiv.append("<div><input type='radio' name='question" + (i + 1) + "' value='" +questionsTotal[i].a2 + "' /><span>"+ questionsTotal[i].a2 + "</span></div>");
      newDiv.append("<div><input type='radio' name='question" + (i + 1) + "' value='" +questionsTotal[i].a3 + "' /><span>"+ questionsTotal[i].a3 + "</span></div>");
      newDiv.append("<div><input type='radio' name='question" + (i + 1) + "' value='" +questionsTotal[i].a4 + "' /><span>"+ questionsTotal[i].a4 + "</span></div>");
      $("#Submit").on("click",function(){
        submitFunction()
      })
      $(".asking").append(newDiv)
    }
  }

  $("#start").on("click", function() {
    display();
    $("#start").hide();
  });
  $(".asking").text(questionsTotal[i].quest);
}
questions();
{/* <input type="radio" name="question1" value="incorrect"> */}

function QuizTime(){
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;  
}
}

