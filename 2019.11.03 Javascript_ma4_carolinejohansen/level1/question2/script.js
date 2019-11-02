const cards = document.getElementById('index')
const container = document.createElement('div')
container.setAttribute('class', 'container')
cards.appendChild(container)


var request = new XMLHttpRequest()

request.open('GET', "https://jsonplaceholder.typicode.com/todos", true)
request.onload = function() {

  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(todos => {
      const card = document.createElement("div")
      card.setAttribute("class", "card")
      const h1 = document.createElement("h1")
      h1.textContent = todos.userId
      const h2 = document.createElement("h2")
      h2.textContent = todos.id
      const p = document.createElement("p")
      p.textContent = todos.title
      const h3 = document.createElement("h3")
      h3.textContent = todos.completed

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(h2)
      card.appendChild(p)
      card.appendChild(h3)
    })
  } else {
    const errorMessage = document.createElement("marquee")
    errorMessage.textContent = "something needs to be fixed!"
    cards.appendChild(errorMessage)
  }
}

request.send()
