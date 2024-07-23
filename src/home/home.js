import "./styles.css"

export default function Home() {
    const element = document.createElement("div")
    const heading = document.createElement("h1")
    heading.classList.add("welcome")
    heading.innerHTML = "Welcome at our <br /> <span class='elegant'>Elegant Restaurant</span>"
    element.appendChild(heading)

    const desc = document.createElement("p")
    desc.textContent = "Welcome to Elegant Restaurant, where culinary excellence meets unparalleled elegance. Nestled in the heart of Springfield, our restaurant offers a sophisticated dining experience that promises to delight your senses and create lasting memories."
    desc.classList.add("desc")
    element.appendChild(desc)

    const container = document.createElement("div")
    container.classList.add("container")
    const subheading = document.createElement("h2")
    subheading.textContent = "Opening hours"
    container.appendChild(subheading)
    const hours = document.createElement("p")
    hours.innerHTML = 
    `Monday: 11am - 10pm <br />
    Tuesday: 11am - 10pm <br />
    Wednesday: 11am - 10pm <br />
    Thursday: 11am - 10pm <br />
    Friday: 11am - 10pm <br />
    Saturday: 9am - 8pm <br />
    Sunday: 9am - 8pm <br />`
    container.appendChild(hours)

    const locationHeading = document.createElement("h2")
    locationHeading.textContent = "Location"
    container.appendChild(locationHeading)
    const location = document.createElement("p")
    location.innerHTML = "123 Elm Street <br /> Springfield, IL 62701 <br /> United States"
    container.appendChild(location)
    element.append(container)
    return element
}