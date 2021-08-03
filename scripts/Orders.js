import { getMetals, getOrders, getSizes, getStyles } from "./database.js"
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()


const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    
const totalCost = (foundMetal.price + foundStyle.price + foundSize.price) 
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
return`<li>
    Order #${order.id} cost ${costString}
</li>`

 //old line   return `<li>
  //      Order #${order.id} was placed on ${order.timestamp}
    //</li>`

}


export const Orders = () => {
   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


 /*Notes: Prebuilt on line 10
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */