function love.load()
	world = love.physics.newWorld(0, 0)
	world:setCallbacks(beginContact, endContact, preSolve, postSolve)
	love.window.setTitle("Space Run")
	love.window.setMode(1280, 599)
	--Declaracion de nuestra nave
	nave = {}
	
	nave.imagen =love.graphics.newImage("Images/Ship2.png") 
	nave.shape = love.physics.newCircleShape(nave.imagen:getWidth()/2)
	nave.body= love.physics.newBody(world,0,150, "dynamic")
	nave.fixture = love.physics.newFixture(nave.body,nave.shape)
	nave.fixture:setUserData("Nave")



function beginContact(a, b, coll)
 	-- if (a:getUserData()== "Nave" and b:getUserData() == "Portal") then
 	-- 	a.body:setX()  = 255
 	-- 	a.body:setY()  = 255
 	-- end
end
 
function endContact(a, b, coll)
 
end
 
function preSolve(a, b, coll)
 
end
 
function postSolve(a, b, coll, normalimpulse1, tangentimpulse1, normalimpulse2, tangentimpulse2)
 
end

	ubicacionmeteoritos = {
	 {5,100} ,{30,100} ,{60,100} ,{90,100} ,{115,100} ,{140,100}, {170,100} , {200,100} , {230,100}, {260,100}, {290,100}, 
	 {320,100}, {350,100}, {380,100}, {410,100}, {440,100}, {470,100}, {500,100}, {530,100}, {560,100}, {590,100}, {620,100}, {650,100},
	 {680,100}, {710,100}, {740,100}, {770,100}, {800,100}, {830,100}, {860,100}, {890,100}, {920,100}, {950,100}, {980,100}, {1010,100},
	 {1040,100}, {1070,100}, {1100,100}, {1140,100}, {1170,100}, {1200,100}, {1230,100}, {1260,100},
	 {5,220} ,{30,220}, {60,220} ,{90,220}, {115,220}, {140,220},{170,320},{200,320},{230,320},{260,320}, {260, 130},{260, 160}, {260, 190}, {260, 210}, {260, 240}, {260, 270}, {260, 300},
	 {400,360}, {400, 390},{400, 420}, {400, 450}, {400, 480},{400,330}, {400, 300},{400, 270}, {400, 240}, {400, 210},  {400, 180}, {400, 150}, {400, 120},
	 {260, 420}, {260, 450}, {260, 480}, {5,480},{30,480}, {60,480}, {90,480}, {110,480}, {140,480} , {170,480},  {200,480}, {230,480}, {260,480} ,
	 {5,420},{30,420}, {60,420}, {90,420}, {110,420}, {140,420} , {170,420},  {200,420}, {230,420}, {260,420},
	 {500, 240},{500, 270}, {500, 300}, {520, 300}, {550, 300},{580, 300},{610, 300},{640, 300},{670, 300},  {700, 300},{730, 300},{760, 300},{790, 300}, {820, 300}, {850, 300},
	 {590, 200},{620, 200},{650, 200},{680, 200},{710, 200},{740, 200},{770, 200},{800, 200},{830, 200},{860, 200},{890, 200},{920, 200},{950, 200},{980, 200},
	 {1010, 200}, {1040,200}, {1070,200}, {1100,200}, {1140,200}, {1170,200}, {1200,200}, {1230,200}, {1260,200},
	 {880, 300},{910, 300},{940, 300},{970, 300}, {1000, 300},{1030, 300} , {1060, 300},{1090, 300},{1110, 300}, {1140, 300} , {1170, 300} , {1210, 300},  {1240, 300}, {1270, 300},
	 {1030, 400},{1030, 370}, {1030, 340},
	 {530, 400}, {500, 400},{470, 400}, {440, 400},{560, 400},{590, 400},{620, 400},{650, 400},{680, 400},{710, 400},
	 {710, 420},{710, 450},{710, 480},{710, 510},{710, 540},{710, 570},{710, 600},
	 {820, 420},{820, 450},{820, 480},{820, 510},{820, 540},{820, 570},{820, 600},
	 {530, 500}, {500, 500},{470, 500}, {440, 500},{560, 500},{590, 500},
	 {970, 500},{1000, 500},{1030, 500},{1060, 500},{1090, 500},{1120, 500},{1150, 500},{1180, 500},{1220, 500},{1250, 500}
	}
	ubicacionportales = {{300,250}}

	portales = {}


	meteoritos = {}

for i=1,#ubicacionmeteoritos do

	meteoritos[i]= {}
	meteoritos[i].imagen =love.graphics.newImage("Images/meteorito.png") 
  	meteoritos[i].body= love.physics.newBody(world,ubicacionmeteoritos[i][1],ubicacionmeteoritos[i][2],"static")
  	meteoritos[i].shape = love.physics.newCircleShape(meteoritos[i].imagen:getWidth()/2)
  	meteoritos[i].fixture = love.physics.newFixture(meteoritos[i].body,meteoritos[i].shape)
	
end

for i=1,#ubicacionportales do

	portales[i]= {}
	portales[i].imagen =love.graphics.newImage("Images/Portal.png") 
  	portales[i].body= love.physics.newBody(world,ubicacionportales[i][1],ubicacionportales[i][2], "static")
  	portales[i].shape = love.physics.newCircleShape(portales[i].imagen:getWidth()/2)
  	portales[i].fixture = love.physics.newFixture(portales[i].body,portales[i].shape)
	portales[i].fixture:setUserData("Portal")
