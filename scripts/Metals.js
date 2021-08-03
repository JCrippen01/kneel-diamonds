import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
        let html = "<ul class= 'metals ul'>"

    const metalsHTMLArray = metals.map(
        (metalObject) => {
            return `<li class="metal">
                <input type="radio" name="metal" value="${metalObject.id}" />${metalObject.metal}
            </li>`
        }
    )

    html += metalsHTMLArray.join("")
    html += "</ul>"

    return html

}