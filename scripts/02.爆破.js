const http = require('http')

const options = {
  host: '192.168.0.1',
  port: 80,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  form: {},
}

const req = http.request(options, (response) => {
  //   console.log(response.statusCode)
  console.log(response.headers)
  response.setEncoding('utf-8')
  response.on('data', (chunk) => {
    console.log('BODY : ' + chunk)
  })
  response.on('end', () => {
    console.log('......结束标志......')
  })
})

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`)
})

req.write({
  method: 'do',
  login: {
    password: 'a4HtQbhc9TefbwK',
  },
})
req.end()
