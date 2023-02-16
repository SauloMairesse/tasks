import express from 'express';

const app = express();

app.use(express.json())

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
    console.log(`Funfando na porta: ${PORT}`)
})
