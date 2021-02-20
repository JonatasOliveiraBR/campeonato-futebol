let timeVetor = []
   

function limpar(){
    document.getElementById('txtCadastro').value = ''
    document.getElementById('times').value = ''
}


function cadastrar(){
    let cadastro = document.getElementById('txtCadastro').value
    let opcao = document.createElement('option')
    let times = document.getElementById('times')
    opcao.setAttribute('value',cadastro)
    opcao.innerText = cadastro
    times.appendChild(opcao)

    limpar() 
}






function inserir(){
    let times = document.getElementById('times').value
    let tArea = document.getElementById('tArea')

    if((timeVetor.indexOf(times))==-1){
        timeVetor.push(times)
        tArea.innerHTML += `${times}\n`
        limpar()
    }else{
        window.alert('Time já incluido!')
    }
}


function gerar(){
    tArea.innerHTML = ''

    let saida = document.getElementById('saida')
    
    saida.innerHTML += `<p>CONFRONTOS</p>`

    for(let c=0;c<=timeVetor.length-1;c++){
        for(let i=0;i<=timeVetor.length-1;i++){ 
            if(timeVetor[c] != timeVetor[i]){
                saida.innerHTML += `${timeVetor[c]} x ${timeVetor[i]}<br>`
            }   
        }
        saida.innerHTML += `<br>`
    }
}