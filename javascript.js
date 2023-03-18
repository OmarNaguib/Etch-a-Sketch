
function createGrid(length=16) {
    let container = document.createElement("div")
    container.id="container"
    document.body.appendChild(container)

    for (let i = 1;i<=length;i++) {
        let row =document.createElement("div")
        row.classList.add("row")
        for (let i = 1;i<=16;i++) {
            let square = document.createElement("div");
            square.addEventListener("mouseover",() => colorSquare(square))
            square.classList.add("square")
            row.appendChild(square)

        }
        container.appendChild(row)
    }
}

function changeGrid() {
    let length = Math.min(100,prompt("Choose the new size for your grid"))
    let container = document.querySelector("#container")
    container.remove()
    createGrid(length)
}

function colorSquare(square) {
    if (colorMethod === "default") {square.classList.toggle("hover")}
    if (colorMethod === "random")  {square.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);}
    
}

let newGridButton = document.querySelector("#newGrid")
newGridButton.addEventListener("click",changeGrid)

let colorMenu=document.querySelector("#colorMenu")
let colorMethod = "default";
colorMenu.addEventListener("change",()=>{colorMethod=colorMenu.value})

createGrid();
