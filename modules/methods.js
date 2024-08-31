/**
 * This function is a one-time function that returns a large amount of file addresses as an array
 * - Just turning a long manual process into a simple automated process
 * - Output: [{}, {}, {}]
 * 
 * @returns {Array}
 */
export function setQuizImages(){
    const path = './Images/quiz'
    const numberOfFolders = 30
    let result = []

    let x = 1
    while (x <= numberOfFolders){
        let obj = {
            id: `quiz${x}`,
            imageQuestion: `${path}/${x}/test${x}.png`,
            imageAnswers: []
        }

        let len = x < 13 ? 6 : 8
        for (let i = 1; i <= len; i++) {
            obj.imageAnswers.push(
                `${path}/${x}/${x}-${i}.png`
            )
        }
        
        result.push(obj)
        x++
    }

    return result
};

/**
 * This function returns the correct answer of all quizzes
 * - Output: { 'quizX': 'option-X}
 * 
 * @returns {object}
 */
export function setQuizTrueResults(){
    return {
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
}

export function calculateIQ(numberOfQuiz, CorrectAnswer){
    
    let result = CorrectAnswer / numberOfQuiz

    switch (true) {
        case (result <= 0.2):
            return 'Low'

        case (result <= 0.4):
            return 'Below Average'

        case (result <= 0.6):
            return 'Average'

        case (result <= 0.8):
            return 'High'

        case (result <= 1):
            return 'Genius'
    }
}