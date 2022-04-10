// questions
let questions = [
    {
        title: "How to get an element by ID with JS?",
        answ: [
            "document.getElementById('id')",
            "document.getElementById('#id')", 
            "document.querySelectorAll('.id')", 
            "document.querySelectorAll('id')"
        ]
    },
    {
        title: "What is the correct way to create an array with JS?",
        answ: [
            "let arr = [];",
            "const arr = [];", 
            "let arr = {};",
            "const arr = {};", 
        ]
    },
    {
        title: "What is the most used way to show a message in the console with JS?",
        answ: [
            "console.log('Hello World!')",
            "print('Hello World!')", 
            "var_dump('Hello World!');",
            "echo 'Hello World!';", 
        ]
    },
    {
        title: "How to create an object with JS?",
        answ: [
            "let obj = {}",
            "const obj = {}",
            "let obj = []",
            "const obj = []",
            "let obj = create Object();",
            "const obj = new Object();"
        ]
    }
]

// randomize array with lodash
questions = _.shuffle(questions);
const qlen = questions.length;