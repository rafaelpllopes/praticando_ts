class MensagemView extends View<string> {

    template(model: string): string {
        return model ? `<p class="alert alert-info">${model}</p>`: '';
    }
}