document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe um pop-up de confirmação
    alert('Mensagem enviada com sucesso!');

    // Limpa os campos do formulário
    this.reset();

    // Cria um formulário invisível para enviar os dados via POST
    var form = document.createElement('form');
    form.action = this.action; // Ação do FormSubmit
    form.method = this.method; // Método POST

    // Adiciona os campos do formulário original ao novo formulário
    Array.from(this.elements).forEach(function(element) {
        if (element.name) {
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = element.name;
            input.value = element.value;
            form.appendChild(input);
        }
    });

    // Adiciona o formulário invisível ao DOM e envia-o
    document.body.appendChild(form);
    form.submit();
});

