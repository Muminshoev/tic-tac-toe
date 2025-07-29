const cells = document.querySelectorAll(".cell");

let inputArray = [];


let currentPlayer = "X";
let board = ["","","", "","","", "","","",]
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [2, 4, 6]
]

function gameStart() {
    boarActivate();
    
    
}

function boarActivate() {
    cells.forEach(i => {
    i.addEventListener("click", () => {
        let cellBody = i;
        
        checkCell(cellBody);

        cellBody.innerHTML = currentPlayer;

        
        
        changePlayer()
        getWinner(cellBody)
        checkWin()
    })
})
}


function checkCell(cellBody) {
    if(cellBody.innerHTML === "X" || cellBody.innerHTML === "O"){
        console.log("NO")
        return false
    }
}

function changePlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    }else{
        currentPlayer = "X"
    }
}

function getWinner(cellBody) {
    
    let cellId = cellBody.id;
    board[cellId] = cellBody.innerHTML;
}

function checkWin() {
    for(let i = 0; i < winConditions.length; i++) {
        const combo = winConditions[i];
        const a = board[combo[0]];
        const b = board[combo[1]];
        const c = board[combo[2]];

        

        if(a !== "" && a === b && a == c){
            console.log("win")
            console.log(a)
            console.log(b)
            console.log(c)
           
        }
    }
}

gameStart()

