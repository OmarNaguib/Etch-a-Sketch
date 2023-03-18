
function createGrid(length=16) {
    let container = document.createElement("div")
    container.id="container"
    document.body.appendChild(container)

    for (let i = 1;i<=length;i++) {
        let row =document.createElement("div")
        row.classList.add("row")
        for (let i = 1;i<=16;i++) {
            let square = document.createElement("div");
            square.addEventListener("mouseover",() => square.classList.toggle("hover"))
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

let newGridButton = document.querySelector("#newGrid")
newGridButton.addEventListener("click",changeGrid)

createGrid();