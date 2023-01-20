/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
import { conversions } from "./data"

document.getElementById("convert-btn").addEventListener("click", () => {
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
})

function render() {
    const conversionWr = document.getElementById("conversion-parent")
    conversionWr.innerHTML = conversions.forEach((item) => {
    `
        <div class="conversion-item">
            <h3 class="txt-h3">${item.title}</h3>
            <p class="txt-eye" id="length">- | -</p>
        </div>
    `   
    })
    console.log(conversions[0].title + "item")
}

render(conversions)
console.log(conversions)
