
function calcular() {
    const valorTotal = parseFloat(document.getElementById("valorTotal").value);
    const parcelas = parseInt(document.getElementById("parcelas").value);
    const valorParcela = parseFloat(document.getElementById("valorParcela").value);

    const resultadoDiv = document.getElementById("resultado");
    const linkWhatsApp = document.getElementById("linkWhatsApp");

    if (isNaN(valorTotal) || isNaN(parcelas) || isNaN(valorParcela)) {
        resultadoDiv.textContent = "Por favor, preencha todos os campos.";
        linkWhatsApp.style.display = "none";
        return;
    }

    const totalPago = parcelas * valorParcela;
    const taxaMensalAproximada = ((valorParcela * parcelas) / valorTotal - 1) / parcelas;

    let mensagem = `Total financiado: R$ ${valorTotal.toFixed(2)}\n` +
                   `Parcelas: ${parcelas} de R$ ${valorParcela.toFixed(2)}\n` +
                   `Total a pagar: R$ ${totalPago.toFixed(2)}\n\n`;

    if (taxaMensalAproximada > 0.015) {
        mensagem += "⚠️ Juros acima de 1,5% ao mês! Possível abuso. Consulte um advogado.";
    } else {
        mensagem += "✅ Juros aparentemente normais.";
    }

    resultadoDiv.textContent = mensagem.replace(/\n/g, "\n");

    const whatsappMsg = encodeURIComponent(mensagem.replace(/\n/g, "\n"));
    linkWhatsApp.href = `https://wa.me/5521995061084?text=${whatsappMsg}`;
    linkWhatsApp.textContent = "📲 Enviar análise para o WhatsApp";
    linkWhatsApp.style.display = "block";
}
