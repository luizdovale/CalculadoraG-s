function handleInput(event) {
    // Substitui vírgulas por pontos
    event.target.value = event.target.value.replace(',', '.');
}

function calculateNitrogenio() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    function removeTrailingZeros(value) {
        return value.replace(/(\.0+|(\.\d+?)0+)$/, '$2');
    }

    // Verifica se os valores de entrada são válidos
    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    // Calcula o peso líquido para o Nitrogênio
    let pesoLiquido = (fator * polegadas) / 0.862;

    // Arredonda o peso líquido para cima
    pesoLiquido = Math.round(pesoLiquido);

    // Calcula m³ para o Nitrogênio
    let m3 = pesoLiquido * 0.862;

    // Exibe os resultados nos campos de texto
    document.getElementById('pesoLiquido').value = pesoLiquido.toLocaleString('pt-BR') + " kg";
    document.getElementById('m3').value = removeTrailingZeros(m3.toLocaleString('pt-BR', { maximumFractionDigits: 3 })) + " m³";
}

function calculateOxigenio() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    function removeTrailingZeros(value) {
        return value.replace(/(\.0+|(\.\d+?)0+)$/, '$2');
    }

    // Verifica se os valores de entrada são válidos
    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    // Calcula o peso líquido para o Oxigênio
    let pesoLiquido = (fator * polegadas) / 0.754;

    // Arredonda o peso líquido para cima
    pesoLiquido = Math.round(pesoLiquido);

    // Calcula m³ para o Oxigênio
    let m3 = pesoLiquido * 0.754;

    // Exibe os resultados nos campos de texto
    document.getElementById('pesoLiquido').value = pesoLiquido.toLocaleString('pt-BR') + " kg";
    document.getElementById('m3').value = removeTrailingZeros(m3.toLocaleString('pt-BR', { maximumFractionDigits: 3 })) + " m³";
}

function calculateArgonio() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    function removeTrailingZeros(value) {
        return value.replace(/(\.0+|(\.\d+?)0+)$/, '$2');
    }

    // Verifica se os valores de entrada são válidos
    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    // Calcula o peso líquido para o Argônio
    let pesoLiquido = (fator * polegadas) / 0.604;

    // Arredonda o peso líquido para cima
    pesoLiquido = Math.round(pesoLiquido);

    // Calcula m³ para o Argônio
    let m3 = pesoLiquido * 0.604;

    // Exibe os resultados nos campos de texto
    document.getElementById('pesoLiquido').value = pesoLiquido.toLocaleString('pt-BR') + " kg";
    document.getElementById('m3').value = removeTrailingZeros(m3.toLocaleString('pt-BR', { maximumFractionDigits: 3 })) + " m³";
}

function resetFields() {
    document.getElementById('fator').value = "";
    document.getElementById('polegadas').value = "";
    document.getElementById('pesoLiquido').value = "";
    document.getElementById('m3').value = "";
}
