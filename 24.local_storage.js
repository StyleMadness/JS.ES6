const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber)
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const obj = {
  name: 'Style',
  age: 25,
}

// localStorage.setItem('person', JSON.stringify(obj))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)

person.name = 'StyleMem'

// console.log(person)

window.addEventListener('storage', (event) => {
  console.log(event)
})
