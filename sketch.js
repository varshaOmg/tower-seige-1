const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

// function preload() {
//     backgroundImg = loadImage("sprites/bg.png");
// }

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(610,350,280,20);
    ground2 = new Ground(950,250,280,20);

    box1 = new Classbox(510,250,50,50);
    box2 = new Classbox(560,250,50,50)
    box3 = new Classbox(610,250,50,50)
    box4 = new Classbox(660,250,50,50)
    box5 = new Classbox(710,250,50,50)
    box6 = new Classbox(560,180,50,50)
    box7 = new Classbox(610,180,50,50)
    box8 = new Classbox(660,180,50,50)
    box9 = new Classbox(610,110,50,50)

    
    box10 = new Classbox(850,210,50,50);
    box11= new Classbox(900,210,50,50)
    box12= new Classbox(950,210,50,50)
    box13= new Classbox(1000,210,50,50)
    box14= new Classbox(1050,210,50,50)
    box15= new Classbox(900,180,50,50)
    box16= new Classbox(950,180,50,50)
    box17= new Classbox(1000,180,50,50)
    box18= new Classbox(950,110,50,50)
    


    ball = new ClassBall(400,400,30)
    slingshot = new Slingshot(ball.body,{x: 200 , y: 120});
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    // strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ball.display();

    ground.display();
    ground1.display();
    ground2.display();






    slingshot.display();  
    
}

function mouseDragged(){

Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY})
    
}

function mouseReleased(){
slingshot.fly()
}
