const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0
}

export const setEntree = (selected) => {
    transientState.entreeId = selected
    console.log(transientState)
}

export const setVegetable = (selected) => {
    transientState.vegetableId = selected
    console.log(transientState)
}

export const setSide = (selected) => {
    transientState.sideId = selected
    console.log(transientState)
}