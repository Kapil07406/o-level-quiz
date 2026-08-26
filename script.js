// ========================================
// QUIZ VARIABLES
// ========================================

let currentSubject = "";
let questions = [];
let currentQuestion = 0;
let score = 0;


// ========================================
// START QUIZ
// ========================================

function startQuiz(subject) {

    console.log("Starting quiz:", subject);

    // Check whether questions.js is loaded
    if (typeof quizData === "undefined") {
        alert("Quiz data not loaded! Please check questions.js");
        console.error("quizData is not defined");
        return;
    }

    // Check selected subject
    if (!quizData[subject]) {
        alert("Questions not found for " + subject);
        console.error("Available subjects:", Object.keys(quizData));
        return;
    }

    currentSubject = subject;

    // Copy questions from questions.js
    let allQuestions = [...quizData[subject]];

    // Shuffle questions
    allQuestions.sort(() => Math.random() - 0.5);

    // Take maximum 20 questions
    questions = allQuestions.slice(0, 20);

    currentQuestion = 0;
    score = 0;

    // Show first question
    showQuestion();
}


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    const question = questions[currentQuestion];

    // Safety check
    if (!question) {
        console.error("Question not found:", currentQuestion);
        return;
    }

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    document.querySelector(".hero").innerHTML = `

        <div class="quiz-box">

            <p class="quiz-title">
                ${currentSubject} Quiz
            </p>


            <div class="quiz-top">

                <span>
                    Question ${currentQuestion + 1}
                    / ${questions.length}
                </span>

                <span>
                    Score: ${score}
                </span>

            </div>


            <!-- Progress Bar -->

            <div class="progress-container">

                <div
                    class="progress-bar"
                    style="width: ${progress}%">
                </div>

            </div>


            <!-- Question -->

            <h2 class="quiz-question">

                ${question.question}

            </h2>


            <!-- Options -->

            <div class="quiz-options">

                ${question.options.map(function (option, index) {

        return `

                        <button
                            class="quiz-option"
                            onclick="selectAnswer(${index})">

                            ${option}

                        </button>

                    `;

    }).join("")}

            </div>


            <!-- Next Button -->

            <button
                id="nextBtn"
                class="next-btn"
                onclick="nextQuestion()"
                disabled>

                Next Question →

            </button>

        </div>

    `;


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ========================================
// SELECT ANSWER
// ========================================

function selectAnswer(selectedAnswer) {

    // Use current shuffled question
    const question = questions[currentQuestion];

    const options =
        document.querySelectorAll(".quiz-option");


    // Disable all options

    options.forEach(function (button) {

        button.disabled = true;

    });


    // Show correct answer

    options[question.answer].classList.add("correct");


    // Check selected answer

    if (selectedAnswer !== question.answer) {

        // Wrong answer

        options[selectedAnswer].classList.add("wrong");

    }

    else {

        // Correct answer

        score++;

    }


    // Enable Next button

    document.getElementById("nextBtn").disabled = false;

}


// ========================================
// NEXT QUESTION
// ========================================

function nextQuestion() {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResult();

    }

}


// ========================================
// SHOW RESULT
// ========================================

function showResult() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    let resultText;


    if (percentage >= 50) {

        resultText =
            "🎉 Congratulations! You Passed!";

    }

    else {

        resultText =
            "Keep Practicing! 💪";

    }


    document.querySelector(".hero").innerHTML = `

        <div class="quiz-box result-box">

            <h1>
                Quiz Completed! 🎉
            </h1>


            <h2>
                ${currentSubject}
            </h2>


            <div class="final-score">

                <p>
                    Your Score
                </p>


                <strong>
                    ${score} / ${questions.length}
                </strong>


                <p>
                    Percentage: ${percentage}%
                </p>

            </div>


            <h2>
                ${resultText}
            </h2>


            <br>


            <button
                onclick="startQuiz('${currentSubject}')">

                🔄 Try Again

            </button>


            <button
                onclick="goHome()">

                🏠 Home

            </button>

        </div>

    `;


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ========================================
// HOME
// ========================================

function goHome() {

    location.reload();

}


// ========================================
// START LEARNING BUTTON
// ========================================

function startLearning() {

    document
        .getElementById("olevel")
        .scrollIntoView({

            behavior: "smooth"

        });

}