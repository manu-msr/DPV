/* Pelota. */
Mover mover;
/* Pelota falsa. */
Mover mover2;
/* Barra izquierda. */
Paddle paddle;
/* Barra derecha. */
Paddle paddle2;
/* Imagen de fondo. */
PImage imagen;

/**
 * Inicializamos todo.
 */
void setup() {
  size(640,360);
  paddle = new Paddle(0, 10);
  paddle2 = new Paddle(width - 16, 10);
  mover = new Mover();
  mover2 = new Mover();
  imagen = loadImage("fondo3.jpg");
}

/**
 * Pinta los componentes en la pantalla.
 */
void draw() {
  background(0);
  imageMode(CENTER);
  image(imagen,width/2,height/2);
  tint(255,100); // transparencia
  if (mover.contadori >= 5 || mover.contadord >= 5) {
    mover2.update();
    mover2.checkEdges();
    if (mover.contadori < 10 && mover.contadord < 10) 
      mover2.display();
  } 
  mover.update();
  mover.checkEdges();
  if (mover.contadori < 10 && mover.contadord < 10) // si nadie ha ganado
    mover.display();
  paddle.update();
  paddle2.update2();
  mover.checkCollision(paddle);
  mover.checkCollision(paddle2);
  mover2.checkCollision(paddle);
  mover2.checkCollision(paddle2);
  paddle.display();
  paddle2.display();
  textSize(32);
  fill(255);
  text(mover.contadori, (width/2 - 100), 40);
  if (mover.contadori >= 10) { // si gana jugador derecho
    //text("10", (width/2 - 100), 40);
    textSize(40);
    text("WIN", 70, height/2);
  }
  textSize(32);
  text(mover.contadord, (width/2 + 80), 40);
  if (mover.contadord >= 10) { // si gana el jugador izquierdo
    textSize(40);
    text("WIN", 360, height/2);
  }
  for (int i = 10; i < height - 31; i++) { // pinta la recta de en medio
    rect(width/2, i+11, 5, 5);
    i += 11;
  }
  rect(5,0, width - 10, 10); // renga de arriba
  rect(5, height - 12, width - 10, 10); // recta de abajo
}