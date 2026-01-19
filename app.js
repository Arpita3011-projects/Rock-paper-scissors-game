let  userScore=0;
let  computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userscore");
const computerScorePara=document.querySelector("#computerscore");

const genComputerChoice=()=>{
   let options=["rock","paper","scissors"];
   const randIdx =Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game draw. Play again!";
    msg.style.backgroundColor="#081b31";
    
}
const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";

    
    }else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You lose ! ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}
const playgame=(userChoice)=>{
    console.log("user choice=", userChoice);
    const computerChoice=genComputerChoice();
    console.log("Computer choice=",computerChoice);
    if(userChoice===computerChoice){
            drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= computerChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=computerChoice==="scissors"?false:true;
        }else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id").toLowerCase();
        playgame(userChoice);
    });
});
