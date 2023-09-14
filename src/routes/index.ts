import { Router } from 'express';
import Calculadora from '../controllers/Calculadora';


const routes = Router();

routes.post('/soma', Calculadora.somar)
routes.post('/subtrair', Calculadora.subtrair)
routes.post('/multiplicar', Calculadora.multiplicar)
routes.post('/dividir', Calculadora.dividir)
routes.post('/potencia', Calculadora.potencia)

export default routes;