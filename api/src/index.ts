import cors from 'cors'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

console.log(`Node running in '${process.env.NODE_ENV}'`)
console.log(process.env.CORS_ORIGINS)
const port = process.env.PORT || 3000
const corsOptions = {
  credentials: true,
  origin: process.env.CORS_ORIGINS.split(','),
}

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: corsOptions,
})

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('Response sent')
})

io.on('connection', (_socket) => {
  console.log('user connected')

  _socket.on('disconnect', () => {
    console.log('user dc')
  })
})

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
