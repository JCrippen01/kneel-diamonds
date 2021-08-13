
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { Orders } from "./Orders.js"
import {addCustomOrder} from "./database.js"
import { jeweleryTypes } from "./jeweleryTypes.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {

            addCustomOrder()
        }        
    }
)

export const KneelDiamonds = () => {
    const storeName= "Kneel Diamonds"
    return `
        <h1>Have love on the rocks? ${storeName}, where we have all the real bargins!</h1>
            
        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
        <section class="choices__styles options">
                <h2>Styles</h2>
                ${jeweleryTypes()}
            </section>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

//Notes:
// Line 7 document.addEventListener function was pre-added. Not sure if this is needed.

