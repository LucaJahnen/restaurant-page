import './styles.css'

const dishes = {
    "Appetizers": {
        "Bruschetta": "Grilled bread topped with a mixture of fresh tomatoes, basil, garlic, and olive oil.",
        "Stuffed Mushrooms": " Mushrooms filled with a savory mixture of breadcrumbs, garlic, herbs, and cheese."
    },
    "Main Courses": {
        "Chicken Alfredo": "Tender chicken breast served over fettuccine pasta with a creamy Alfredo sauce and a sprinkle of Parmesan cheese.",
        "Vegetable Stir-Fry": " A vibrant mix of fresh vegetables stir-fried with tofu in a savory soy-ginger sauce, served over steamed rice."
    },
    "Desserts": {
        "Tiramisu": "Classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
        "Panna Cotta": "Creamy Italian dessert made with sweetened cream and vanilla, topped with a fresh berry compote."
    }
}

export default function Menu() {
    const element = document.createElement("div")
    element.classList.add("element")

    const heading = document.createElement("h1")
    heading.textContent = "Our menu"
    element.appendChild(heading)

    const desc = document.createElement("p")
    desc.textContent = "These are the dishes we serve. If you would like further information on these dishes please ask our servers or the chef."
    element.appendChild(desc)

    for(const dish in dishes) {
        const heading = document.createElement("h1")
        heading.textContent = dish
        element.appendChild(heading)

        for(const subdish in dishes[dish]) {
            const container = document.createElement("div")
            const subheading = document.createElement("h2")
            subheading.textContent = subdish
            container.appendChild(subheading)

            const desc = document.createElement("p")
            desc.textContent = dishes[dish][subdish]
            container.appendChild(desc)
            element.appendChild(container)
        }
    }
    return element
}