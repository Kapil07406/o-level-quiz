let currentSubject = "";
let questions = [];
let currentQuestion = 0;
let score = 0;


// ===============================
// SHUFFLE FUNCTION
// ===============================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


// ===============================
// START QUIZ
// ===============================

function startQuiz(subject) {

    if (!quizData[subject]) {
        alert("Quiz questions not found!");
        return;
    }

    currentSubject = subject;
    currentQuestion = 0;
    score = 0;


    // Make a new copy of all questions
    let allQuestions = quizData[subject].map(function (q) {

        // Keep track of correct answer
        let optionData = q.options.map(function (option, index) {

            return {
                text: option,
                correct: index === q.answer
            };

        });


        // Randomize options
        shuffleArray(optionData);


        return {

            question: q.question,

            options: optionData.map(function (item) {
                return item.text;
            }),

            answer: optionData.findIndex(function (item) {
                return item.correct;
            })

        };

    });


    // Randomize question order
    shuffleArray(allQuestions);


    // USE ALL 50 QUESTIONS
    questions = allQuestions;


    showQuestion();
}


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    if (currentQuestion >= questions.length) {

        showResult();
        return;
    }


    const quizContainer = document.getElementById("quizContainer");

    if (!quizContainer) {
        console.error("quizContainer not found!");
        return;
    }


    const q = questions[currentQuestion];


    let html = `

        <div class="quiz-header">

            <h2>${currentSubject} Quiz</h2>

            <p>
                Question ${currentQuestion + 1}
                / ${questions.length}
            </p>

        </div>


        <div class="question-box">

            <h3>${q.question}</h3>


            <div class="options">

                ${q.options.map(function (option, index) {

        return `
                        <button
                            class="option"
                            onclick="selectAnswer(${index})">

                            ${String.fromCharCode(65 + index)}.
                            ${option}

                        </button>
                    `;

    }).join("")}

            </div>

        </div>


        <div class="quiz-footer">

            <div class="progress-container">

                <div
                    class="progress-bar"
                    style="width:${((currentQuestion + 1) / questions.length) * 100}%">
                </div>

            </div>

        </div>

    `;


    quizContainer.innerHTML = html;
}


// ===============================
// SELECT ANSWER
// ===============================

function selectAnswer(selectedIndex) {

    const q = questions[currentQuestion];

    const buttons = document.querySelectorAll(".option");


    buttons.forEach(function (button, index) {

        button.disabled = true;


        if (index === q.answer) {

            button.classList.add("correct");

        }


        if (
            index === selectedIndex &&
            selectedIndex !== q.answer
        ) {

            button.classList.add("wrong");

        }

    });


    if (selectedIndex === q.answer) {

        score++;

    }


    setTimeout(function () {

        nextQuestion();

    }, 700);
}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    currentQuestion++;

    showQuestion();

}


// ===============================
// SHOW RESULT
// ===============================

function showResult() {

    const quizContainer =
        document.getElementById("quizContainer");


    let percentage =
        Math.round((score / questions.length) * 100);


    quizContainer.innerHTML = `

        <div class="result-box">

            <h2>🎉 Quiz Completed!</h2>

            <h3>${currentSubject}</h3>


            <div class="result-score">

                <h1>${score} / ${questions.length}</h1>

                <p>${percentage}%</p>

            </div>


            <button
                class="btn"
                onclick="startQuiz('${currentSubject}')">

                🔄 Try Again

            </button>


            <button
                class="btn"
                onclick="goHome()">

                🏠 Home

            </button>

        </div>

    `;
}


// ===============================
// GO HOME
// ===============================

function goHome() {

    window.location.href = "index.html";

}


// ===============================
// LEARNING BUTTON
// ===============================

function startLearning(subject) {

    alert(
        "Learning section for " +
        subject +
        " will be available soon!"
    );

}