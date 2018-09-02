class MensagemView extends View {
    template(model) {
        return model ? `<p class="alert alert-info">${model}</p>` : '';
    }
}
