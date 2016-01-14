/**
 * Clase que implementa un Jugador o Barra.
 */
class Paddle {
  
  /* Localización de la barra. */
  PVector location;
  /* Tamaño de la barra. */
  PVector size;
  
  /**
   * Constructor único de una barra. Ubica el paddle en las
   * coordenadas que se le pasan como parámetro.
   */
  Paddle(int x, int y) {
    location = new PVector(x, y);
    size = new PVector(15, 80);
  }
  
  /**
   * Controla a un jugador con las teclas w y s (arriba y abajo).
   */
  void update() {
    if (keyPressed) {
      if ((key == 'w' || key == 'W') && location.y > 5)
        location.y -= 10;
      if ((key == 's' || key == 'S') && location.y < (height - 80))
        location.y += 10;
    }
  }
  
  /**
   * Controla a un jugador con el mouse (arriba y abajo).
   */
  void update2() {
    location.y = mouseY;
    if (location.y > 5)
      location.y -= 10;
    if (location.y < (height - 80))
      location.y += 10; 
  }
  
  /**
   * Dibuja una barra.
   */
  void display() {
    stroke(255);
    strokeWeight(2);
    fill(255);
    rect(location.x, location.y, size.x, size.y);
  }
}