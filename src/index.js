import Home from "./home/home";
import Menu from "./menu/menu";
import Contact from "./contact/contact";
import "./styles.css"

const buttons = document.querySelectorAll("nav button")
const buttonHome = document.querySelector("#home")
const buttonMenu = document.querySelector("#menu")
const buttonContact = document.querySelector("#contact")
const content = document.querySelector("#content")

content.appendChild(Home())

buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        const pages = {
            home: Home,
            menu: Menu,
            contact: Contact
        }
        content.innerHTML = ""
        content.appendChild(pages[event.target.textContent.toLowerCase()]())
    })
})