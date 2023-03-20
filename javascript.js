
function createGrid(length=16) {
    let container = document.createElement("div")
    container.id="container"
    document.body.appendChild(container)

    for (let i = 1;i<=length;i++) {
        let row =document.createElement("div")
        row.classList.add("row")
        for (let i = 1;i<=length;i++) {
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
    else if (colorMethod === "random")  {square.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);}
    else {darken(square)}
}

function darken(square) {
    let color= window.getComputedStyle(square).backgroundColor
    let colorList=color.slice(4,color.length-1).split(",")
    let colorListDarkend = colorList.map((color)=> Math.max(0,Math.floor(color-25.5)))
    color = "rgb(" + colorListDarkend.join(",") + ")"
    square.style.backgroundColor = color


}

let newGridButton = document.querySelector("#newGrid")
newGridButton.addEventListener("click",changeGrid)

let colorMenu=document.querySelector("#colorMenu")
let colorMethod = "default";
colorMenu.addEventListener("change",()=>{colorMethod=colorMenu.value})

createGrid();
