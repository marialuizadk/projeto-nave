function setup() {
  createCanvas(750, 400);
}

function draw() {
  background(imagemDoEspaco);
  mostraAstronaut();    
  mostraNave();
  movimentaNave();
  movimentaAstronaut();
  voltaPosicaoInicialDaNave ();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}