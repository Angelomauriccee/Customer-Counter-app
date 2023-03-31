let countEl = document.getElementById("count-el");
let prevContent = document.getElementById("prev-content")

let count = 0

function add() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let saveCount = count + " - "
    prevContent.textContent += saveCount
}

function reset() {
    count = 0
    countEl.textContent = 0
}