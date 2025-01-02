import { Sales } from "./Sales.js"

export const FoodTruck = () => {
    const salesHTML = Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <div class="choices">
            <article class ="options">
                <h2>Entrees</h2>
            </article>
            <article class ="options">
                <h2>Vegetables</h2>
            </article>
            <article class ="options">
                <h2>Sides</h2>
            </article>
        </div>
        
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
