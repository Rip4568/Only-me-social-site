import express, { Request, Response } from 'express';
import { userRouter } from './routes/user-router';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (request: Request, response: Response): Response => {
  return response.send('Hello, World! On typescript');
});


//definições de rotas
app.use(userRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});