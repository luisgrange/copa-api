import express from "express";
import { router } from './routes';

const app = express();
const PORT = 3001;


app.listen(PORT, () => {console.log(`Server running at http://localhost:${PORT}`)})