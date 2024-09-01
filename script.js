import { comparTwoObjects, getRandomIndexOfArray } from './modules/utils.js';
import { calculateIQ, setQuizImages, setQuizTrueResults } from "./modules/methods.js";

/**
 * This array stores all the addresses of the quiz images
 */

let backgroundMusic = document.createElement("EMBED");
backgroundMusic.setAttribute("src", "backgroundmusic.mp3");
backgroundMusic.setAttribute("loop", true)
backgroundMusic.setAttribute("autostart", true)
backgroundMusic.setAttribute("width", "0")
backgroundMusic.setAttribute("height", "0")
backgroundMusic.className = 'backgroundMusic'
document.body.appendChild(backgroundMusic);

/**
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
function quizHandler() {

    // If all quizzes are completed
    if (quizzes.length === 0) {

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

function injectTemplateWelcome() {
    /*
    
    <div>
        <h1></h1>
        <input>
        <input>
        <input>
    </div>

    */


    // <div>
    let mainSpace = document.createElement('section')
    mainSpace.id = 'mainSpace'
    document.body.appendChild(mainSpace)
    //===================================================================
    // <h1> name of project

    let leaves = document.createElement('div')
    leaves.className = 'leaves'
    mainSpace.appendChild(leaves)

    let set = document.createElement('div')
    set.className = 'set'
    leaves.appendChild(set)

    let divImg01 = document.createElement('div')
    set.appendChild(divImg01)
    let divImg02 = document.createElement('div')
    set.appendChild(divImg02)
    let divImg03 = document.createElement('div')
    set.appendChild(divImg03)
    let divImg04 = document.createElement('div')
    set.appendChild(divImg04)
    let divImg05 = document.createElement('div')
    set.appendChild(divImg05)
    let divImg06 = document.createElement('div')
    set.appendChild(divImg06)
    let divImg07 = document.createElement('div')
    set.appendChild(divImg07)
    let divImg08 = document.createElement('div')
    set.appendChild(divImg08)

    let leaf_01 = document.createElement("IMG")
    leaf_01.setAttribute("src", "leaf_01.png")
    divImg01.appendChild(leaf_01)
    let leaf_02 = document.createElement("IMG")
    leaf_02.setAttribute("src", "leaf_01.png")
    divImg02.appendChild(leaf_02)
    let leaf_03 = document.createElement("IMG")
    leaf_03.setAttribute("src", "leaf_01.png")
    divImg03.appendChild(leaf_03)
    let leaf_04 = document.createElement("IMG")
    leaf_04.setAttribute("src", "leaf_01.png")
    divImg04.appendChild(leaf_04)
    let leaf_05 = document.createElement("IMG")
    leaf_05.setAttribute("src", "leaf_01.png")
    divImg05.appendChild(leaf_05)
    let leaf_06 = document.createElement("IMG")
    leaf_06.setAttribute("src", "leaf_01.png")
    divImg06.appendChild(leaf_06)
    let leaf_07 = document.createElement("IMG")
    leaf_07.setAttribute("src", "leaf_01.png")
    divImg07.appendChild(leaf_07)
    let leaf_08 = document.createElement("IMG")
    leaf_08.setAttribute("src", "leaf_01.png")
    divImg08.appendChild(leaf_08)

    let backgroundImg = document.createElement("IMG")
    backgroundImg.className = "bg"
    backgroundImg.setAttribute("src", "bg.jpg")
    mainSpace.appendChild(backgroundImg)

    let girlImg = document.createElement("IMG")
    girlImg.className = "girl"
    girlImg.setAttribute("src", "girl.png")
    mainSpace.appendChild(girlImg)

    let treesImg = document.createElement("IMG")
    treesImg.className = "trees"
    treesImg.setAttribute("src", "trees.png")
    mainSpace.appendChild(treesImg)


    let login = document.createElement('div')
    login.className = 'login'
    mainSpace.appendChild(login)

    //===================================================================
    let appName = document.createElement('h2')
    appName.id = 'appName'
    appName.innerText = 'آماده ای شروع کنیم!؟'
    login.appendChild(appName)

    let inputBoxName = document.createElement('div')
    inputBoxName.className = 'inputBox'
    login.appendChild(inputBoxName)

    // <input> get name
    let userNameInput = document.createElement('input')
    userNameInput.className = 'textField'
    userNameInput.type = 'text'
    userNameInput.placeholder = 'نام کاربری...'
    userNameInput.id = 'userName'
    inputBoxName.appendChild(userNameInput)

    let inputBoxAge = document.createElement('div')
    inputBoxAge.className = 'inputBox'
    login.appendChild(inputBoxAge)

    // <input> get age
    let userAgeInput = document.createElement('input')
    userAgeInput.className = 'textField'
    userAgeInput.type = 'number'
    userAgeInput.placeholder = 'سن...'
    userAgeInput.id = 'userAge'
    inputBoxAge.appendChild(userAgeInput)


    let inputBoxBTN = document.createElement('div')
    inputBoxBTN.className = 'inputBox'
    login.appendChild(inputBoxBTN)

    // <input> start btn
    let startBtn = document.createElement('input')
    startBtn.id = 'btn'
    startBtn.type = 'submit'
    startBtn.value = 'شروع'
    inputBoxBTN.appendChild(startBtn)
    // if start button pressed: 
    startBtn.addEventListener("click", function () {
        //===================================================================

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

        if (isUserName && isUserAge) {

            // 1) Store values
            user.name = document.getElementById("userName").value
            user.age = document.getElementById("userAge").value

            // 2) Conducting quizzes
            quizHandler()
        }

    });



}

