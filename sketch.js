function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#D6C951");
  text()
  fill ("#5A6E77");//cor da 1 casa
  square(10, 340,50);//quadrado 1 casa
  fill("rgb(121,41,41)");//cor telhado casa 1
  triangle(4, 340, 37, 308, 65,340);//telhado casa
  fill("#678C9E");//cor da 2 casa
  square(80, 290, 80);//casa 2
  fill("rgb(112,31,31)");//cor telhado da casa 2
  triangle(75,290, 120, 250, 165, 290);//telhado da casa 2
  fill("#134915");//cor chão
  rect(0, 380,400);//chão
  fill("#E9B721");//cor ceu
  fill("#094E0B");//cor chão
  rect(70, 370 , 100);//chão
  fill("#407203");//cor meio circo
  circle(280, 400, 200);//meio circo
  fill("#F7C531");//cor sol
  circle(320,70, 70,);//sol
  textSize(30);//tamanho da arvore
  text("🌳",190,350);// arvore
  textSize(35);//tamanho da arvore
  text("🌳",170, 390);//tamanho da arvore 
  textSize(40);//tamanho arvore
  text("🌳", 220, 318);//tamanho da arvore
  textSize(45);//tamanho coquero
  text("🌴", 345, 375);//coqueiro
  textSize(40)//tamanho coquero
  text("🌴",320, 330);//coqueiro
  textSize(50);//tamanho coquero
  text("🌴",262, 309);//coqueiro
  textSize(60);//tamanho da nuvem
  text("☁️",275, 120);//nuvem
  textSize(90);//tamanho da nuvem
  text("☁️",170, 100);//nuvem
  textSize(150);//tamanho da nuvem
  text("☁️",10, 180);//nuvem
  textSize(35);//tamanho da janela
  text("🪟",100, 326);//janela
    if (mouseIsPressed){
  console.log(mouseX, mouseY)}
  
  
}