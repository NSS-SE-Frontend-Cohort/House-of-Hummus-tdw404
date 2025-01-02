export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/orders").then(res => res.json())

    let salesDivs = sales.map()

    salesDivs = salesDivs.join("")

    return salesDivs
}

