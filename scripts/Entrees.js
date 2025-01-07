import { setEntree } from "./TransientState.js"

export const EntreeOptions = async () => {
    document.addEventListener("change", handleEntreeChoice)
    const response = await fetch("http://localhost:8088/entrees")
    return (await response.json()).map(element => {
        return `<div>
        <input type='radio' name='entreeOption' value='${element.id}' /> ${element.name}
        </div>`
    }).join(`\n`)
}

const handleEntreeChoice = (event) => {
    if (event.target.name === "entreeOption") {
        setEntree(event.target.value)
    }
}