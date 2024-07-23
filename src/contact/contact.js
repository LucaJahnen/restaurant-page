import "./styles.css"

const staff = [
    {
        name: "Samantha",
        profession: "friendly server",
        phone: "123-456-789",
        email: "samantha@restaurant.com"
    },
    {
        name: "Carlos",
        profession: "skilled chef",
        phone: "123-456-789",
        email: "carlos@restaurant.com"
    },
    {
        name: "Emily",
        profession: "attentive hostess",
        phone: "123-456-789",
        email: "emily@restaurant.com"
    }
]

export default function Contact() {
    const element = document.createElement("div")
    element.classList.add("element")
    const heading = document.createElement("h1")
    heading.textContent = "Contact info"
    element.appendChild(heading)

    const desc = document.createElement("p")
    desc.textContent = "You want to contact our chef or a server? Don't hesitate and call us or send and email. We really like to hear your feedback on our service and dishes."
    element.appendChild(desc)
    staff.forEach(({name, profession, phone, email}) => {
        element.innerHTML += `
        <section>
            <h1>${name}</h1>
            <p>${profession}</p>
            <a href="tel:123456789">${phone}</a>
            <a href="mailto:${email}">${email}</a>
        </section>`
    })
    return element
}