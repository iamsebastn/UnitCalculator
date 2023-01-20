/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", () => {
    const input = document.getElementById("input").value
    if(input === "") {
        convertBtn.disabled = true
    } else {
        document.getElementById("length-mf").textContent = `${(input / 3.821).toFixed(3)}m`
        document.getElementById("length-fm").textContent = `${(input * 3.821).toFixed(3)}ft`
    
        document.getElementById("length-gl").textContent = `${(input / 0.264).toFixed(3)}gl`
        document.getElementById("length-lg").textContent = `${(input * 0.264).toFixed(3)}l`
    
        document.getElementById("length-pk").textContent = `${(input / 2.204).toFixed(3)}pnd`
        document.getElementById("length-kp").textContent = `${(input * 2.204).toFixed(3)}kg`
    }
})
