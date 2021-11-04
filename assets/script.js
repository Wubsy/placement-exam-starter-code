// First, tell us your name
let yourName = "William Busby" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle


let total = 0

// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    updateGb()
})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb--
    updateGb()
})

//Chocolate chip
document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    updateCc()
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc--
    updateCc()
})

//Sugar sprinkle
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    updateSugar()
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar--
    updateSugar()
})



function updateGb() {
    let gbCount = document.querySelector('#qty-gb')
    if (gb < 0) {gb = 0}
    gbCount.textContent = gb
    updateTotal()
}

function updateCc() {
    let ccCount = document.querySelector('#qty-cc')
    if (cc < 0) {cc = 0}
    ccCount.textContent = cc
    updateTotal()
}

function updateSugar() {
    let sugarCount = document.querySelector('#qty-sugar')
    if (sugar < 0) {sugar = 0}
    sugarCount.textContent = sugar
    updateTotal()
}

function updateTotal() {
    let totalCount = document.querySelector('#qty-total')
    //Could do a redundant check if total is less than 0
    total = gb+cc+sugar
    totalCount.textContent = total
}