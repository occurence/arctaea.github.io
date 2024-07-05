// const body = document.body
// // body.append("Hello World", "avocado")
// const div = document.createElement("div")
// body.append(div)

// div.innerText = "Hi World"
// div.textContent = "<strong>Hello World</strong>"
// div.innerHTML = "<strong>Hello World</strong>"

// const strong = document.createElement("strong")
// strong.innerText = "HELLO WORLD"
// div.append(strong)

const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanHi2 = document.getElementById("hi2")
const spanBye = document.querySelector("#bye")

// spanBye.remove()
// div.append(spanBye)

console.log(spanHi.getAttribute("title"))
console.log(spanHi.getAttribute("id"))
spanHi.setAttribute("id", "change-id")
spanHi.removeAttribute("id")

console.log(spanHi.dataset)
spanHi.dataset.newName = "new name data"

spanHi.classList.add("newclass")
spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi2")
spanHi.style.color = "red"
spanHi.style.backgroundColor = "yellow"