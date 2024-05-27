var numSelected = null;
var board = 
   ["-6-5--37-",
    "4--123865",
    "--874-1--",
    "-87------",
    "913--26--",
    "2-4-----7",
    "--5--729-",
    "7263-----",
    "--1265--3"];
var solution = 
   ["162589374",
    "479123865",
    "538746129",
    "687951432",
    "913472658",
    "254638917",
    "345817296",
    "726394581",
    "891265743"];

window.onload = function() {
    makeGame();
}
function makeGame() {
    // for digits 
    for(let i=1; i<=9; i++) {
        let num = document.createElement("div");
        num.id = i;
        num.innerText = i;
        num.addEventListener("click", hoverNumber);
        num.classList.add("num");
        document.getElementById("digits").appendChild(num);
    }

    //for board 
    for(let row=0; row< 9; row++) {
        for(let col=0; col< 9; col++) {
            let tile = document.createElement("div");
            tile.id = row.toString() + "-" + col.toString();
            if(board[row][col] != "-") {
                tile.innerText = board[row][col];
                tile.classList.add("tile-given");
            }
            if(row == 2 || row == 5) {
                tile.classList.add("horizontal-line");
            }
            if(col == 2 || col == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", hoverTile)
            tile.classList.add("tile");
            document.getElementById("board").append(tile); 
        }
    }
}
// for digits
function hoverNumber() {
    if(numSelected != null) {
        numSelected.classList.remove("num-selected");
    }
    numSelected = this;
    numSelected.classList.add("num-selected");
} 
// for board
function hoverTile() {
    if(numSelected) {
        if(this.innerText != "") { 
            return;
        }
        let coordinates = this.id.split("-");
        let row = parseInt(coordinates[0]);
        let col = parseInt(coordinates[1]);

        if(solution[row][col] == numSelected.id) {
            this.innerText = numSelected.id;
        }
    }
}