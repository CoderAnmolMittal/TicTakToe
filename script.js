var currentPlayer = "X";
let count= 0;
const arr= Array(9).fill(null);
function handleClick(colFull){
    const id = Number(colFull.id);
    if(arr[id]!==null){
        alert("Cheating Cheating cheating karta hai tu");
        return;
    }
    else {
    arr[id]= currentPlayer;
    colFull.innerText = currentPlayer;
    count++;
    setTimeout(check,0);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    
}

function check(){
    if(arr[0]!=null && arr[0]===arr[1] && arr[1]===arr[2] && arr[0]!==null){
        alert(arr[0]+" wins!");
        resetGame();
    }
    else if(arr[3]!=null && arr[3]===arr[4] && arr[4]===arr[5] && arr[3]!==null){
        alert(arr[3]+" wins!");
        resetGame();
    }
    else if(arr[6]!=null && arr[6]===arr[7] && arr[7]===arr[8] && arr[6]!==null){
        alert(arr[6]+" wins!");
        resetGame();
    }
    else if(arr[0]!=null && arr[0]===arr[3] && arr[3]===arr[6] && arr[0]!==null){
        alert(arr[0]+" wins!");
        resetGame();
    }
    else if(arr[1]!=null && arr[1]===arr[4] && arr[4]===arr[7] && arr[1]!==null){
        alert(arr[1]+" wins!");
        resetGame();
    }
    else if(arr[2]!=null && arr[2]===arr[5] && arr[5]===arr[8] && arr[2]!==null){
        alert(arr[2]+" wins!");
        resetGame();
    }
    else if(arr[0]!=null && arr[0]===arr[4] && arr[4]===arr[8] && arr[0]!==null){
        alert(arr[0]+" wins!");
        resetGame();
    }
    else if(arr[2]!=null && arr[2]===arr[4] && arr[4]===arr[6] && arr[2]!==null){
        alert(arr[2]+" wins!");
        resetGame();
    }
    else if(!arr.includes(null)){
        alert("It's a draw!");
        resetGame();
    }
    else if(count==8){
        for(let i=0;i<9;i++){
            if(arr[i]==null){
                arr[i]=currentPlayer;
                document.getElementById(i).innerText=currentPlayer;
                setTimeout(check,50);
                
            }
        }
        

    }
}

function resetGame(){
    arr.fill(null);
    const cols = document.querySelectorAll(".col");
    cols.forEach(col => {
        col.innerText = "";
    });
    currentPlayer = "X"; // Reset currentPlayer to "X"
    count=0;
}