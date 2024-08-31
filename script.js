import { comparTwoObjects, getRandomIndexOfArray } from './modules/utils.js';
import { calculateIQ, setQuizImages, setQuizTrueResults } from "./modules/methods.js";

/**
 * This array stores all the addresses of the quiz images
 */
let quizzes = setQuizImages()

/**
 * Save all the correct quiz answers based on the quiz ID
 */
const quizAnswers = setQuizTrueResults()

/**
 * It stores all the information about the user
 */
let user = {
    name: '',
    age: 0,
    cheat: false,
    quizResults: {},
    iq: {
        score: 0,
        level: '',
        grade: 0
    }
}

/**
 * The general task of this function is to control the process of performing quiz
 * - When to go to the next quiz and when to show the results of the quizzes
 */
function quizHandler(){

    // If all quizzes are completed
    if (quizzes.length === 0){

        // 1) Calculate user answer
        user.iq.score = comparTwoObjects(quizAnswers, user.quizResults).true
        user.iq.level = calculateIQ(30, user.iq.score).level
        user.iq.grade = calculateIQ(30, user.iq.score).grade

        // 2) Show result
        return injectTemplateShowResult()

    } else {

        // Go to the next quiz
        injectTemplateQuiz(
            getRandomIndexOfArray(quizzes, true)
        )

    }

}

function injectTemplateWelcome(){
    /*
    
    <div>
        <h1></h1>
        <input>
        <input>
        <input>
    </div>

    */

    // <div>
    let mainSpace = document.createElement('div')
    mainSpace.id = 'mainSpace'
    document.body.appendChild(mainSpace)
    
    // <h1> name of project
    let appName = document.createElement('h1')
    appName.id = 'appName'
    appName.innerText = 'Superior IQ'
    mainSpace.appendChild(appName)
    
    // <input> get name
    let userNameInput = document.createElement('input')
    userNameInput.className = 'textField'
    userNameInput.type = 'text'
    userNameInput.placeholder = 'Name'
    userNameInput.id = 'userName'
    mainSpace.appendChild(userNameInput)
    
    // <input> get age
    let userAgeInput = document.createElement('input')
    userAgeInput.className = 'textField'
    userAgeInput.type = 'number'
    userAgeInput.placeholder = 'Age'
    userAgeInput.id = 'userAge'
    mainSpace.appendChild(userAgeInput)

    // <input> start btn
    let startBtn = document.createElement('input')
    startBtn.id = 'startBtn'
    startBtn.type = 'submit'
    startBtn.value = 'Start'
    mainSpace.appendChild(startBtn)
    // if start button pressed: 
    startBtn.addEventListener("click", function(){

        // control user input: age, username, cheat
        let isUserName = document.getElementById("userName").value !== ""
        let isUserAge = (
            document.getElementById("userAge").value !== "" &&
            document.getElementById("userAge").value >= 6 &&
            document.getElementById("userAge").value <= 50
        )
        //cheating: mange to active cheat
        user.cheat = document.getElementById("userName").value === "cheat" && document.getElementById("userAge").value === '0'
        isUserAge = user.cheat || isUserAge

        if(isUserName && isUserAge){

            // 1) Store values
            user.name = document.getElementById("userName").value
            user.age = document.getElementById("userAge").value

            // 2) Conducting quizzes
            quizHandler()
        }

    });
}

function injectTemplateQuiz(path){
    /*
    
        <img>
        <div>
            <img> * (6 || 8)
        </div>

    */

    // Free up space 
    document.getElementById('mainSpace').innerHTML = ''

    // <img> question image
    let questionImg = document.createElement('img')
    questionImg.id = 'quizImage'
    questionImg.setAttribute('src', path.imageQuestion)
    questionImg.setAttribute('width', '300px')
    mainSpace.appendChild(questionImg)

    // <div> to put all answerImages
    let answerDiv = document.createElement('div')
    // <img> making tags of answer images one by one
    let len = path.imageAnswers.length
    let zeroTolLength = Array.from(Array(len).keys())
    for (let i = 0; i < len; i++) {
        let index = getRandomIndexOfArray(zeroTolLength, true)
        let answerImg = document.createElement('img')
        answerImg.setAttribute('width', '70px')
        answerImg.setAttribute('src', path.imageAnswers[index])
        answerImg.setAttribute('id', `option-${index+1}`)
        // Cheat section: start
        if (user.cheat){
            if (quizAnswers[path.id] === answerImg.id){ // The option with the correct answer was one
                answerImg.className = 'cheat-showResult'

            }
        }
        // Cheat section: end
        answerImg.addEventListener("click", function(){
            // save user selection
            Object.assign(user.quizResults, {[path.id]: this.id})
            quizHandler()
        });
        answerDiv.appendChild(answerImg)
    }
    mainSpace.appendChild(answerDiv)
}

function injectTemplateShowResult(){
    // Free up space 
    document.getElementById('mainSpace').innerHTML = ''

    // Injection
    document.getElementById('mainSpace').innerHTML = `
    Username: ${user.name}<br>
    Age: ${user.age}<br>
    Score: ${user.iq.score}<br>
    Level: ${user.iq.level}<br>
    Grade: ${user.iq.grade}<br>
    `
}

//* Start
injectTemplateWelcome()