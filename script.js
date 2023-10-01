const grid = document.querySelector(".grid")
const changeSizeBtn = document.querySelector(".changeSizeBtn")
let gridNumber = 32

changeSizeBtn.addEventListener("click", changeSize)

function changeSize(gridNumber) {
    let gridSize = 1000
    while (gridSize > 100) {
        gridSize = parseInt(
            prompt(
                "How many squares per side would you like? Enter a value between 1 and 100"
            )
        )
    }
    removeGrid(grid)
    gridNumber = gridSize
    printGrid(gridNumber)
}

function printGrid(gridNumber) {
    for (let column = 0; column < gridNumber; column++) {
        let column = document.createElement("div")
        column.classList = "column"

        for (let row = 0; row < gridNumber; row++) {
            let row = document.createElement("div")
            row.classList = "row"
            column.appendChild(row)
            row.addEventListener("mouseover", function () {
                let bgColor = random_bg_color()
                row.style.background = bgColor
            })
        }
        grid.appendChild(column)
    }
}

function removeGrid(grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"
    return bgColor
}

printGrid(gridNumber)
