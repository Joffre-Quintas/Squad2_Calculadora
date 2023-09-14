import express from 'express';
import routes from './routes'
import validation from './shared/validation';

const app = express();
const port = 3000

app.use(express.json())
app.use(validation)
app.use(routes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`))
