import chalk from 'chalk';
import { select } from '@inquirer/prompts';


export async function showMainMenu(triviaQuestions) {
    const action = await select({
        message: 'Main Menu',
        choices: [
            { name: 'Start Game', value: 'start' },
            { name: 'Quit', value: 'quit' },
        ],
    });
    switch (action) {
    case 'start':
        await startGame(triviaQuestions);
        break;
    case 'quit':
        console.log('Goodbye!');
        process.exit(0);
    }
}

export async function startGame(triviaQuestions) {
    // We start at the first question, which is index 0
    let currentPosition = 0;

    /* 
        We run a while loop. Inside the loop, we increase current position by 1. The loop will stop when 
        currentPosition >= triviaQuestions.length

    */
    while (currentPosition < triviaQuestions.length) {

        // Get the question at the current position
        const currentQuestion = triviaQuestions[currentPosition];

        // Get the options for the question, as an array of key-value pairs
        const options = Object.entries(currentQuestion.options);
        /* 
            The select function expects a message (the question to show the user) and choices (the options the user will pick from)
            The message is the question text
            The choices are expected to be an array of object. Each object contains a name (what is shown to the user) and value (what is saved after user has selected)
            We do options.map to convert the options into the expected format of choices
            We await for the user to select an answer, and save it in userAnswer
        */
        const userAnswer = await select({
            message: currentQuestion.text,
            choices: options.map((choice) => ({ name: `${choice[0]}) ${choice[1]}`, value: choice[0] })),
        });

        // We save the answer that the user has selected
        currentQuestion.selectedAnswer = userAnswer;
        // We increment currentPosition, so that we don't get an infinite loop
        currentPosition += 1;
    }
    // Initialize an object to store results. The object has three keys (correct, wrong and skipped) whose values start at zero
    const results = {
        correct: 0,
        wrong: 0,
        skipped: 0
    };
    for (let i = 0; i < triviaQuestions.length; i++) {
        const question = triviaQuestions[i];

        // Extract correctAnswer and selectedAnswer from the question
        const correctAnswer = question.correctAnswer;
        const selectedAnswer = question.selectedAnswer;
        // Check if the selectedAnswer is the correct one, and update the results
        const IsCorrect = selectedAnswer === correctAnswer;
        if (IsCorrect) {
            results.correct += 1;
        }
        else {
            results.wrong += 1;
        }
    }
    console.log(chalk.red('GAME OVER!'));
    console.log(chalk.yellow(`You got ${results.correct} questions right, and ${results.wrong} questions wrong.`));

}