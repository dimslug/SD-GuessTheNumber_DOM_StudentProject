/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/
let guessNum = 0;
function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW
    // let numBer = computersNumber
    // switch (true) {
    //     case (userGuess == computersNumber):            
    //         return `The number was ${numBer}`;
    //         break;
    //     case (userGuess > computersNumber):
    //         return "Higher";
    //         break;
    //     case (userGuess < computersNumber):
    //         return "Lower";
    // }

    let numBer = computersNumber;
    
    if (userGuess == computersNumber) {
        guessNum+=1
        console.log(guessNum)
        return `The number was ${numBer}! It took you ${guessNum} guesses!`;
    }   else if (userGuess > computersNumber) {
        guessNum+=1
            console.log(guessNum);
            return `You guessed ${userGuess}, guess Lower. Number of Guesses: ${guessNum}`;
    }   else if (userGuess < computersNumber) {
        guessNum+=1
        console.log(guessNum);
        return `You guessed ${userGuess}, guess Higher. Number of Guesses: ${guessNum}`;
    }

    // YOUR CODE ABOVE
};



//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
    // let firstGuess = num ;
    // console.log(`${firstGuess}`);
    // return `Is it ... ${firstGuess}?`;
}

function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
//    let lowestNum = ;
//    let higherNum = ;


}

