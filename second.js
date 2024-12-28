let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX , playerO
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const reset = ()=>{
    turnO = true;
     count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    
  }
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      count++;
  
      let isWinner = checkwinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });

  const disableBoxes = ()=>{
    for (let box of boxes ){
        box.disabled = true;
    }
  }
  const enableBoxes = ()=>{
    for (let box of boxes ){
        box.disabled = false;
        box.innerText = "";
    }
  }
  const showwinner = (Winner)=>{
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
  const checkwinner = ()=>{
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                console.log("Winner",pos1Val);
                showwinner(pos1Val);
            }

        }

    }
  }
  newGameBtn.addEventListener("click", reset);
  resetbtn.addEventListener("click", reset);
  
  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
 
