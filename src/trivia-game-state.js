export const programmingTriviaQuestions = [
    {
        text: 'What is an algorithm?',
        correctAnswer: 'A',
        options: {
            A: 'A sequence of instructions that solves a specific problem.',
            B: 'A physical component of a computer system.',
            C: 'A type of computer virus.'
        },
        selectedAnswer: '' // Empty string for initial state
    },
    {
        text: 'Which term describes the process of finding and fixing errors in a program?',
        correctAnswer: 'B',
        options: {
            A: 'Compiling',
            B: 'Debugging',
            C: 'Executing'
        },
        selectedAnswer: ''
    },
    {
        text: 'What is a variable used for in programming?',
        correctAnswer: 'A',
        options: {
            A: 'To store data values.',
            B: 'To execute a program.',
            C: 'To define a loop.'
        },
        selectedAnswer: ''
    },
    {
        text: 'In most programming languages, which symbol is used to assign a value to a variable?',
        correctAnswer: 'B',
        options: {
            A: '==',
            B: '=',
            C: '!='
        },
        selectedAnswer: ''
    },
    {
        text: 'What kind of control structure executes a set of instructions repeatedly based on a condition?',
        correctAnswer: 'C',
        options: {
            A: 'Conditional Statement (e.g., if-else)',
            B: 'Function Call',
            C: 'Loop (e.g., for, while)'
        },
        selectedAnswer: ''
    }
];
//const questionsOnly = programmingTriviaQuestions.map(question => question.text);
//console.log(questionsOnly);