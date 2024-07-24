document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('calc-form');
  const inputNome = document.getElementById('id-nome');
  const mensagemDeErro = document.getElementById('error');

  formulario.addEventListener('submit', function (event){

    event.preventDefault();

    if (!inputNome.value){
      mensagemDeErro.style.display = 'block';
      return;      
    }else{      
      mensagemDeErro.style.display = 'none';
    }

    const nome = inputNome.value.toUpperCase();
    const altura = parseFloat(document.getElementById('id-altura').value);
    const peso = Math.round(parseFloat(document.getElementById('id-peso').value));    
    
    const imc = peso/(altura * altura);
    const elementResultado = document.getElementById('resultado');

    let categoria;

    if (imc < 18.5) {
      categoria = 'ABAIXO DO PESO';
      elementResultado.style.backgroundColor = "#ffff00";
      elementResultado.style.color = "#000000"
    }else if(imc < 25) {
      categoria = 'PESO NORMAL';
      elementResultado.style.backgroundColor = "#10A23A";
    }else if (imc < 30) {
      categoria = 'SOBREPESO';
      elementResultado.style.backgroundColor = "#ff8c00";
    }else{
      categoria = 'OBESIDADE';
      elementResultado.style.backgroundColor = "#FF0000";
    }

    elementResultado.innerHTML = `<p>${nome}, seu IMC é: ${imc.toFixed(2)}.</p><p>Você está na categoria: ${categoria}</p>`
    
    //Atualizar o valor do campo input oculto;
    document.getElementById('categoria').value = categoria;

    let dados = new FormData(formulario);

    for (let [chave, valor] of dados.entries())
      console.log(chave + " : " + valor);

    document.getElementById('id-nome').value = "";
    document.getElementById('id-altura').value = "";
    document.getElementById('id-peso').value = "";
  });
});