function injectTemplateQuiz(path) {
    /*
    
        <img>
        <div>
            <img> * (6 || 8)
        </div>

    */

    // Free up space 

    document.getElementById('mainSpace').innerHTML = ''
    // <img> question image


    let leaves = document.createElement('div')
    leaves.className = 'leaves'
    mainSpace.appendChild(leaves)

    let set = document.createElement('div')
    set.className = 'set'
    leaves.appendChild(set)

    let divImg01 = document.createElement('div')
    set.appendChild(divImg01)
    let divImg02 = document.createElement('div')
    set.appendChild(divImg02)
    let divImg03 = document.createElement('div')
    set.appendChild(divImg03)
    let divImg04 = document.createElement('div')
    set.appendChild(divImg04)
    let divImg05 = document.createElement('div')
    set.appendChild(divImg05)
    let divImg06 = document.createElement('div')
    set.appendChild(divImg06)
    let divImg07 = document.createElement('div')
    set.appendChild(divImg07)
    let divImg08 = document.createElement('div')
    set.appendChild(divImg08)

    let leaf_01 = document.createElement("IMG")
    leaf_01.setAttribute("src", "leaf_01.png")
    divImg01.appendChild(leaf_01)
    let leaf_02 = document.createElement("IMG")
    leaf_02.setAttribute("src", "leaf_01.png")
    divImg02.appendChild(leaf_02)
    let leaf_03 = document.createElement("IMG")
    leaf_03.setAttribute("src", "leaf_01.png")
    divImg03.appendChild(leaf_03)
    let leaf_04 = document.createElement("IMG")
    leaf_04.setAttribute("src", "leaf_01.png")
    divImg04.appendChild(leaf_04)
    let leaf_05 = document.createElement("IMG")
    leaf_05.setAttribute("src", "leaf_01.png")
    divImg05.appendChild(leaf_05)
    let leaf_06 = document.createElement("IMG")
    leaf_06.setAttribute("src", "leaf_01.png")
    divImg06.appendChild(leaf_06)
    let leaf_07 = document.createElement("IMG")
    leaf_07.setAttribute("src", "leaf_01.png")
    divImg07.appendChild(leaf_07)
    let leaf_08 = document.createElement("IMG")
    leaf_08.setAttribute("src", "leaf_01.png")
    divImg08.appendChild(leaf_08)

    let backgroundImg = document.createElement("IMG")
    backgroundImg.className = "bg"
    backgroundImg.setAttribute("src", "bg.jpg")
    mainSpace.appendChild(backgroundImg)

    let girlImg = document.createElement("IMG")
    girlImg.className = "girl"
    girlImg.setAttribute("src", "girl.png")
    mainSpace.appendChild(girlImg)

    let treesImg = document.createElement("IMG")
    treesImg.className = "trees"
    treesImg.setAttribute("src", "trees.png")
    mainSpace.appendChild(treesImg)


    let b = document.createElement('div')
    b.className = 'login'
    mainSpace.appendChild(b)

    let q = document.createElement('div')
    q.className = 'bbbb'
    b.appendChild(q)

    let s = document.createElement('div')
    s.className = 'bb'
    b.appendChild(s)

    let questionImg = document.createElement('img')
    questionImg.id = 'quizImage'
    questionImg.setAttribute('src', path.imageQuestion)
    questionImg.setAttribute('width', '100%')
    q.appendChild(questionImg)


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
        answerImg.setAttribute('id', `option-${index + 1}`)
        // Cheat section: start
        if (user.cheat) {
            if (quizAnswers[path.id] === answerImg.id) { // The option with the correct answer was one
                answerImg.style = 'border: 3px solid yellow'

            }
        }
        // Cheat section: end
        answerImg.addEventListener("click", function () {
            // save user selection
            Object.assign(user.quizResults, { [path.id]: this.id })
            quizHandler()
        });
        answerDiv.appendChild(answerImg)
    }
    s.appendChild(answerDiv)
}

