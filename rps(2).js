let user_score = 0;
let com_score= 0;

const choices = document.querySelectorAll(".choice");
const user_img = document.querySelector(".user-turn img");
const comp_img = document.querySelector(".comp-turn img");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

let draw = ()=>{
    msg.innerText = "Draw Match Nobody Wins!! RETRY";
};

let userwin = ()=>{
    user_score+=1;
    user.innerText = user_score;
    msg.innerText = "Congrats!!!! You Win";
};

let cmpwin = ()=>{
    com_score +=1;
    comp.innerText = com_score;
    msg.innerText = "Upps!!!! You loose";
};

let gencomchoice = ()=>{
    let arr = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
};

let playgame = (user_choice)=>{
    console.log("ME: ",user_choice);
    const comp_choice = gencomchoice();
    console.log("COMPUTER: ",comp_choice);
    comp_img.src = `${comp_choice}.png`;

    if(comp_choice == user_choice){
        draw();
    }
    else{
        if(user_choice === "rock"){
            if(comp_choice == "paper")
                cmpwin();
            else
                userwin();
        }
        if(user_choice == "paper"){
            if(comp_choice == "rock")
                userwin();
            else
                cmpwin();
            
        }
        if(user_choice == "scissors"){
            if(comp_choice == "rock")
                cmpwin();
            else
                userwin();
        }
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        user_img.src = `${user_choice}.png`;
        playgame(user_choice);
    })
});