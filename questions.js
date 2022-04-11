// questions
let questions = [
    {
        title: "How to get an element by ID with JS?",
        answ: [
            "document.getElementById('id')",
            "document.querySelectorAll('.id')", 
            "document.querySelectorAll('id')"
        ]
    },
    {
        title: "What is the correct way to create an array with JS?",
        answ: [
            "let arr = [];",
            "let arr = {};",
            "const arr = {};"
        ]
    },
    {
        title: "What is the most used way to show a message in the console with JS?",
        answ: [
            "console.log()",
            "print()", 
            "var_dump();"
        ]
    },
    {
        title: "How to create an object with JS?",
        answ: [
            "let obj = {}",
            "const obj = {}",
            "const obj = []"
        ]
    },
    {
        title: "How to know the number of letters that a variable of type 'String' has in JS?",
        answ: [
            "variable.length",
            "variable.letters",
            "variable.getNumLetters"
        ]
    }
]

// randomize array with lodash
questions = _.shuffle(questions);
const qlen = questions.length;
