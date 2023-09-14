import express from 'express';
import routes from './routes'
import validation from './shared/validation';

const app = express()

//Middlewares
app.use(express.json())
app.use(validation)
app.use(routes);

export default app;