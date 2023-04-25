import '../css/style.css'
import fish1 from '../images/Freddi.png'
//import fish2 from '../images/Luther.png'

const div = document.createElement("div")
div.classList.add("fish")
document.body.appendChild(div)

const img = document.createElement("img")
img.src = fish1
div.appendChild(img)
