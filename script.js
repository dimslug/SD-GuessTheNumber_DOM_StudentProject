/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/
let hiNum = 100;
let loNum = 1;
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
        guessNum += 1
        console.log(guessNum)
        return `The number was ${numBer}! It took you ${guessNum} guesses!`;
    } else if (userGuess > computersNumber) {
        guessNum += 1
        console.log(guessNum);
        return `You guessed ${userGuess}, guess Lower. Number of Guesses: ${guessNum}`;
    } else if (userGuess < computersNumber) {
        guessNum += 1
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
    randGuess = num
    console.log(`hiNum : ${hiNum}, loNum: ${loNum}, randGuess: ${randGuess}`);
    return (`Is it... ${num}?`)
};

let randGuess;
let prevNum;

function randInt(min, max) {
    randGuess = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(`${randGuess}`);
    return randGuess;
}


function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
    if (reply == 'correct') {
        prevNum = randGuess;
        return `Your number is ${prevNum}.`

    } else if (reply == 'higher' && hiNum - loNum == 2 || hiNum < loNum ) {

        return "I think you're trying to trick me."

    } else if (reply == 'lower' && hiNum - loNum == 2 || hiNum < loNum) {

        return "I think you're trying to trick me."

    } else if (reply == 'lower') {
        hiNum = randGuess - 1;// assign new hiNum - updates range

        prevNum = randGuess;

        console.log(`hiNum : ${hiNum}, loNum: ${loNum}, randGuess: ${randGuess}, prevNum ${prevNum}`);

        return (`Lower? Is it... ${randInt(loNum, hiNum)}?`);
    } else if (reply == 'higher') {
        loNum = randGuess + 1; // reassign loNum - updates range

        prevNum = randGuess;

        console.log(`hiNum : ${hiNum}, loNum: ${loNum}, randGuess: ${randGuess} prevNum ${prevNum}`);

        return (`Higher? Is it... ${randInt(loNum, hiNum)}?`);
    }



    // if(reply == 'higher') {
    //         console.log(`Previous Guess: ${prevGuess}`);
    //         console.log(`loNum : ${loNum}`);
    //         console.log(`hiNum : ${hiNum}`);
    //     loNum = prevGuess
    //     return `Higher? How about... ${nextGuess}?`
    // } else if (reply == 'lower') {
    //         console.log(`Previous Guess: ${prevGuess}`);
    //         console.log(`loNum : ${loNum}`);
    //         console.log(`hiNum : ${hiNum}`);
    //     hiNum = prevGuess

    //     return `Lower? What about... ${nextGuess}?`
    // } else if (reply == 'correct') {
    //         console.log(`Previous Guess: ${prevGuess}`);
    //         console.log(`loNum : ${loNum}`);
    //         console.log(`hiNum : ${hiNum}`);
    //     return `Is it ... ${nextGuess}?`
    // } else {
    //     return ''
    // }


}

