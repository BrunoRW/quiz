// elementos
const inpName = document.getElementById('name');
const content = document.getElementById('content');
const title = document.getElementById('title');

// variaveis iniciais
const alpha = "abcdefghijklmnopqrstuvwxyz";
let yansw = [];
let name;      
let turn = 0;

// functions

// next question

// randomize questions
const getQuests = ()=> {
    // clear content 
    content.innerHTML = "";

    // get question 
    let q = questions[turn];

    let nansw = _.shuffle(q.answ);

    title.innerText = q.title;
    content.className = "quest-turn"
    for(i in nansw){
        content.innerHTML += `
            <p class='answ' onclick='sel(this)'>
                <span class='span-l'>${alpha[i]})</span> 
                ${nansw[i]}
            </p>
        `;
    }

    content.innerHTML += `
        <div class="bt-out">
            <button class='bt' onclick='next()'>Next</button>
        </div>
    `;
}

const checkAnswers = ()=> {
    let points = 0;
    let checkAlls = "";
    if(yansw.length == qlen){
        for(i in questions){
            if(questions[i].answ[0] == yansw[i].answ){
                points++;
                checkAlls += `<span class='ans correct'>${i}</span>`;
            } else {
                checkAlls += `<span class='ans wrong'>${i}</span>`;
            }
        }//loop
        title.innerText = `Hey, ${name}`;
        content.innerHTML = `
            <p class='score'>Your Score: ${points}/${qlen}</p>
            <div class="answersAll">
                ${checkAlls}
            </div>
            <button class="bt" onclick="reload()">Reload</button>                    
        `;

        content.className = "mid-turn";
    }//if
}//function

const next = ()=> {
    let answer = document.querySelectorAll('.selected')[0];
    if(answer && yansw.length < qlen){
        // get answer and insert into array      
        answer.children[0].style.display = "none";
        yansw.push({answ: answer.innerText});

        if(turn < qlen - 1){     
            turn++;
            getQuests();
        } else {
            checkAnswers();
        }
    } // if
} //func

// start quiz - click "iniciar" name menu 
const startQuiz = ()=> {
    let value = inpName.value;
    if(value){
        name = value;
        getQuests();
    }
}

// select answer
const sel = (e)=> {
    let answs = document.querySelectorAll('.answ');
    for(i=0;i<answs.length;i++){
        answs[i].classList.remove('selected')
        answs[i].children[0].classList.remove('sel-sp')
    }
    e.classList.add('selected')
    e.children[0].classList.add('sel-sp')
}

const reload = ()=>{
    window.location.reload();
}