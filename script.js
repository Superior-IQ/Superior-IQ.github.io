
//Preparing starter page

let mainSpace = document.createElement('div')

mainSpace.id = 'mainSpace'

document.body.appendChild(mainSpace)

let appName = document.createElement('h1')

appName.id = 'appName'

appName.innerText = 'Superior IQ'

mainSpace.appendChild(appName)

let userNameInput = document.createElement('input')

userNameInput.className = 'textField'

userNameInput.type = 'text'

userNameInput.placeholder = 'Name'

mainSpace.appendChild(userNameInput)

let userAgeInput = document.createElement('input')

userAgeInput.className = 'textField'

userAgeInput.type = 'number'

userAgeInput.placeholder = 'Age'

mainSpace.appendChild(userAgeInput)


let startBtn = document.createElement('input')

startBtn.id = 'startBtn'

startBtn.type = 'submit'

startBtn.value = 'Start'

mainSpace.appendChild(startBtn)