function injectTemplateShowResult() {
    // Free up space 






    // document.getElementById('mainSpace').innerHTML = ''

    // Injection
    document.getElementById('mainSpace').innerHTML = `
    نام کاربری: ${user.name}<br>
    سن: ${user.age}<br>
    امتیاز: ${user.iq.score}<br>
    سطح: ${user.iq.level}<br>
    درجه: ${user.iq.grade}<br>
    `
    let leaves = document.createElement('div')
    leaves.className = 'leaves'
    mainSpace.appendChild(leaves)

    let set = document.createElement('div')
    set.className = 'set'
    leaves.appendChild(set)

    let divImg01 = document.createElement('div')
    set.appendChild(divImg01)
    let divImg02 = document.createElement('div')
    set.appendChild(divImg02)
    let divImg03 = document.createElement('div')
    set.appendChild(divImg03)
    let divImg04 = document.createElement('div')
    set.appendChild(divImg04)
    let divImg05 = document.createElement('div')
    set.appendChild(divImg05)
    let divImg06 = document.createElement('div')
    set.appendChild(divImg06)
    let divImg07 = document.createElement('div')
    set.appendChild(divImg07)
    let divImg08 = document.createElement('div')
    set.appendChild(divImg08)

    let leaf_01 = document.createElement("IMG")
    leaf_01.setAttribute("src", "leaf_01.png")
    divImg01.appendChild(leaf_01)
    let leaf_02 = document.createElement("IMG")
    leaf_02.setAttribute("src", "leaf_01.png")
    divImg02.appendChild(leaf_02)
    let leaf_03 = document.createElement("IMG")
    leaf_03.setAttribute("src", "leaf_01.png")
    divImg03.appendChild(leaf_03)
    let leaf_04 = document.createElement("IMG")
    leaf_04.setAttribute("src", "leaf_01.png")
    divImg04.appendChild(leaf_04)
    let leaf_05 = document.createElement("IMG")
    leaf_05.setAttribute("src", "leaf_01.png")
    divImg05.appendChild(leaf_05)
    let leaf_06 = document.createElement("IMG")
    leaf_06.setAttribute("src", "leaf_01.png")
    divImg06.appendChild(leaf_06)
    let leaf_07 = document.createElement("IMG")
    leaf_07.setAttribute("src", "leaf_01.png")
    divImg07.appendChild(leaf_07)
    let leaf_08 = document.createElement("IMG")
    leaf_08.setAttribute("src", "leaf_01.png")
    divImg08.appendChild(leaf_08)

    let treesImg = document.createElement("IMG")
    treesImg.className = "trees"
    treesImg.setAttribute("src", "trees.png")
    mainSpace.appendChild(treesImg)

}

//* Start
injectTemplateWelcome()