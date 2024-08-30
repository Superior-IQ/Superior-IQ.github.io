/**
 * This function compares two objects
 * 1. Each input object: {key: value, key: value, ...}
 * 2. Output object : {true: 0, false: 0}
 * 
 * @param {object} answers Correct values 
 * @param {object} userAnswers Input values
 * @returns {object} As stated above
 */
export function comparTwoObjects(correctValue, inputValue){
    let right = 0
    let wrong = 0

    for (let key in correctValue){

        // If the answers were the same
        if (correctValue[key] === inputValue[key]){
            right++
        } else {
            wrong++
        }
    }

    return {
        true: right,
        false: wrong
    } 
}

/**
 * This function takes an array and returns one of its elements randomly
 * - Option: If the 'removeIndex' is equal to true, the element is removed from the array.
 * 
 * @param {array} array The desired array
 * @param {boolean} removeIndex Remove the random element
 * @returns {*} A random element of array
 */
export function getRandomIndexOfArray(array, removeIndex=false){

    //* Validation: If it is not of array data type
    if (!Array.isArray(array)){
        return `Fail: wrong data type (${typeof array})`
    }

    // Precess: Get random element of array
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomElement = array[randomIndex]

    // Precess: If "removeIndex=true", remove the element from the array
    if (removeIndex){
        array.splice(randomIndex, 1)
    }

    return randomElement
}
