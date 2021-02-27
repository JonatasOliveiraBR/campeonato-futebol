let timeVetor = []
   

function limpar(){
    document.getElementById('txtCadastro').value = '' //realiza a limpeza da caixa texto
}


function cadastrar(){
    let sTimes = document.getElementById('sTimes')
    let time = document.getElementById('txtCadastro').value

    //Verificar se caixa de texto está preenchida
    if(time == ''){
        alert('[ATENÇÃO] - Favor informar um time.')
    }else{
        timeVetor.push(time) //adiciona time no array
        let opcao = document.createElement('option') //cria novo option no select
        opcao.setAttribute('value',time) //configura os atributos do option
        opcao.innerText = time 
        sTimes.appendChild(opcao) //linka o option com o select
        
        sTimes.innerHTML += `${timeVetor[timeVetor.length-1]}\n` 
    }     
}



function excluir(){
    let sTimes = document.getElementById('sTimes')
    let index = document.getElementById("sTimes").selectedIndex //atribui a variavel o indice selecionado no select

    //verifica se existe time selecionado para exclusão
    if(index == -1){
        alert('[ATENÇÃO] Favor selecionar time para exclusão.')
    }else{
        timeVetor.splice(index,1) //remove a variavel do array através do indice informado
        sTimes.remove(sTimes.selectedIndex) //remove o option do select
    }
}


function gerar(){
    let saida = document.getElementById('saida')
    //saida.innerHTML = ''
   
    if(timeVetor.length<2){ 
        alert('[ATENÇÃO] Quantidade insuficiente de times.')
    }else{
        saida.innerHTML += `<p>CONFRONTOS</p>`
        for(let c=0;c<=timeVetor.length-1;c++){
            for(let i=0;i<=timeVetor.length-1;i++){ 
                if(timeVetor[c] != timeVetor[i]){
                    saida.innerHTML += `${timeVetor[c]} x ${timeVetor[i]}<br>`
                } 
               saida.innerHTML +=  
            }
          
        }
        timeVetor=[]
        sTimes.innerHTML = ''
    }

}
