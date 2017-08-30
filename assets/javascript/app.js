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

var answers = {q1: 'a', q2: 'b', q3: 'c', q4: 'd', q5: 'a', q6: 'b'};


$('input:radio').click(function() {
    var container = $(this).parents('div');
    var question = $(this).attr('name');
    var answer = $(this).val();


    if(answers[question] === answer) {
    	correct++;
    } else if(answers[question] !== answer) {
    	incorrect++;
    } else {					//Need to figure out how to add to the unanswered counter
    	unanswered++;
    }

    console.log(correct, incorrect, unanswered);
});

$("#check").click(function() {
	$("#survey").hide();
	$(".final-screen").show();
	stop();
	$("#correct").append(correct);
	$("#incorrect").append(incorrect);
	$("#incomplete").append(unanswered);
	console.log(correct, incorrect, unanswered);
	console.log(timerNumber);
});












});