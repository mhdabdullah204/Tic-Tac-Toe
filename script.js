const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector('#reset-btn');
const newGamtBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

let turn0 = true;  //player X , player O

const winPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        box.innerText = "";
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            console.log("Box Was  Clicked")

        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })

    
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congrates , Winner is  ${winner}`
    msgContainer.classList.remove("hide");
}




const checkWinner = ()=>{
    for(pattern of winPattern){
            
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val  = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                
                
                showWinner(pos1Val);
            }
        }

    }
};

const resetGame = () =>{
    turn0 = true;
    enableBoxes();

    msgContainer.classList.add("hide");
}

newGamtBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);