class JogoDaMemoria{
    constructor ({ tela, util }) {
      this.tela = tela
      this.util = util
      this.iconePadrao = './arquivo/ninja.png'
      this.animalIniciais= [
        { img: './arquivo/boi.png', nome: 'boi'},
        { img: './arquivo/camelo.png', nome: 'camelo'},
        { img: './arquivo/macaco.png', nome: 'macaco'},
        { img: './arquivo/pato.png', nome: 'pato'},
      ]

    
      this.animalEscondidos = []
      this.animalSelecionados =[]
    }

    inicializar() {
        this.tela.atualizarImagens(this.animalIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarClickVerificarSeleçao(this.verificarSeleçao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarAnimalEscondidos.bind(this))
    }
    esconderAnimal(animal){
        //trocar todas imagens de animais existentes pelo icone padrao
        const animalOcultos= animal.map(({ nome, id }) => ({  
            id,
            nome,
            img: this.iconePadrao}))
            
            this.tela.atualizarImagens(animalOcultos)
            this.animalEscondidos = animalOcultos
            

            }
    
exibirAnimal(nomeDoAnimal){
    const {img} = this.animalIniciais.find(({nome}) => nomeDoAnimal === nome)
    this.tela.exibirAnimal(nomeDoAnimal,img)
}


verificarSeleçao(id, nome) {
    const item = { id, nome}
    // alert(`Olá: ${nome}, id: ${id}`)
    const animalSelecionados = this.animalSelecionados.length
    switch(animalSelecionados) {
        case 0: 
            this.animalSelecionados.push(item)
            break;
        case 1: 
            const [ opcao1 ] = this.animalSelecionados
            // zerar itens, para nao selecionar mais de dois
            this.animalSelecionados = []
            let deveMostrarMensagem = false
            if(opcao1.nome === item.nome && opcao1.id !== id) {
                deveMostrarMensagem = true 
                this.exibirAnimal(item.nome)
                this.tela.exibirMensagem(true)

            return;
            }
            this.tela.exibirMensagem(false)
            break;
    }
}
   async embaralhar(){
        const copias = this.animalIniciais
        //duplicar itens
        .concat(this.animalIniciais)

        .map(item => {
           return Object.assign({}, item , {id: (Math.random() / 0.5)})
        })
       //ordenar aleatoriamente \/

        .sort(() => Math.random() - 0.5 )
        this.tela.atualizarImagens(copias)
        this.tela.exibirCarregando()
        await this.util.timeout(1000)
        
        this.esconderAnimal(copias)
        this.tela.exibirCarregando(false)

        
       
   }
    mostrarAnimalEscondidos(){
        const animalEscondidos = this.animalEscondidos
        for(const animal of animalEscondidos){
            const{img} = this.animalIniciais.find(item => item.nome === animal.nome)
            animal.img = img
        }
        this.tela.atualizarImagens(animalEscondidos)
    

}
    
    
    
    
        jogar(){
        this.embaralhar()
    }

    
}

