import dotenv from 'dotenv'
import net from 'net'
dotenv.config()
import app from './app.js'
import { sequelize } from './models/index.js'

const preferredPort = process.env.PORT || 5000

async function findAvailablePort(startPort) {
  return new Promise((resolve) => {
    const server = net.createServer()
    server.once('error', () => resolve(findAvailablePort(startPort + 1)))
    server.once('listening', () => {
      server.close()
      resolve(startPort)
    })
    server.listen(startPort)
  })
}

async function start() {
  try {
    await sequelize.authenticate()
    console.log('Database connection established.')
    await sequelize.sync({ force: true })
    console.log('Database synced.')
    
    const port = await findAvailablePort(preferredPort)
    app.listen(port, () => {
      console.log(`CamEvent Explorer backend listening on http://localhost:${port}`)
      console.log(`API endpoint: http://localhost:${port}/api/status`)
    })
  } catch (error) {
    console.error('Unable to start server:', error.message)
    process.exit(1)
  }
}

start()

start()
