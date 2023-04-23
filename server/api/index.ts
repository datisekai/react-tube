import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoute from '../src/routes/Auth.route'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 6060

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
   return res.send(`<a href='https://www.facebook.com/profile.php?id=100088767194778' target='_blanl'>Datisekai</a>`)
})

app.use('/api/auth', AuthRoute)

app.listen(PORT, () => {
    console.log(`Running - ${PORT}`)
})  