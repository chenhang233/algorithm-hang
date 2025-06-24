const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const server = http.createServer((req, res) => {
  // 解析请求路径
  const parsedUrl = url.parse(req.url)
  let pathname = `.${parsedUrl.pathname}`

  // 如果路径以/结尾，默认返回index.html
  if (pathname.endsWith('/')) {
    pathname += 'index.html'
  }

  // 获取文件扩展名
  const ext = path.parse(pathname).ext

  // 设置Content-Type
  const map = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  }

  fs.readFile(pathname, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 文件不存在
        res.writeHead(404)
        res.end('404 Not Found')
      } else {
        // 服务器错误
        res.writeHead(500)
        res.end('Server Error')
      }
    } else {
      // 成功读取文件
      res.writeHead(200, { 'Content-Type': map[ext] || 'text/plain' })
      res.end(data)
    }
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
