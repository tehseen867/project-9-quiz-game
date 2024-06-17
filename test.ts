#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"


function displayWelcomeMessage() {
    return new Promise((resolve) => {
        let welcomeMessage = chalkAnimation.rainbow("\n<<<===>>> WELCOME ~ TO ~ QUIZ GAME ~ FROM ~ TEHSEEN <<<===>>>\n")
        setTimeout(() => {
            welcomeMessage.stop();
            resolve("");
        }, 2000);
    });
}

class final_result {
    name: string
    age: number
    gender: string
    final_score: string
    date: string
    time: string
    constructor(name: string, gender: string, age: number, final_score: string, date: string, time: string) {
        this.name = name
        this.age = age
        this.gender = gender
        this.final_score = final_score
        this.date = date
        this.time = time
    }
}
let score = 0
let studentWhoParticipate: any[] = []
let dateOfAnswer = new Date()
let dateInString = dateOfAnswer.toDateString()
let timeInString = dateOfAnswer.toLocaleTimeString()

async function Quiz() {
    let userData = await inquirer.prompt([{
        name: 'askForName',
        type: 'input',
        message: chalk.yellow('Hey user! what is your name?'),
        validate: (NAME) => {
            if ((NAME).trim('') !== '' && isNaN(NAME)) {
                return true
            }
            else {
                console.log(chalk.red('please enter valid name in string'))
            }
        }
    },

    {
        name: 'askForAge',
        type: 'input',
        message: chalk.yellow('what is your age?'),
        validate: (AGE) => {
            if ((AGE).trim('') !== '' && (!isNaN(AGE))) {
                return true
            }
            else {
                console.log(chalk.red('please enter valid age in digits'))
            }
        }
    },
    {
        name: 'askForGender',
        type: 'list',
        message: chalk.yellow('select your gender:'),
        choices: ['Male', 'Female', 'Non-Binary']
    }])
    let startOrNot = await inquirer.prompt([{
        name: 'confirm',
        type: 'list',
        message: chalk.magentaBright('\nstart quiz?'),
        choices: ['Yes', 'No']
    }])
    if (startOrNot.confirm === 'Yes') {
        let Questions = await inquirer.prompt([{
            name: "Q1",
            type: "list",
            message: chalk.greenBright('\nWhich of the following methods can be used to convert a string to an integer in JavaScript?'),
            choices: ['(A) String()',
                '(B) parseInt()',
                '(C) parseFloat()',
                '(D) toFixed()']
        },

        {
            name: "Q2",
            type: "list",
            message: chalk.greenBright('\nWhich of the following is a correct way to define a function in JavaScript?'),
            choices: ['(A) function myFunction = () {}',
                '(B) function myFunction() {}',
                '(C) def myFunction() {}',
                '(D) fn myFunction() {}',]
        },

        {
            name: "Q3",
            type: "list",
            message: chalk.greenBright('\nIn JavaScript, what is the scope of a variable declared with let inside a block?'),
            choices: ['(A) Global scope',
                '(B) Function scope',
                '(C) Block scope',
                '(D) Module scope']
        },

        {
            name: "Q4",
            type: "list",
            message: chalk.greenBright('\nHow can you create a new object in JavaScript?'),
            choices: ['(A) var obj = {};',
                '(B) var obj = new Object();',
                '(C) var obj = Object.create(null);',
                '(D) All of the above']
        },

        {
            name: "Q5",
            type: "list",
            message: chalk.greenBright('\nWhich method is used to add an element to the end of an array in JavaScript?'),
            choices: ['(A) push()',
                '(B) unshift()',
                '(C) pop()',
                '(D) shift()'
            ]
        },

        {
            name: "Q6",
            type: "list",
            message: chalk.greenBright('\nWhich method is used to handle errors in a JavaScript Promise?'),
            choices: ['(A) .then()',
                '(B) .catch()',
                '(C) .finally()',
                '(D) .error()']
        },

        {
            name: "Q7",
            type: "list",
            message: chalk.greenBright('\nWhat does async keyword do in JavaScript?'),
            choices: ['(A) Converts a function into a generator',
                '(B) Declares a function that returns a Promise',
                '(C) Blocks the event loop',
                '(D) Allows synchronous function execution']
        },

        {
            name: "Q8",
            type: "list",
            message: chalk.greenBright('\nWhich of the following is not a JavaScript event?'),
            choices: ['(A) click',
                '(B) doubleClick',
                '(C) mouseover',
                '(D) keydown']
        },

        {
            name: "Q9",
            type: "list",
            message: chalk.greenBright('\nQuestion: What is the type of null in JavaScript?'),
            choices: ['(A) undefined',
                '(B) object',
                '(C) null',
                '(D) number']
        },

        {
            name: "Q10",
            type: "list",
            message: chalk.greenBright('\nWhich method is used to select an element by its id in JavaScript?'),
            choices: ['(A) getElementByClass()',
                '(B) querySelectorAll()',
                '(C) getElementById()',
                '(D) getElementsByName()']
        }])

        if (Questions.Q1 === '(B) parseInt()') { score++ }
        if (Questions.Q2 === '(B) function myFunction() {}') { score++ }
        if (Questions.Q3 === '(C) Block scope') { score++ }
        if (Questions.Q4 === '(D) All of the above') { score++ }
        if (Questions.Q5 === '(A) push()') { score++ }
        if (Questions.Q6 === '(B) .catch()') { score++ }
        if (Questions.Q7 === '(B) Declares a function that returns a Promise') { score++ }
        if (Questions.Q8 === '(B) doubleClick') { score++ }
        if (Questions.Q9 === '(B) object') { score++ }
        if (Questions.Q10 === '(C) getElementById()') { score++ }
    }
    else {
        process.exit()
    }
    let scoreInString = `${score} out of 10`
    let result_time = new final_result(userData.askForName, userData.askForAge, userData.askForGender, scoreInString, dateInString, timeInString)
    studentWhoParticipate.push(result_time)
    let checkOrExit = await inquirer.prompt([{
        name: 'checkOrNot',
        type: 'list',
        message: chalk.magentaBright('\nwhat is your next step?'),
        choices: ['Check result', 'Exit']
    }])
    if (checkOrExit.checkOrNot === 'Check result') {
        let AllUsers = studentWhoParticipate.map(student => student.name)
        let seeResult = await inquirer.prompt([{
            name: 'slect_user',
            type: 'list',
            message: chalk.magentaBright('Select user to see its result'),
            choices: AllUsers
        }])
        if (studentWhoParticipate.length > 0) {
            let findUserResult = studentWhoParticipate.find(student => student.name === seeResult.slect_user)
            if (findUserResult) {
                console.log(findUserResult)
            }
        }
    }

    else {
        process.exit()
    }
    let askForTryAgain = await inquirer.prompt([{
        name: 'Try_again',
        type: 'list',
        message: chalk.magentaBright('Try again ?'),
        choices: ["Yes", "No"]
    }])
    if (askForTryAgain.Try_again === "Yes") {
        Quiz()
    }
    else {
        process.exit()
    }
}
async function execution() {
    await displayWelcomeMessage()
    await Quiz()
}
execution()