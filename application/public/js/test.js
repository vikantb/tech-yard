const questions = [
    {
        question: " Which will legally declare, construct, and initialize an array?",
        optionA: `int [] myList = {"1", "2", "3"}`,
        optionB: "int [] myList = (5, 8, 2);",
        optionC: "int myList [] [] = {4,9,7,0};",
        optionD: "int myList [] = {4, 3, 7};",
        correctOption: "optionD"
    },

    {
        question: "Which is a reserved word in the Java programming language?",
        optionA: "method",
        optionB: "native",
        optionC: "array",
        optionD: "reference",
        correctOption: "optionB"
    },
    {
        question: "Which is a valid keyword in java?",
        optionA: "interface",
        optionB: "string",
        optionC: "Float",
        optionD: "unsigned",
        correctOption: "optionA"
    },

    {
        question: "Which one of the following will declare an array and initialize it with five numbers?",
        optionA: "int a [] = new int[5];",
        optionB: "int [] a = {23,22,21,20,19}",
        optionC: "int [5] array;",
        optionD: "Array a = new Array(5);",
        correctOption: "optionB"
    },
    {
        question: "Which is the valid declarations within an interface definition?",
        optionA: "public double methoda();",
        optionB: "public final double methoda();",
        optionC: "static void methoda(double d1);",
        optionD: "protected void methoda(double d1);",
        correctOption: "optionA"
    },

    {
        question: "public class Test { } What is the prototype of the default constructor?",
        optionA: "Test( )",
        optionB: "Test(void)",
        optionC: "public Test( )",
        optionD: "public Test(void)",
        correctOption: "optionC"
    },
    {
        question: "What is the name of the method used to start a thread execution?",
        optionA: "init();",
        optionB: "start();",
        optionC: "run();",
        optionD: "resume();",
        correctOption: "optionB"
    },

    {
        question: "Which interface does java.util.Hashtable implement?",
        optionA: "Java.util.Map",
        optionB: "Java.util.List",
        optionC: "Java.util.Collection",
        optionD: "Java.util.HashTable",
        correctOption: "optionA"
    },
    {
        question: "Which of the following option leads to the portability and security of Java?",
        optionA: "Bytecode is executed by JVM",
        optionB: "The applet makes the Java code secure and portable",
        optionC: "Use of exception handling",
        optionD: "Dynamic binding between objects",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is not a Java features?",
        optionA: "Dynamic",
        optionB: "Architecture Neutral",
        optionC: "Use of pointers",
        optionD: "Object-oriented",
        correctOption: "optionC"
    },
    {
        question: " Which of the following is the correct way of defining a variable in PHP?",
        optionA: "$variable name = value;",
        optionB: "$variable_name = value;",
        optionC: "$variable_name = value",
        optionD: "$variable name as value;",
        correctOption: "optionB"
    },

    {
        question: "Which of the following PHP function is used to generate unique id?",
        optionA: "id()",
        optionB: "mdid()",
        optionC: "uniqueid()",
        optionD: "None of the above",
        correctOption: "optionC"
    },
    {
        question: "Which of the following is the correct way to create a function in PHP?",
        optionA: "Create myFunction()",
        optionB: "New_function myFunction()",
        optionC: "function myFunction()",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "What does PEAR stands for?",
        optionA: "PHP extension and application repository",
        optionB: "PHP enhancement and application reduce",
        optionC: "PHP event and application repository",
        optionD: "None of the above",
        correctOption: "optionA"
    },
    {
        question: "Which of the following starts with __ (double underscore) in PHP?",
        optionA: "Inbuilt constants",
        optionB: "User-defined constants",
        optionC: "Magic constants",
        optionD: "Default constants",
        correctOption: "optionC"
    },
    {
        question: " PHP stands for -",
        optionA: "Pretext Hypertext Preprocessor",
        optionB: "Personal Home Processor",
        optionC: "Personal Home Processor",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "Who is known as the father of PHP?",
        optionA: "Drek Kolkevi",
        optionB: "List Barely",
        optionC: "Rasmus Lerdrof",
        optionD: "None of the above",
        correctOption: "optionC"
    },
    {
        question: " Variable name in PHP starts with -",
        optionA: "! (Exclamation)",
        optionB: "$ (Dollar)",
        optionC: "& (Ampersand)",
        optionD: "# (Hash)",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is the default file extension of PHP?",
        optionA: ".php",
        optionB: ".hphp",
        optionC: ".xml",
        optionD: ".html",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null
    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    saveToDatabase(playerGrade) ;

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

    window.location.href='http://localhost:3000/score'
}

async function saveToDatabase(playerGrade){
    await fetch("http://localhost:4545/update", {
    method: "POST",
    body: JSON.stringify({
        score: playerGrade,
        id:document.getElementById('secretCode').innerHTML
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}