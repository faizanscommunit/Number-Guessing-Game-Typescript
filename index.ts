#! /usr/bin/env node

/* Algorithm
1. First user has to tell his Name 
2. Now he/she will select a level (i.e: Beginner, Moderate, Extreme)
The range of numbers will be increased according to the specified level (i.e: Beginner [1-10] ... )
3. Then he/she will be asked to guess a number
4. Then the result will be shown
5. After that user will be asked if he wants to play again
6. On returning "YES" as answer, the game will start again from number guess point.*/


import inquirer from "inquirer";
console.log(`Welcome to Number Guessing Game by Faizanscommunit`);
// Asking User's Name
const username = await inquirer.prompt([
    {
        name: 'user_name',
        type: "string",
        message: "Please enter your name: "
    }
])
// Selecting a Level
const level = await inquirer.prompt([
    {
        name:"selected_level",
        type: "list",
        message:`Select your desired difficulty level: `,
        choices:['Beginner', 'Moderate','Extreme'],
    }
])
// Beginner
let range:number = 10;

if (level.selected_level === 'Beginner'){
  range = 10; 
}
// Moderate -- Value will change
else if (level.selected_level === 'Moderate'){
    range = 20;
}
// Extreme -- Value will change
else if (level.selected_level === 'Extreme') {
    range = 30;
}

let play_again:boolean = true;

while (play_again == true){

    let random_number:number = Math.floor(Math.random() * range + 1);
    const answers = await inquirer.prompt([
        {
            name: "user_guessed_answer",
            type: "number",
            message: `Please guess a number between 1 - ${range}: `,
        }

    ]);


    if (answers.user_guessed_answer === random_number){
        console.log(`Congragulations! ${username.user_name} you Guessed the correct Number!`);
    } else {
        console.log(`Oops! ${username.user_name} Your answer is incorrect, The Correct Answer is ${random_number}`);
    }

    const ask_play_again = await inquirer.prompt([
        {
            name: "ask_to_play_again",
            type: "list",
            message: `Do you want to Play again: `,
            choices:['Yes, I want', 'NOPE'],
        }

    ]);

    if (ask_play_again.ask_to_play_again === "NOPE"){
        play_again = false;
    }
}