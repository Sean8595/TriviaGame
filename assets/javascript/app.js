function questions() {
  var questionsTotal = [
    {
      quest: "Question One",
      choices: ["response one", "res two"],
      answer: "response one"
    },
    {
      quest: "Question Two",
      choices: ["res one", "res two"],
      answer: "res one"
    }
  ]
  function display(i) {
    var newDiv = $("<div>")
    newDiv.append(questionsTotal[i].quest)
    newDiv.append(questionsTotal[i].choices)
  }
  display()
  questionsTotal[i].quest
  ;

  for (var i = 0; i < questionsTotal.length; i++){
    console.log(questionsTotal[i].quest);
    console.log(questionsTotal[i].choices)
    console.log(questionsTotal[i].answer)
  
}
}
questions();
