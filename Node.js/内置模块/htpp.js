const http = require('http')
const server = http.createServer((request,response) =>{
    response.statusCode = 200
    response.end("111111111")
})


server.listen(3300,() => {
    console.log('服务器启动')
})