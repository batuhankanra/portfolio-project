import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import { logger } from './lib/logger'; 
import { config } from './config'; 
import { router } from './routes';
import pool from './lib/dbConnect';
import passport from 'passport';



const app = express();


// ─────────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────────

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors({origin:process.env.NODE_ENV==='production' ? '...': "http://localhost:5173",credentials:true}));
app.use(logger);
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(passport.initialize())
pool

// ─────────────────────────────────────────────
// Statik dosyalar
// ─────────────────────────────────────────────

app.use('/api/uploads', express.static(path.join(__dirname, './public/uploads')));



// ─────────────────────────────────────────────
// Rotalar
// ─────────────────────────────────────────────

app.use("/api",router)
app.get("/",(req,res)=>{
  res.status(200).json({msg:"sa"})
})



// ─────────────────────────────────────────────
// Sunucu başlat
// ─────────────────────────────────────────────

app.listen(config.PORT, () => {
  console.log(` Server running on port ${config.PORT}`);
});