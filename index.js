import express from 'express'
import { connectDb } from './db/db.js'
import hotelRoutes from './routes/hotelRouter.js'
import userRoutes from './routes/userRouter.js'
import cors from 'cors';


const PORT = 3000
const app = express()

app.use(cors());

app.use(express.json())

app.use('/hotel', hotelRoutes)
app.use('/user', userRoutes)

connectDb()

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})