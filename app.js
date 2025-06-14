let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newgamebtn = document.querySelector(".new-btn");
let msgcontainer =  document.querySelector(".msg-container");
let msg= document.querySelector(".msg")

let turn0 = true;
 
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame =()=>{
    turn0 = true;
    enablebox();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0 = true;
        }
        box.Disabled=true;
        checkwinner();
    });
});
const disblebox=()=>{
    for(let box of boxes){
        box.Disabled = true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.Disabled = false;
        box.innerText=""
    }
}
const showwinner=(winner)=>{
    msg.innerText='Congratulation, winner is '+winner;
    msgcontainer.classList.remove("hide");
    disblebox();
};


const checkwinner=()=>{
    for ( let pattern of winpatterns){
       let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1!="" &&posval2!=""&& posval3!=""){
            if(posval1==posval2 && posval2==posval3){
               console.log("winner") ;

               showwinner(posval2);
            };
        };
    };
};

newgamebtn.addEventListener("clicked",resetgame);
resetBtn.addEventListener("clicked",resetgame);