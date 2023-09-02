function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b]
}

const [sum, sub = `doesn't have`, mult, ...other] = calcValues(2, 10)
// const sum = result[0]
// const sub = result[1]

// const [sum,sub] = result

// console.log(sum, mult, other, sub)

const person = {
  name: 'Style',
  age: 25,
  adress: {
    country: 'Russia',
    city: 'Ekb',
  },
}

// const {
//   name: firstName = 'No name',
//   age,
//   car = "doesn't have",
//   adress: { city: town, country },
// } = person

// const { name, ...info } = person

// console.log(name, info)

function logPerson({ name: firstName = 'Madness', age }) {
  console.log(firstName + ' ' + age)
}

logPerson(person)
