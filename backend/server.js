import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import DashboardRoute from './routes/dashboard.js'
import FunctionsRoute from './routes/functions.js'
import { connectDB } from './connection/db.js'


dotenv.config()

const app = express()
const port  = process.env.PORT || 3001
const FrontEnd_Url = process.env.FRONTEND_URL

app.use(cors({
    origin: FrontEnd_Url,
    credentials: true
}));

app.use('/dashboard', DashboardRoute)
app.use('/functions', FunctionsRoute)


connectDB();

app.listen(port, () => {
    console.log(`Server running with port ${port}`)
})
