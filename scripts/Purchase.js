import { saveOrder } from "./TransientState.js"

export const purchaseButton = () => {
    document.addEventListener("click", purchaseClick)
    return "<button class='hoverPointer' id='purchase'>Purchase Combo</button>"
}

const purchaseClick = async (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        if (await saveOrder()) {
            document.dispatchEvent(new CustomEvent("purchaseEvent"))
        } else {
            alert("Please make a selection for each option")
        }
        document.activeElement.blur()
    }
}