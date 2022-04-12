// questions
let questions = [
    {
        title: "How to get an element by ID?",
        answ: [
            "document.getElementById('id')",
            "document.querySelectorAll('.id')", 
            "document.querySelectorAll('id')"
        ]
    },
    {
        title: "What is the correct way to create an array?",
        answ: [
            "let arr = [];",
            "let arr = {};",
            "const arr = {};"
        ]
    },
    {
        title: "What is the most used way to show a message in the console?",
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
        title: "How to know the number of letters that a variable of type 'String'?",
        answ: [
            "variable.length",
            "variable.letters",
            "variable.getNumLetters"
        ]
    },
    {
        title: "What is the type of boolean variable?",
        answ: [
            "let bol = true",
            "let bol = 'false'",
            "let bol = 55"
        ]
    },
    {
        title: "How to maka a loop?",
        answ: [
            "for(i=0;i<5;i++){}",
            "loop(i=0;i<5;i++){};"
        ]
    },
] 

// randomize array with lodash
questions = _.shuffle(questions);
const qlen = questions.length;
