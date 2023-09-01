const citiesRussia = ['Moscow', 'Saint-Petersburg', 'Kazan', 'Yekaterinburg']
const citiesEurope = ['Berlin', 'Prague', 'NewYork']

const citiesRussiaWithPopulation = {
  Moscow: 12,
  SaintPetersburg: 5,
  Kazan: 1,
  Yekaterinburg: 1,
}
const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 3,
  Prague: 1,
  NewYork: 19,
}

// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesRussia, 'Washington', ...citiesEurope]

// const allCities = citiesEurope.concat(citiesRussia)

// console.log(allCities)

// console.log({ ...citiesRussiaWithPopulation })
// console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation })
// const numbers = [4, 8, 15, 16, 23, 42]

// console.log(Math.max(4, 8, 15, 16, 23, 42))

// console.log(Math.max(...numbers))

// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))
// console.log(nodes)

function sum(a, b, ...rest) {
  console.log(rest)
  return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 3, 4, 5, 7, 6]
// console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...other] = numbers
// console.log(a, b, other)

const person = {
  name: 'Style',
  age: 20,
  city: 'Ekb',
  country: 'Russia',
}

const { name, age, ...adress } = person

console.log(name, age, adress)
