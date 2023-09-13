import {Request, Response} from 'express';

export default class Calculadora {

    static somar(req: Request, res: Response) {
        const { valor1, valor2 } = req.body;
        const soma = valor1 + valor2;
        res.status(200).json({soma})
    }
    static subtrair(req: Request, res: Response) {
        const { valor1, valor2 } = req.body;
        const subtracao = valor1 - valor2;
        res.status(200).json({subtracao})
    }
    static multiplicar(req: Request, res: Response) {
        const { valor1, valor2 } = req.body;
        const multiplicacao = valor1 * valor2;
        res.status(200).json({multiplicacao})
    }
    static dividir(req: Request, res: Response) {
        const { valor1, valor2 } = req.body;
        if(valor2 === 0) {
            res.status(400).json({message: 'Não é possível fazer divisão por zero'})
        }
        const divisao = valor1 / valor2;
        res.status(200).json({divisao})
    }
    static potencia(req: Request, res: Response) {
        const { valor1, valor2 } = req.body;
        const potencia = Math.pow(valor1,valor2)
        res.status(200).json({potencia})
    }
}