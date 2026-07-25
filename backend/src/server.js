import express from 'express'
import noteRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import path from 'path'

dotenv.config();
console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()

//  middleware

app.use(express.json())
// app.use(rateLimiter);
if(process.env.NODE_ENV !== 'production'){
    app.use(cors(
    {origin : 'http://localhost:5174'}
))
}


app.use('/api/notes', noteRoutes);
app.use('/api/auth',authRoutes)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/dist')))

app.get('/*splat',(req, res) => {
    res.sendFile(path.join(__dirname,'../frontend','dist','index.html'))
})

}

connectDB().then(()=>{
      app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})
})




