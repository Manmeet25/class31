const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 100

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,1200)
    engine = Engine.create();
    if(frameCount % 150 === 0)
    {
         for(var i=0; i<maxDrops; i++)
        {
         drops.push(new Drop(random(0,400),random(0,400)))
        }
    }
}

function draw(){
    Engine.update(engine);
  for(var i = 0; i<maxDrops; i++){
    drop[i].showDrop(); 
    drop[i].updateY()
   }
  drawSprites();
}   

