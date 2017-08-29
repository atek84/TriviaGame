var travQuestions = [
	{	question: "In which movie did John Travolta play a guy?",
		answer: 'a'
	},
	{	question: "What Blockbuster hit starred Nicolas Cage and Mr. Travolta?",
		answer: 'a'
	},
	{
		question:"John Travolta can lift how many pounds?",
		answer:  'a'
	},
	{	question:"?",
		answer: 'a'
	},
	{	question:"What happened to John when he went to the Oscars in 2007?",
		answer: 'a'
	},
	{
		question:"What's up with his religion??",
		answer:  'a'
	}
];
// function mainArea () {
// 	var questionText0 = $("<h2 id='question0'>'In what movie did John Travolta play a guy?</h2>");
// 	var answerText0 = $("<form><input type='radio' id='answer00' value='Pulp Fiction'> Pulp Fiction <input type='radio' id='answer00' value='Gary'> Gary <input type='radio' id='answer00' value='Scientology'> Sccientology</form>")
// 	var mainText1 = $("<form> <h2 id='question1'></h2><input id='answer1'></form>");
// 	var mainText2 = $("<form> <h2 id='question2'></h2><input id='answer2'></form>");
// 	var mainText3 = $("<form> <h2 id='question3'></h2><input id='answer3'></form>");
// 	var mainText4 = $("<form> <h2 id='question4'></h2><input id='answer4'></form>");
// 	var mainText5 = $("<form> <h2 id='question5'></h2><input id='answer5'></form>");
// 	var mainText6 = $("<form> <h2 id='question6'></h2><input id='answer6'></form>");
// 	var button = $("<button type='button' id='button'>Start</button>");
// 	// $(".main-area").html(questionText0, answerText0);
// } 
$(document).ready(function(){

$("#survey").hide();


$("#start").click(function() {
	$(this).hide();
	$("#survey").show(travQuestions);
	console.log(travQuestions);
});

for (var i = 0; i < travQuestions.length; i++) {
	q = travQuestions[i].question
	document.getElementById("question" + [i]).textContent = q
};











});