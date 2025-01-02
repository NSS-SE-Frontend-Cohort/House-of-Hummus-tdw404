import { Sales } from "./Sales.js"
import { EntreeOptions } from "./Entrees.js"
import { SideOptions } from "./SideDishes.js"
import { VegetableOptions } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class ="choices_entrees options">
                <h2>Entrees</h2>
                ${await EntreeOptions()}
            </section>
            <section class ="choices_vegetables options">
                <h2>Vegetables</h2>
                ${await VegetableOptions()}
            </section>
            <section class ="choices_sides options">
                <h2>Sides</h2>
                ${await SideOptions()}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
