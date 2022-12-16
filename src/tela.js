

const ID_CONTEUDO = "conteudo"
const ID_BOTAO_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL ="invisible"
const ID_CARREGANDO =   "carregando"
const ID_CONTADOR = "contador"
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo"
const MENSAGENS = {
    sucesso:{
        texto:'Acertou Imbecil!!!',
        classe:'alert-info'
        
    },
    erro:{
        texto:'Errou Imbecil!!!',
        classe:'alert-danger'
    }
}
class Tela{
    static obterCodigoHtml(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSeleçao('${item.id}', '${item.nome}')">
            <img  name="${item.nome}" src="${item.img}"  class="card-img-top" alt="..."/>
  
            </div>
            <br />
        </div>
        `
    }
    
    
//\/\/\/\/\/\/\/\/\/\ATENÇÃO//\/\/\/\/\/\/\/\//\/\\/\
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }

    static gerarStringHTMLPelaImagem(data){
    //para cada item da lista, vai executar a função obterCodigoHtml
    //ao final, vai concatenar tudo em uma unia string
    //munda de array pra string
    return data.map(Tela.obterCodigoHtml).join('')
    }
static atualizarImagens(itens){
   const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
   Tela.alterarConteudoHTML(codigoHtml)
}
///\/\/\/\/\/\/\/\/\/\ATENÇÃO/\/\/\/\/\/\/\/\/\/\/\//\/
static exibirAnimal(nome, img) {
    const elementosHtml = document.getElementsByName(nome)
elementosHtml.forEach(item => (item.src=img))


}

static configurarBotaoJogar(funçaoOnClick){
    const btnJogar = document.getElementById(ID_BOTAO_JOGAR)
    btnJogar.onclick = funçaoOnClick
}
static configurarClickVerificarSeleçao(funçaoOnClick){
    window.verificarSeleçao = funçaoOnClick}

    static async exibirMensagem(sucesso=true) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }
        else{ elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto}

            elemento.classList.remove(CLASSE_INVISIVEL)
            await util.timeout(1000)
            elemento.classList.add(CLASSE_INVISIVEL)
    }

    static exibirCarregando(mostrar = true) {
        const carregando = document.getElementById(ID_CARREGANDO)
        if(mostrar) {
            carregando.classList.remove(CLASSE_INVISIVEL)
            return;
        }
        carregando.classList.add(CLASSE_INVISIVEL)
    }
 
static iniciarContador (){
let contarAte = 3
const elementoContador = document.getElementById(ID_CONTADOR)
const identificadorNoTexto = "$$contador"
const textoPadrao = `Começando em ${identificadorNoTexto} segundos...`
const atualizarTexto = () =>
(elementoContador.InnerHTML = textoPadrao.replace (identificadorNoTexto.contarAte--))
atualizarTexto()
const idDoIntervalo = setInterval(atualizarTexto, 3000)
return idDoIntervalo

}
static limparContador(idDoIntervalo) {
    clearInterval(idDoIntervalo)
    document.getElementById(ID_CONTADOR).InnerHTML =""
}

static configurarBotaoMostrarTudo(funçaoOnClick){
    const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO)
    btnMostrarTudo.onclick = funçaoOnClick
}
}