import express from 'express'
import noteRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
// import rateLimit from './config/upstash.js';
// import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'

dotenv.config();
console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3000

//  middleware

app.use(express.json())
// app.use(rateLimiter);
app.use(cors(
    {origin : 'http://localhost:5174'}
))

app.use('/api/notes', noteRoutes);
app.use('/api/auth',authRoutes)

connectDB().then(()=>{
      app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})
})




