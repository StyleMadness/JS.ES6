const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-type': 'application/json',
  }
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return response.json().then((error) => {
      const err = new Error('W T F')
      err.data = error
      throw err
    })
  })
}

sendRequest('GET', requestUrl)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

const body = {
  name: 'Style',
  age: 25,
}

// sendRequest('POST', requestUrl, body)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
