import {Request, Response, NextFunction} from 'express';

export default function validation(req:Request, res:Response , next: NextFunction) {
    const { valor1, valor2 } = req.body;
    if(typeof valor1 != "number"|| typeof valor2 != "number") {
        res.status(400).send("Não possível calcular um valor que nao seja numerico.")
    } else {
        next()
    }
}