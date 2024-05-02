let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;          // To track draw condition
let turnO = true         // player X, player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
           

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO)
        {
            box.innerText ="O";
            turnO = false;
            box.style.color = "#2a764e"; 
        }
        else{
            box.innerText = "X";
            turnO = true;
            box.style.color = "#13a557"; 
            
        }
        box.disabled = true;
        count++;
        let isWinner = toCheckWin();
        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText =`Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
        msg.innerText =`Congratulations !! Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    
}

const draw = (count) => {
    msg.innerText =`Draw`;

}

const toCheckWin = (count) => {
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if(pos1Val != "" && pos2Val != "" && pos3Val != "" )
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
            if(count == 9)
            {
                draw(count);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



 