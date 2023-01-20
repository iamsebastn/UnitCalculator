/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

import { conversions } from "./data.js"

document.addEventListener("click", (e) => {
    if(e.target.dataset.type === "convert") {
        convert()
    } else if(e.target.dataset.type === "delete") {
        deleteInput()
    }
})

function deleteInput() {
    document.querySelector("#input").value = ""
    render(conversions)
}

function convert() {
    const input = document.getElementById("input").value
    if(input === "") {
        alert("Please insert a value to convert")
    } else {
        document.getElementById("length").textContent = `
        ${(input / 3.821).toFixed(3)} meter(s) | ${(input * 3.821).toFixed(3)} feet
        `
        document.getElementById("volume").textContent = `
        ${(input / 0.264).toFixed(3)} liter(s) | ${(input * 0.264).toFixed(3)} galon(s)
        `
        document.getElementById("mass").textContent = `
        ${(input * 2.204).toFixed(3)} kilogram | ${(input / 2.204).toFixed(3)} pound(s)
        `
    }
}

function render(item) {
    const conversionWr = document.getElementById("conversion-parent")
    let output = ""
    conversions.forEach((item) => {
        output += `
        <div class="conversion-item">
            <h3 class="txt-h3">${item.title}</h3>
            <p class="txt-eye" id="${item.id}">- | -</p>
        </div>
    `   
    })
    conversionWr.innerHTML = output
}

render(conversions)

