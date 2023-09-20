const grid = document.querySelector(".grid")
let gridNumber = 32

for (let column = 0; column < gridNumber; column++) {
    let column = document.createElement("div")
    column.classList = "column"

    for (let row = 0; row < gridNumber; row++) {
        let row = document.createElement("div")
        row.classList = "row"
        column.appendChild(row)
    }
    grid.appendChild(column)
}
