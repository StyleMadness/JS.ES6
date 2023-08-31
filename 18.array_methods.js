const people = [
  { name: 'Style', age: 25, budget: 40000 },
  { name: 'Sasha', age: 19, budget: 2000 },
  { name: 'Masha', age: 20, budget: 10000 },
  { name: 'Katya', age: 19, budget: 1500 },
  { name: 'Dasha', age: 20, budget: 2300 },
  { name: 'Natasha', age: 28, budget: 7000 },
]

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// for (let person of people) {
//   console.log(person)
// }

// people.forEach(function (person, index, pArr) {
//   console.log(person)
// })

// people.forEach((person) => console.log(person))

// const newPeople = people.map((person) => `${person.name} ${person.age}`)

// console.log(newPeople)
// const adults = []
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 21) {
//     adults.push(people[i])
//   }
// }

// console.log(adults)

// const adults = people.filter((person) => person.age >= 21)
// console.log(adults)
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget
// }
// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

// const Sasha = people.find((person) => person.name == 'Sasha')
// console.log(Sasha)

// const indexSasha = people.findIndex((person) => person.name == 'Sasha')
// console.log(indexSasha)

const amount = people
  .filter((person) => person.budget > 2000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    }
  })
  .reduce((total, person) => total + person.budget, 0)

console.log(amount)
