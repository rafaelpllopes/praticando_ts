import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {
    obterNegociacoes(handler: HandletFunction): Promise<Negociacao[]> {
         return <Promise<Negociacao[]>> fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {
                console.log(err.message);
                throw new Error('Não foi possível importar as negociações');
            });
    }
}

export interface HandletFunction {
    (res: Response): Response;
}