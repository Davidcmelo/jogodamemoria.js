function onLoad(){
const dependencias = {
    tela: Tela,
    util : util
}
 const jogoDaMemoria = new JogoDaMemoria(dependencias)
 jogoDaMemoria.inicializar()
}
window.onload = onLoad