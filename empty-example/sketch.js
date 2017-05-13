var redTime = 40;
var redLight = true;
var greenLight = false;
var yellowLight = false;
var speed = 0.1;
var yellowTime = 5;
var greetTime = 40;
var countdownTimer = 0;
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
    fill(243, 208, 64);
        rect(470,70,260,650)

        textSize(10);

    strokeWeight(20);

    fill(20,20,20);
                        fill(255,0,0,70);
    if(redTime > 1 && redLight === true){
                fill(255,0,0);
        timerStartRed();
        yellowTime = 5;

    }


        rect(520, 120, 150,150, 100);
fill(255, 229, 0,70);

    if(yellowTime > 1 && yellowLight === true){

fill(255, 229, 0);
        timerStartYellow();
        greetTime = 100;
    }
            rect(520, 320, 150,150, 100);
            fill(93, 255, 0,70);

    if(greetTime > 1 && greenLight === true){
            fill(93, 255, 0);
        timerStartGreen();
        redTime =100;

    }
            rect(520, 520, 150,150, 100);

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
    fill(0);
    rect(90, 150, 100,100);
        rect(90, 300, 100,100);

    fill(255);
    textSize(100);
    if(redLight == true){
            text("✋", 100, 220);

    }
    if(greenLight == true){
        text("🏃🏿", 100, 400);

    }
        textSize(10);
}
function timerStartRed(){
    redTime -= speed;
       

}
function timerStartYellow(){
     yellowTime -= 0.09;
}
function timerStartGreen(){
        greetTime -= speed;
}
