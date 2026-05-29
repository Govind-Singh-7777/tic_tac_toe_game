let boxes = document.querySelectorAll(".cell");
let resetbtn = document.querySelector("#reset-button");
let winbox = document.querySelector("#winbox");

let win_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turn0 = false;

const changecolor = (box)=>{
    if(box.innerText === "O"){
        
    }
}

for(let box of boxes){
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "O";
            box.style.color = "green";
            turn0=false;
        }else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;
        changecolor(box);
        checkwinner();
        checkDraw();
    })
}

const showWinner = (winner) =>{
    winbox.innerText = `Congratulation, winner is ${winner}`;
    winbox.classList.remove("hide");
}
const resetGame = () => {
    count=0;
    turn0 = false;
    enableboxes();
    winbox.classList.add("hide");
}
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkDraw = ()=>{
    let count=0;
    for(let box of boxes){
        if(box.innerText != ""){
            count++;
        }
    }
    if(count===9){
        winbox.innerText = "The Match is Draw";
        winbox.classList.remove("hide");
    }
}
const checkwinner = () =>{
    for(let chance of win_pattern){
        let pos1 = boxes[chance[0]].innerText;
        let pos2 = boxes[chance[1]].innerText;
        let pos3 = boxes[chance[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner--", pos1);
                for(let box of boxes){
                    box.disabled=true;
                }
                showWinner(pos1);
            }
        }
    }
}
resetbtn.addEventListener("click",resetGame);
