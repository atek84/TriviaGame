var travQuestions = [
	{	question: "In which movie did John Travolta play a guy?"},
	{	question: "What Blockbuster hit starred Nicolas Cage and Mr. Travolta?"},
	{	question: "John Travolta can lift how many pounds?"},
	{	question: "?"},
	{	question: "What happened to John when he went to the Oscars in 2007?"},
	{	question: "What's up with his religion??"}
];

var timerNumber = 40;
var intervalId;


function run() {
      intervalId = setInterval(decrement, 1000);
    }
function decrement() {
	$("#time-left").html("<h2> Total time left: " + timerNumber + "</h2>");
	timerNumber--;
	if (timerNumber === 0) {
		stop();
		alert("Time Up!");
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
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$('input:radio').click(function() {
    var container = $(this).parents('div');
    var question = $(this).attr('name');
    var answer = $(this).val();

    if(answers[question] === answer) {
    	correct++;
    } else if(answers[question] !== answer) {
    	incorrect++;
    } else if($("input[type=radio]:checked").length > 0){						//Need to find out why it's not logging to unanswered
    	unanswered++;
    	return false;
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