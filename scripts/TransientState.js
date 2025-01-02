const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0
}

export const setEntree = (selected) => {
    transientState.entreeId = selected
}

export const setVegetable = (selected) => {
    transientState.vegetableId = selected
}

export const setSide = (selected) => {
    transientState.sideId = selected
}

export const saveOrder = async () => {
    if (transientState.entreeId > 0 && transientState.vegetableId > 0 && transientState.sideId > 0) {
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        await fetch("http://localhost:8088/purchases", postOptions)
        return true
    } else {
        return false
    }
    
}