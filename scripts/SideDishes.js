import { setSide } from "./TransientState.js"

export const SideOptions = async () => {
    document.addEventListener("change", handleSideChoice)
    const response = await fetch("http://localhost:8088/sides")
    return (await response.json()).map(element => {
        return `<div>
        <input type='radio' class='hoverPointer' name='sideOption' value='${element.id}' /> ${element.title}
        </div>`
    }).join(`\n`)
}

const handleSideChoice = (event) => {
    if (event.target.name === "sideOption") {
        setSide(parseInt(event.target.value))
    }
}
