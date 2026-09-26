let currentSubject = "";
let questions = [];
let currentQuestion = 0;
let score = 0;


// SHUFFLE
function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


// START QUIZ
function startQuiz(subject) {

    console.log("Starting quiz:", subject);

    if (typeof quizData === "undefined") {

        alert("questions.js load nahi ho rahi!");
        return;
    }

    if (!quizData[subject]) {

        alert("Questions not found for: " + subject);
        return;
    }

    currentSubject = subject;
    currentQuestion = 0;
    score = 0;


    // COPY QUESTIONS
    let allQuestions = quizData[subject].map(function (q) {

        let optionData = q.options.map(function (option, index) {

            return {
                text: option,
                correct: index === q.answer
            };

        });


        // RANDOM OPTIONS
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


    // RANDOM QUESTION ORDER
    shuffleArray(allQuestions);


    // ALL QUESTIONS
    questions = allQuestions;


    // HIDE OTHER SECTIONS
    document.querySelectorAll("body > section").forEach(function (section) {

        section.style.display = "none";

    });


    // SHOW QUIZ
    let quizSection = document.getElementById("quizSection");

    quizSection.style.display = "block";


    showQuestion();
}


// SHOW QUESTION
function showQuestion() {

    const container = document.getElementById("quizContainer");

    if (!container) {

        alert("quizContainer nahi mila!");
        return;
    }


    const q = questions[currentQuestion];


    container.innerHTML = `

        <div class="quiz-box">

            <h2>${currentSubject} Quiz</h2>

            <h3>
                Question ${currentQuestion + 1}
                / ${questions.length}
            </h3>

            <div class="question">

                <h2>${q.question}</h2>

            </div>


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


            <div class="progress-container">

                <div
                    class="progress-bar"
                    style="width:${((currentQuestion + 1) / questions.length) * 100}%">

                </div>

            </div>

        </div>

    `;
}


// SELECT ANSWER
function selectAnswer(selectedIndex) {

    const q = questions[currentQuestion];

    const buttons = document.querySelectorAll(".option");


    buttons.forEach(function (button, index) {

        button.disabled = true;


        if (index === q.answer) {

            button.style.background = "#22c55e";
            button.style.color = "white";

        }


        if (
            index === selectedIndex &&
            selectedIndex !== q.answer
        ) {

            button.style.background = "#ef4444";
            button.style.color = "white";

        }

    });


    if (selectedIndex === q.answer) {

        score++;

    }


    setTimeout(function () {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showResult();

        }

    }, 700);
}


// RESULT
function showResult() {

    const container = document.getElementById("quizContainer");

    let percentage =
        Math.round((score / questions.length) * 100);


    container.innerHTML = `

        <div class="quiz-box">

            <h2>🎉 Quiz Completed!</h2>

            <h3>${currentSubject}</h3>

            <h1>
                ${score} / ${questions.length}
            </h1>

            <h2>
                ${percentage}%
            </h2>


            <button
                onclick="startQuiz('${currentSubject}')">

                🔄 Try Again

            </button>


            <button
                onclick="location.reload()">

                🏠 Home

            </button>

        </div>

    `;
}


// START LEARNING
function startLearning() {

    document.getElementById("olevel")
        .scrollIntoView({
            behavior: "smooth"
        });

}