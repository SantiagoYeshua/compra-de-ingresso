let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;

function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let ingressosPista = document.getElementById('qtd-pista');
    let ingressosSuperior = document.getElementById('qtd-superior');
    let ingressosInferior = document.getElementById('qtd-inferior');
    let quantidade = document.getElementById('qtd').value;

    if(quantidade <= 0){
        alert('Quantidade inválida');
        document.getElementById('qtd').value = 0;
        return;
    }

    if(tipoIngresso == 'pista'){
        console.log(qtdPista);
        if(qtdPista <= 0 || quantidade > qtdPista){
            alert('Não à tantos ingressos disponíveis neste setor');
            document.getElementById('qtd').value = 0;
            return;
        } else{
            alert('Compra realizada com sucesso!');
        }
        qtdPista = qtdPista - quantidade;
        ingressosPista.innerHTML = qtdPista;
    }

    if(tipoIngresso == 'superior'){
        console.log(qtdSuperior)
        if(qtdSuperior <= 0 || quantidade > qtdSuperior){
            alert('Não à tantos ingressos disponíveis neste setor');
            document.getElementById('qtd').value = 0;
            return;
        } else{
            alert('Compra realizada com sucesso!');
        }
        qtdSuperior = qtdSuperior - quantidade;
        ingressosSuperior.innerHTML = qtdSuperior;
    }
    
    if(tipoIngresso == 'inferior'){
        console.log(qtdInferior)
        if(qtdInferior <= 0 || quantidade > qtdInferior){
            alert('Não à tantos ingressos disponíveis neste setor');
            document.getElementById('qtd').value = 0;
            return;
        } else{
            alert('Compra realizada com sucesso!');
        }
        qtdInferior = qtdInferior - quantidade;
        ingressosInferior.innerHTML = qtdInferior;
    }

    document.getElementById('qtd').value = 0;
}