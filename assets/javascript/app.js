var travQuestions = [
	{	question: "Which famous director is Mr. Cage related to?"},
	{	question: "Nicolas Cage was inspired by which of these in changing his last name? "},
	{	question: "Which movie did Nicolas Cage turn down a role offered by Jim Carrey?"},
	{	question: "Nicolas Cage named one of his sons after which fictional character?"},
	{	question: 'In which movie does he play a man with the nickname "Mad Dog"'},
	{	question: "He won an Oscar for best actor in a leading role for which movie? "}
];

var timerNumber = 60;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function run() {
      intervalId = setInterval(decrement, 1000);
    }
function decrement() {
	$("#time-left").html("<h2> Total time left: " + timerNumber + "</h2>");
	timerNumber--;
	if (timerNumber === 0) {
		stop();
		checkAnswers();
		$("#survey").hide();
		$(".final-screen").show();
		$("#correct").append(correct);
		$("#incorrect").append(incorrect);
		$("#incomplete").append(unanswered);
		console.log(correct, incorrect, unanswered);
      }
    }

function stop() {
	clearInterval(intervalId);
    }

function checkAnswers() {
	answers = [
	{
		name: 'q1',
		correctAnswer: 'a',
		incorrectAnswer: ['b','c','d']
	},
	{
		name: 'q2',
		correctAnswer: 'b',
		incorrectAnswer: ['a','c','d']
	},
	{
		name: 'q3',
		correctAnswer: 'c',
		incorrectAnswer: ['a','b','d']
	},
	{
		name: 'q4',
		correctAnswer: 'd',
		incorrectAnswer: ['a','b','c']
	},
	{
		name: 'q5',
		correctAnswer: 'a',
		incorrectAnswer: ['b','c','d']
	},
	{
		name: 'q6',
		correctAnswer: 'b',
		incorrectAnswer: ['a','c','d']
	}];

	for(var i = 0; i < answers.length; i++) {
		var answersData = answers[i];
		var radioChoice = 'input:radio[name=' + answersData.name + ']:checked';
		var selectedRadio = $(radioChoice).val();

		if(selectedRadio === answersData.correctAnswer) {
			correct++;
		} else if(selectedRadio === answersData.incorrectAnswer[0]) {
			incorrect++;
		} else {
			unanswered++;
		}

	}
}

$(document).ready(function(){

$("#survey").hide();
$(".final-screen").hide();

$("#start").click(function() {
	$(this).click(run());
	$(this).hide();
	$("#survey").show(travQuestions);
	console.log(timerNumber);
	console.log(travQuestions);
});

for (var i = 0; i < travQuestions.length; i++) {
	q = travQuestions[i].question
	document.getElementById("question" + [i]).textContent = q
};

$("#check").click(function() {
	$("#survey").hide();	
	checkAnswers();
	$(".final-screen").show();
	stop();
	$("#correct").append(correct);
	$("#incorrect").append(incorrect);
	$("#incomplete").append(unanswered);
	console.log(correct, incorrect, unanswered);
	console.log(timerNumber);
});
});
