 let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector("#reset-btn");
 let newGameBtn=document.querySelector("#new-btn");
 let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
 let turnO=true;//playerx,playerO
 let count =0;// when it becomes  draw
 const  winPatterns=[
[0,1,2],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,5,6],
[2,4,6],
[6,7,8]
 ];
 const resetGame=()=>{
turnO=true;
count=0;
enableBoxes();
msgContainer.classList.add("hide")
 };

 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
         
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count ++;

       let isWinner= checkWinner();
       if(count === 9 && !isWinner){
        gameDraw();
       }
    });
 });
 const gameDraw=()=>{
    msg.innerText=`Game was Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 };
 const showWinner=( winner)=>{
msg.innerText=`Congratulations,Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
 }
 const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
 const checkWinner=()=>{
for( let pattern of winPatterns){
   // console.log( pattern[0], pattern[1],pattern[2]);
   let post1Val= boxes[pattern[0]].innerText;
   let pos2tVal=boxes[pattern[1]].innerText;
    let post3Val= boxes[pattern[2]].innerText;
    if(post1Val != "" && pos2tVal != "" && post3Val != ""){
        if(post1Val === pos2tVal && pos2tVal === post3Val){
            
            showWinner(post1Val);
            return true;
        }
    }
}
 };
 newGameBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);
