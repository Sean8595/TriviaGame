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
        q: "Which is not a class in 5e?",
        a1: "Mage",
        a2: "Wizard",
        a3: "Warlock",
        a4: "Sorcerer",
        correct: "Mage"
    },
     {   
       q: "How many times can you use a cantrip?",
       a1: "3 per day",
       a2: "1",
       a3: "As many times as you want",
       a4: "15",
       correct: "As many times as you want"
     },
     {   
      q: "What is a tiefling?",
      a1: "A type of elf",
      a2: "Someone with infernal ancestory",
      a3: "A type of magic",
      a4: "A magical item",
      correct: "Someone with infernal ancestory"
    },
    {   
      q: "Where can you find Duegar?",
      a1: "The Mountains",
      a2: "A Jungle",
      a3: "In a large city",
      a4: "The Underdark",
      correct: "The Underdark"
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
      q: "Who Betrayed and Ultimately defeated Vecna?",
      a1: "The Lady Vex'alia",
      a2: "Arkhan the Cruel",
      a3: "Kas the Bloody-Handed",
      a4: "Mordenkainen",
      correct: "Kas the Bloody-Handed"
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
      q: "What does every Barbarian use to fight with?",
      a1: "A battle-axe",
      a2: "Rage",
      a3: "Sword and Sheild",
      a4: "Lance",
      correct: "Rage"
    },
{
    q: "What is ",
    a1: "A battle-axe",
    a2: "Rage",
    a3: "Sword and Sheild",
    a4: "Lance",
    correct: "Rage"
}
  ]

  var correctpoints;
  var incorrectpoints;
  function display() {
    // start the timer now


    // Display the questions on the page
    for (var i = 0; i < questionsTotal.length; i++) {
      // console.log(questionsTotal[i].q);
      // console.log(questionsTotal[i].a1);
      // console.log(questionsTotal[i].a2);
      // console.log(questionsTotal[i].a3);
      // console.log(questionsTotal[i].a4);
      // console.log(questionsTotal[i].correct);

      var newDiv = $("<div>");
      newDiv.append("<div>" + questionsTotal[i].q + "</div>");
      newDiv.append("<div><input type='radio' name='question" + (i + 1) + "' value='" +questionsTotal[i].a1 + "' /><span>"+ questionsTotal[i].a1 + "</span></div>");
      newDiv.append("<div><input type='radio' name='question" + (i + 1) + "' value='" +questionsTotal[i].a2 + "' /><span>"+ questionsTotal[i].a2 + "</span></div>");
      newDiv.append("<div><input type='radio' name='question" + (i + 1) + "' value='" +questionsTotal[i].a3 + "' /><span>"+ questionsTotal[i].a3 + "</span></div>");
      newDiv.append("<div><input type='radio' name='question" + (i + 1) + "' value='" +questionsTotal[i].a4 + "' /><span>"+ questionsTotal[i].a4 + "</span></div>");
      // $("#Submit").on("click",function(){
      //   submitFunction()
      // })
      $(".asking").append(newDiv)
    }
  }
  $("#start").on("click", function() {
    display();
    $("#start").hide();

    $('input').on('click', function () {
      console.log($(this).val())

    })
    $("#Submit").on("click",function(){
      for (let i = 0; i < questionsTotal.correct.length; i++) {
        if (correct = $(this).val()){
          // correctpoints++;
          console.log(questionsTotal[i].correct[i]);
        }
        else{
          // incorrectpoints++;
        }
      }
      })






  });
}
questions();
{/* <input type="radio" name="question1" value="incorrect"> */}

function QuizTime(){
  clearInterval
  setTimeout(timeUp, 1000 * 120)

  if (!clockRunning) {
    intervalId = setInterval(decrement, 1000);
    function decrement(){

    }
    clockRunning = true;  
}
}


    
