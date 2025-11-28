let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");

//setting variables
let turn0= true; //playerX, player0

//winning patterns stored in an array
const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8], 
];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0) {
            //playyer 0
            box.innerText= "0";
            turn0=false;
        }
        else{
            //playerX
            box.innerText="X";
            turn0=true;
        }
    });
});