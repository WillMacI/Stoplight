var redTime = 100;
var redLight = true;
var greenLight = false;
var yellowLight = false;
var speed = 0.1;
var yellowTime = 20;
var greetTime = 100;
function setup() {
    createCanvas(1440,900);
}

function draw() {
    background(255);
    fill(0);
    text(mouseX,mouseX,mouseY);
        text(mouseY,mouseX + 40,mouseY);
light();
}
function light(){
    noStroke();
    fill(20,20,20);
    if(redTime > 1 && redLight === true){
                fill(255,0,0);
    rect(520, 120, 150,150, 50);
        timerStartRed();
        yellowTime = 20;

    }
    if(yellowTime > 1 && yellowLight === true){

fill(255, 229, 0);
        rect(520, 320, 150,150, 50);
        timerStartYellow();
        greetTime = 100;
    }
    if(greetTime > 1 && greenLight === true){
            fill(93, 255, 0);
        rect(520, 520, 150,150, 50);
        timerStartGreen();
        redTime =100;

    }
    text(redTime, 10,10);
    text(greetTime, 10, 30);
    if(redTime < 1){
        redLight = false;
        greenLight = true;
        
    }
       if(greetTime < 1){
        greenLight = false;
        yellowLight = true;
        
    }
           if(yellowTime < 1){
        yellowLight = false;
        redLight = true;
        
    }
    text(yellowTime, 10, 60)
}
function timerStartRed(){
    redTime -= speed;
       

}
function timerStartYellow(){
     yellowTime -= speed;
}
function timerStartGreen(){
        greetTime -= speed;
}