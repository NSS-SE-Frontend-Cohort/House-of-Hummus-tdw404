export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree").then(res => res.json())
    var orderNum = 0
    return sales.map (element => {
        orderNum ++
        return `<div>Order #${orderNum}</div>`
    }).join(`\n`)
}

