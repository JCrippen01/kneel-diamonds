import { getStyles, setStyle } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    const styles = getStyles()
    let html = "<ul class = 'style ul'>"

     const listItemsArray = styles.map(
        (style) => {
            return `<li class = "style">
                <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </li>`
        }
    )
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}

