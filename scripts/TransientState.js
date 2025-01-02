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