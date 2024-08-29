// [ Initialize Variables ]

let quizImagePath = './Images/quiz'
/** This array stores all the addresses of the quiz images */
let quizImages = []
let quizListOfAllIds = []
let quizStatus = 0

let quizAnswers = {
    'quiz1':'option-3',
    'quiz2':'option-1',
    'quiz3':'option-5',
    'quiz4':'option-5',
    'quiz5':'option-2',
    'quiz6':'option-1',
    'quiz7':'option-2',
    'quiz8':'option-2',
    'quiz9':'option-2',
    'quiz10':'option-6',
    'quiz11':'option-4',
    'quiz12':'option-1',
    'quiz13':'option-4',
    'quiz14':'option-7',
    'quiz15':'option-2',
    'quiz16':'option-3',
    'quiz17':'option-1',
    'quiz18':'option-6',
    'quiz19':'option-5',
    'quiz20':'option-8',
    'quiz21':'option-4',
    'quiz22':'option-4',
    'quiz23':'option-7',
    'quiz24':'option-6',
    'quiz25':'option-4',
    'quiz26':'option-7',
    'quiz27':'option-7',
    'quiz28':'option-3',
    'quiz29':'option-2',
    'quiz30':'option-8'
}
let userAnswers = {}

/**
 * This function indexing all quiz images in the array
 * @param {array} array An array to store all the quiz images
 */
function setQuizImages(array){

    // It covers all 30 folders: from 1 to 30
    for (let i = 0; i < 30; i++) {
        const testNumber = i + 1

        array.push(
            {
                id: `quiz${testNumber}`,
                imageQuestion: `${quizImagePath}/${testNumber}/test${testNumber}.png`,
                imageAnswers: []
            }
        )

        // from directory 1 - 12 that they are contain 6 images
        if (i <= 11){
            for (let x = 1; x <= 6; x++) {
                array[i].imageAnswers.push(
                    `${quizImagePath}/${testNumber}/${testNumber}-${x}.png`
                )
            }

        // from directory 13 - 30 that they are contain 8 images
        } else {
            for (let x = 1; x <= 8; x++) {
                array[i].imageAnswers.push(
                    `${quizImagePath}/${testNumber}/${testNumber}-${x}.png`
                )
            }
        }
    }

}; setQuizImages(quizImages)

/**
 * This function collects all quizzes id in a list
 * @param {array} array An array to store all the IDs
 */
function setQuizListAllId(array){
    for (let id = 0; id < quizImages.length; id++) {
        array.push(quizImages[id].id)
    }
}; setQuizListAllId(quizListOfAllIds)

/**
 * This function randomly selects an object from the array and finally deletes it
 * @param {array} array An array of objects: [{}, {}, {}, ...]
 * @returns {number} Random number between 0 to array.length
 */
function getRandomQuiz(array){

    // A) Receive quiz randomly
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomQuiz = array[randomIndex]

    // B) get images path
    let randomQuizPath = {}
    for (let i = 0; i < quizImages.length; i++) {
        if (quizImages[i].id === randomQuiz){
            randomQuizPath = quizImages[i]
            break
        }
    }

    // remove element
    array.splice(randomIndex, 1)

    return randomQuizPath
}

/** This function implements the HTML structure of the welcome panel section */
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

        let isUserName = document.getElementById("userName").value !== ""
        let isUserAge = (
            document.getElementById("userAge").value !== "" &&
            document.getElementById("userAge").value >= 6 &&
            document.getElementById("userAge").value <= 50
        )


        if(isUserName && isUserAge){
            nextQuiz()
        }

    });
}

/** The general task of this function is to control the process of performing quiz */
function nextQuiz(){

    // 0) change quiz status
    if (quizStatus < quizImages.length){
        quizStatus++
    } else {
        return injectTemplateShowResult()
    }
    
    // 1) Empty all space
    document.getElementById('mainSpace').innerHTML = ''
    
    // 2) Get random image addresses of quiz
    let quizPaths = getRandomQuiz(quizListOfAllIds)
    
    // 3) Implement HTML code
    injectTemplateQuiz(quizPaths)
      
}

/**
 * This function implements the HTML part of the quiz
 * @param {object} path contain path of images
 */
function injectTemplateQuiz(path){
    /*
    
        <img>
        <div>
            <img> * (6 || 8)
        </div>

    */

    // <img> question image
    let questionImg = document.createElement('img')
    questionImg.id = 'quizImage'
    questionImg.setAttribute('src', path.imageQuestion)
    questionImg.setAttribute('width', '300px')
    mainSpace.appendChild(questionImg)

    // <div> to put all answerImages
    let answerDiv = document.createElement('div')
    // <img> making tags of answer images one by one
    for (let i = 0; i < path.imageAnswers.length; i++) {
        let answerImg = document.createElement('img')
        answerImg.setAttribute('width', '70px')
        answerImg.setAttribute('src', path.imageAnswers[i])
        answerImg.setAttribute('id', `option-${i+1}`)
        answerImg.addEventListener("click", function(){
            
            // save user selection
            Object.assign(userAnswers, {[path.id]: this.id})
        
            nextQuiz()
        });
        answerDiv.appendChild(answerImg)
    }
    mainSpace.appendChild(answerDiv)
}

/**
 * Implementation of the final panel that is supposed to show the result to the user
 */
function injectTemplateShowResult(){

    // calculate user true answer
    let score = 0
    for (let i = 0; i < Object.keys(quizAnswers).length; i++) {
        if(quizAnswers[`quiz${i}`] === userAnswers[`quiz${i}`]){
            ++score
        }
        
    }

    // 1) Empty all space
    document.getElementById('mainSpace').innerHTML = score

}

//* Start
injectTemplateWelcome()