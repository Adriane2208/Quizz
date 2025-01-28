// Questions du quiz
const questions = [
    {
        question: "Quel est le langage de programmation le plus utilisé ?",
        answers: {
            a: "Python",
            b: "JavaScript",
            c: "Java"
        },
        correctAnswer: "b" // Réponse correcte
    },
    {
        question: "Que signifie HTML ?",
        answers: {
            a: "HyperText Markup Language",
            b: "Home Tool Markup Language",
            c: "Hyperlinks and Text Markup Language"
        },
        correctAnswer: "a" // Réponse correcte
    },
    {
        question: "Quel est le système d'exploitation open-source le plus populaire ?",
        answers: {
            a: "Windows",
            b: "MacOS",
            c: "Linux"
        },
        correctAnswer: "c" // Réponse correcte
    },
    {
        question: "Quelle année a été créée la première page web ?",
        answers: {
            a: "1989",
            b: "1991",
            c: "1994"
        },
        correctAnswer: "b" // Réponse correcte
    },
    {
        question: "Qui est le créateur de Linux ?",
        answers: {
            a: "Bill Gates",
            b: "Steve Jobs",
            c: "Linus Torvalds"
        },
        correctAnswer: "c" // Réponse correcte
    }
];

// Fonction pour générer le quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    // Fonction pour afficher les questions
    function showQuestions(questions, quizContainer) {
        const output = []; // Stocker les questions et réponses
        questions.forEach((currentQuestion, questionNumber) => {
            const answers = []; // Stocker les réponses possibles
            for (letter in currentQuestion.answers) {
                // Ajouter une option de réponse
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            // Ajouter la question et ses réponses au tableau output
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });
        // Afficher les questions et réponses dans le conteneur
        quizContainer.innerHTML = output.join('');
    }

    // Fonction pour afficher les résultats
    function showResults(questions, quizContainer, resultsContainer) {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let score = 0; // Initialiser le score

        // Vérifier chaque question
        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            if (userAnswer === currentQuestion.correctAnswer) {
                score += 2; // Ajouter 2 points pour chaque réponse correcte
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // Afficher le score final
        resultsContainer.innerHTML = `Score: ${score} sur 20`;
    }

    // Afficher les questions
    showQuestions(questions, quizContainer);

    // Ajouter un événement au clic du bouton de soumission
    submitButton.addEventListener('click', () => {
        showResults(questions, quizContainer, resultsContainer);
    });
}

// Variables contenant les éléments HTML
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Appel de la fonction pour générer le quiz
generateQuiz(questions, quizContainer, resultsContainer, submitButton);
