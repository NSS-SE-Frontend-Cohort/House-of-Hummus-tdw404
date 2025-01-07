import { setVegetable } from "./TransientState.js"

export const VegetableOptions = async () => {
    document.addEventListener("change", handleVegetableChoice)
    const response = await fetch("http://localhost:8088/vegetables")
    return (await response.json()).map(element => {
        return `<div>
        <input type='radio' class='hoverPointer' name='vegetableOption' value='${element.id}' /> ${element.type}
        </div>`
    }).join(`\n`)
}

const handleVegetableChoice = (event) => {
    if (event.target.name === "vegetableOption") {
        setVegetable(parseInt(event.target.value))
    }
}