
//OBS: codigo baseado no video: https://www.youtube.com/watch?v=_GTLxm9baoM&t=530s.

var myQuestions = [ //array de questões que será passada para meu codigo.
	{
		question: "Quantas Temporadas tem a série Game Of Thrones?",
		answers: {
			a: ' 8 temporadas',
			b: ' 7 temporadas',
            c: ' 10 temporadas',
            d: ' 11 temporadas'
		},
		correctAnswer: 'a' //resposta correta que seja passada.
	},
	{
		question: "Qual o nome do ator que interpreta o Sherlock Holmes na série de mesmo nome?",
		answers: {
			a: ' Jhonny Deep',
			b: ' Robert Downey Jr',
			c: ' Benedict Cumberbatch',
			d: ' Leornado Di Capprio'
		},
		correctAnswer: 'c'
	},
	{
		question: "Não é uma série live-action.",
		answers: {
			a: ' Breaking Bad',
			b: ' Sherlock',
			c: ' Gravity Falls',
			d: ' Game of Thrones'
		},
		correctAnswer: 'c'
    },
    {
		question: "Em que ano o mangá de attack on titans foi publicado?",
		answers: {
			a: ' 2008',
			b: ' 2013',
			c: ' 2011',
			d: ' 2009'
		},
		correctAnswer: 'd'
    },
    {
		question: "Em que epoca se passa Stranger Things?",
		answers: {
			a: ' Decada de 90',
			b: ' Decada de 80',
			c: ' Decada de 70',
			d: ' Anos 2000'
		},
		correctAnswer: 'b'
    }
];
var quizContainer = document.getElementById('quiz'); //atribui os valores a uma variavel
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton); //função do javascrit que gera um quiz 
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	function showQuestions(questions, quizContainer){ // mostra as questões doo quiz
		// armazena a saída e as opções de resposta
		var output = [];
		var answers;
		// para cada questão
		for(var i=0; i<questions.length; i++){			
			//resetamor a lista de questões
			answers = [];
			// para cada resposta
			for(letter in questions[i].answers){
				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}
			// adicionar pergunta e resposta a saída
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}
		// combinar a lista de saída em uma string de html e coloque-a na página
		quizContainer.innerHTML = output.join('');
	}
	function showResults(questions, quizContainer, resultsContainer){		
		var answerContainers = quizContainer.querySelectorAll('.answers');		
		var userAnswer = '';
		var numCorrect = 0;		
		for(var i=0; i<questions.length; i++){
			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				answerContainers[i].style.color = 'lightgreen';
			}
			else{
				answerContainers[i].style.color = 'red';
			}
		}
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}
	// mostrar a questão correta
	showQuestions(questions, quizContainer);
	// on submit, mostrar resultados
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}