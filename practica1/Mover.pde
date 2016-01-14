import java.util.Random;

/**
 * Clase Mover para representar una pelota en la pantalla.
 */
class Mover {
  /* Localización de la pelota. */
  PVector location;
  /* Velocidad de la pelota. */
  PVector velocity;
  /* Aceleración de la pelota. */
  PVector acceleration;
  /* Tamaño de la pelota. */
  PVector size;
  /* Para la velocidad */
  float topspeed;
  /* Para cambiar contador izquierdo. */
  int contadori = 0;
  /* Para cambiar contador derecho. */
  int contadord = 0;
  /* Componente R del color de la pelota. */
  int col1 = 255;
  /* Componente B del color de la pelota. */
  int col2 = 255;
  /* Componente G del color de la pelota. */
  int col3 = 255;
  
  /**
   * Constructor único de un Mover.
   */
  Mover() {
    location = new PVector(width/2, height/2);
    velocity = new PVector(0, 0);
    topspeed = 5;
    acceleration = new PVector(0.002, 0.002);
    size = new PVector(20, 20);
  }
  
  /**
   * Actualiza la pelota.
   */
  void update() {
    location.add(velocity);
    velocity.add(acceleration);
    velocity.limit(topspeed);
  }

  /**
   * Muestra la pelota.
   */
  void display() {
    stroke(col1, col2, col3);
    strokeWeight(2);
    fill(col1, col2, col3);
    ellipse(location.x, location.y, size.x, size.y);
  }

  /**
   * Revisa si se salió de los límites o si rebotó en los muros de arriba y abajo.
   */
  void checkEdges() {
    location.x += velocity.x;
    location.y += velocity.y;
    if ((location.x > (width - (size.x / 2))) || ((location.x - (size.x/2)) < 0)) { // si llegó a un límite en x
      if ((location.x > (width - (size.x / 2)))){ // si llegó de lado derecho
        if(contadori < 10 && contadord < 10)
          contadori++;
        /* Reiniciamos la pelota */
        this.location.x = width/2; 
        this.location.y = height/2;
      } else { // si llegó del lado izquierdo
        if(contadori < 10 && contadord < 10)
          contadord++; 
        this.location.x = width/2;
        this.location.y = height/2;
      }  
    } 
    if ((location.y > (height - (size.y / 2)) - 10) || ((location.y - (size.y/2) - 10) < 0)) { // si llegó un límite en y
      Random r = new Random();
      /* Generamos nuevos colores para la pelota */
      col1 = r.nextInt(256);
      col2 = r.nextInt(256);
      col3 = r.nextInt(256);
      velocity.y *= -1;
      acceleration.y *= -1;
    }
  }
  
  /**
   * Si una pelota colisiona con el paddle.
   */
  void checkCollision(Paddle obj1) {
    if (isCollision(obj1)) {
        velocity.x *= -1;
        acceleration.x *= -1;
    }
  }
  
  /**
   * Revisa si una pelota colisiona con un Paddle.
   */
  boolean isCollision(Paddle obj1) {
    float circleDistanceX = abs(location.x - obj1.location.x - obj1.size.x/2);
    float circleDistanceY = abs(location.y - obj1.location.y - obj1.size.y/2);
    if (circleDistanceX > (obj1.size.x/2 + mover.size.x)) 
      return false;
    if (circleDistanceY > (obj1.size.y/2 + mover.size.x))
      return false;
    if (circleDistanceX <= (obj1.size.x/2)) 
      return true;
    if (circleDistanceY <= (obj1.size.y/2))
      return true;
    float cornerDistance_sq = pow(circleDistanceX - obj1.size.x/2, 2) +
                         pow(circleDistanceY - obj1.size.y/2, 2);
    return (cornerDistance_sq <= pow(obj1.size.x,2));
  }
}