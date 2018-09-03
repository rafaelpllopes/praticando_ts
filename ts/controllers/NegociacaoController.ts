import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';

export class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void {
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(this._ehDiaUtil(data)) {
            this._mensagem('Somente negociações em dias úteis, por favor');
            return;
        }
        
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()),
        );
        this._negociacoes.adiciona(negociacao);
        this._mensagem('Negociação adicionada com sucesso');
        this._negociacoesView.update(this._negociacoes);
    }

    private _mensagem(texto: string): void {
        this._mensagemView.update(texto);
        setTimeout(() => {
            this._mensagemView.update('');
        }, 1500);
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segundo,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}