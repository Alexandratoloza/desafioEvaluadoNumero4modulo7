import 'dotenv/config'
import express from 'express'
import cancionesRoutes  from './routes/canciones.route.js'
const app = express()


const __dirname = import.meta.dirname
 
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/canciones', cancionesRoutes)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`servidor andando en PORT ${PORT}`)
})