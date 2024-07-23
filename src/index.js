import Home from "./home/home";
import Menu from "./menu/menu";
import Contact from "./contact/contact";
import "./styles.css"

const buttonsNav = document.querySelectorAll("nav button")
const buttonsFooter = document.querySelectorAll("footer button")
const buttons = [...buttonsNav, ...buttonsFooter]
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
        window.scrollTo(0, 0)
        content.innerHTML = ""
        content.appendChild(pages[event.target.textContent.toLowerCase()]())
    })
})