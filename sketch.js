const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
background(backgroundImg)
}
   

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11,13);
    if(hour > 06 && hour < 08){
    bg = "sunrise1.png"

    }
else if(hour > 08 && hour < 10){
        bg = "sunrise2.png"
    
        }
        else if(hour > 10 && hour < 12){
            bg = "sunrise3.png"
        
            }
            else if(hour > 13 && hour < 15){
                bg = "sunrise4.png"
            
                }
                else if(hour > 15 && hour < 17){
                    bg = "sunrise5.png"
                
                    }
                    else if(hour > 17 && hour < 19){
                        bg = "sunrise6.png"
                    
                        }
                        else if(hour > 19 && hour < 21){
                            bg = "sunrise7.png"
                        
                            }
                            else {
                                bg = "sunset10.png"
                            
                                }
                                backgroundImg = loadImage(bg)
                            }