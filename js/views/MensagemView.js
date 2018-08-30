class MensagemView extends View {
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return model ? `<p class="alert alert-info">${model}</p>` : '';
    }
}
