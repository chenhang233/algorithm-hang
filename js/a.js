const https = require('https')

const postData = '' // 如果没有请求体，可以留空

const options = {
  hostname: '192.168.1.1',
  port: 443, // HTTPS 默认端口
  path: '/login.cgi',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
  },
}

const req = https.request(options, (res) => {
  console.log(`状态码: ${res.statusCode}`)
  console.log(`响应头: ${JSON.stringify(res.headers)}`)

  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    console.log('响应体:', data)
  })
})

req.on('error', (error) => {
  console.error('请求错误:', error)
})

// 如果有请求体数据，在这里写入
req.write(postData)
req.end()
