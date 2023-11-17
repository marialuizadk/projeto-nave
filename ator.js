let yAstronaut = 366;
let xAstronaut = 85;
let colisao = false;
let meusPontos = 0;

function mostraAstronaut (){
  image(imagemDoAstronaut, xAstronaut, yAstronaut, 30, 30); 
}

function movimentaAstronaut(){
  if (keyIsDown (UP_ARROW)){
  yAstronaut -= 3;
  }
  if (keyIsDown (DOWN_ARROW)){
    if (podeSeMover()){
  yAstronaut += 3;
    }
  }
  if (keyIsDown (LEFT_ARROW)){
    if (podeSeMover()){
  xAstronaut -= 3;
    }
  }
  if (keyIsDown (RIGHT_ARROW)){
    if (podeSeMover()){
  xAstronaut += 3;
    }
  }
}

function verificaColisao (){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemNaves.length; i++){
    colisao = collideRectCircle(xNaves[i], yNaves[i], comprimentoNave, alturaNave, xAstronaut, yAstronaut, 15)
    if (colisao){
    voltaAstronautPosicaoInicial();
      if (pontosMaiorQueZero()){
          meusPontos -= 1;
      }
    }
  }
}

function voltaAstronautPosicaoInicial (){
  yAstronaut = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAstronaut < 15){
  meusPontos += 1; 
  voltaAstronautPosicaoInicial();  
  }
}

function pontosMaiorQueZero (){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAstronaut < 366;
}


