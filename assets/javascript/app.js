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
  ];

  for (var i = 0; i < questionsTotal.length; i++){
    console.log(questionsTotal[i].quest);
    console.log(questionsTotal[i].choices)
    console.log(questionsTotal[i].answer)
    ;
    $("#question").text(questionsTotal[i].quest)
    $("#answer-block").text(questionsTotal[i].choices[0])
    $("#answer-block").text(questionsTotal[i].choices[1])


}
}
questions();
