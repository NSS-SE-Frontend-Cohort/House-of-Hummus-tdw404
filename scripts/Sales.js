import { formatPrice } from "./PriceFormatter.js"

export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=side&_expand=vegetable").then(res => res.json())
    console.log(sales)
    var orderNum = 0
    return sales.map (element => {
        orderNum ++
        const total = formatPrice(element.entree.price + element.side.price + element.vegetable.price)
        return `<div>Order #${orderNum} (${element.id})- ${total}</div>`
    }).join(`\n`)
}