end

	--Imagen del fondo del juego
	bg = love.graphics.newImage("Images/space_12.jpg")



	--Ponemos rectangulos para limitar el area donde puede ser manejada la nave
	--Pared inferior
	rectanguloAbajo = {}

	rectanguloAbajo.body= love.physics.newBody(world,love.graphics.getWidth()/2 ,love.graphics.getHeight())
	rectanguloAbajo.shape = love.physics.newRectangleShape(love.graphics.getWidth(),1) 
	rectanguloAbajo.fixture = love.physics.newFixture(rectanguloAbajo.body,rectanguloAbajo.shape) 
	--Pared superior
	rectanguloArriba = {}

	rectanguloArriba.body= love.physics.newBody(world,love.graphics.getWidth()/2 ,0)
	rectanguloArriba.shape = love.physics.newRectangleShape(love.graphics.getWidth(),1) 
	rectanguloArriba.fixture = love.physics.newFixture(rectanguloArriba.body,rectanguloArriba.shape) 
	--Pared izquierda
	rectanguloIzquierdo = {}

	rectanguloIzquierdo.body= love.physics.newBody(world,0 ,love.graphics.getHeight()/2)
	rectanguloIzquierdo.shape = love.physics.newRectangleShape(1,love.graphics.getHeight()) 
	rectanguloIzquierdo.fixture = love.physics.newFixture(rectanguloIzquierdo.body,rectanguloIzquierdo.shape) 

	--Pared derecha
	rectanguloDerecho = {}

	rectanguloDerecho.body= love.physics.newBody(world,love.graphics.getWidth() ,love.graphics.getHeight()/2)
	rectanguloDerecho.shape = love.physics.newRectangleShape(1,love.graphics.getHeight()) 
	rectanguloDerecho.fixture = love.physics.newFixture(rectanguloDerecho.body,rectanguloDerecho.shape) 

end

function love.update(dt)
  --Hacemos el update del mundo
  world:update(dt) 

  if love.keyboard.isDown("right") then --Movemos a la derecha la nave
    nave.body:applyTorque(5000)
  elseif love.keyboard.isDown("left") then --Movemos a la izquierda la nave
  nave.body:applyTorque(-5000)
  elseif love.keyboard.isDown("up") then --Movemos hacia arriba la nave
    nave.body:applyForce(math.cos(nave.body:getAngle())*1000, math.sin(nave.body:getAngle())*1000)
   elseif love.keyboard.isDown("down") then --Movemos hacia atras la nave
    nave.body:applyForce(-math.cos(nave.body:getAngle())*1000, -math.sin(nave.body:getAngle())*1000)
end




end

 function love.draw()

 	--love.graphics.setColor(255,255,255,0)
 	love.graphics.draw(bg)
 	--Dibujamos la nave dentro de un circulo
 	
 	love.graphics.setColor(0, 0, 0, 0)
 	love.graphics.circle("line",nave.body:getX(), nave.body:getY(), nave.shape:getRadius(), 20)
 	love.graphics.setColor(255, 255, 255, 255)


 	for i,meteorito in ipairs(meteoritos) do
 		love.graphics.setColor(0, 0, 0,0)
 		love.graphics.circle("line",meteorito.body:getX(), meteorito.body:getY(), meteorito.shape:getRadius(), 20)
 		love.graphics.setColor(255, 255, 255, 255)
 		

 	love.graphics.push()
 	 love.graphics.translate(meteorito.body:getX(), meteorito.body:getY())
 	 love.graphics.draw(meteorito.imagen,meteorito.imagen:getWidth()/2 -25,meteorito.imagen:getHeight()/2 -25)
 	 love.graphics.pop()

 	end

 	for i,portal in ipairs(portales) do
 		love.graphics.setColor(0, 0, 0,0)
 		love.graphics.circle("line",portal.body:getX(), portal.body:getY(), portal.shape:getRadius(), 20)
 		love.graphics.setColor(255, 255, 255, 255)
 		

 	love.graphics.push()
 	love.graphics.translate(portal.body:getX(), portal.body:getY())
 	love.graphics.draw(portal.imagen,portal.imagen:getWidth()/2 -25,portal.imagen:getHeight()/2 -25)
 	love.graphics.pop()

 	end




 	-- 	
 	--love.graphics.circle("line",meteoritos.body:getX(),meteoritos.body:getY(),meteoritos.shape:getRadius(),20)
 	--
 	

 		love.graphics.push()
 	 	love.graphics.translate(nave.body:getX(), nave.body:getY())
 	 	love.graphics.rotate(nave.body:getAngle())
 	 	love.graphics.draw(nave.imagen,-nave.imagen:getWidth()/2,- nave.imagen:getHeight()/2)
 	 	love.graphics.pop()

 	 love.graphics.setColor(0, 0, 0,0)
 	love.graphics.polygon("line", rectanguloAbajo.body:getWorldPoints(rectanguloAbajo.shape:getPoints()))
 	love.graphics.polygon("line", rectanguloArriba.body:getWorldPoints(rectanguloArriba.shape:getPoints()))
 	love.graphics.polygon("line", rectanguloIzquierdo.body:getWorldPoints(rectanguloIzquierdo.shape:getPoints()))
 	love.graphics.polygon("line", rectanguloDerecho.body:getWorldPoints(rectanguloDerecho.shape:getPoints()))
 	love.graphics.setColor(255, 255, 255, 255)
end



--Constructor de la clase meteorito

