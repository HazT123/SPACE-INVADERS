var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// HELLLOOOO
var x = canvas.width/2;
var y = canvas.height-30
var x2 = x2
var y2 = canvas.height-30
var dx = 2;
var dy =-2;
var ballRadius = 10
var rightPressed = false
var leftPressed = false
var spacePressed = false
var bulletCount = 0
var bulletActive = false;
var invaderRowCount = 5;
var invaderColumnCount = 11;
var invaderWidth = 40;
var invaderHeight = 20;
var invaderPadding = 10;
var invaderOffsetTop = 30;
var invaderOffsetLeft = 30;


var invaders = [];
for (c=0; c<invaderColumnCount; c++) {
invaders[c] = [];
for (r=0; r<invaderRowCount; r++) {
    invaders[c][r] = { x:0, y:0}
}
} 

function drawInvaders() {
for(c=0; c<invaderColumnCount; c++) {
    for(r=0; r<invaderRowCount; r++) {
        var invaderX = (c*(invaderWidth+invaderPadding))+invaderOffsetLeft;
        var invaderY = (r*(invaderHeight+invaderPadding))+invaderOffsetTop;
        invaders[c][r].x = invaderX
        invaders[c][r].y = invaderY
        ctx.beginPath();
        ctx.rect(invaderX, invaderY, invaderWidth, invaderHeight);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();
    }
}
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", spaceBarHandler, false)

function keyDownHandler(e) {
if(e.keyCode == 39) {
    rightPressed = true;
}
else if(e.keyCode == 37) {
    leftPressed = true;
}
}

function keyUpHandler(e) {
if(e.keyCode == 39) {
    rightPressed = false;
}
else if(e.keyCode == 37) {
    leftPressed = false;
}
}

function spaceBarHandler(e) {
if(e.keyCode == 32) {
    spacePressed = true;
}
}

function drawBall() {
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
}

function drawBullet() {
if (bulletActive == false) {
    ctx.beginPath();
    ctx.rect(x2, y2 - 25, 1, 15, );
    ctx.fillStyle = "black"
    ctx.fill();
    ctx.stroke();
    ctx.closePath;
    bulletCount ++
    if (y2 < 0) {
        spacePressed = false;
        y2 = canvas.height-30;
        bulletCount = 0
    }
}
}   

function collisionDetection() {
for(c=0; c<invaderColumnCount; c++) {
    for(r=0; r<invaderRowCount; r++) {
        var i = invaders[c][r];
        if (i.status == 1) {
            if(x > b.x && x < b.x+invaderWidth && y > b.y &&+invaderHeight) {
                b.status = 0
                bulletActive = true;
            }
        }  
    }
}
}



function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawInvaders();

drawBall();
// stops ball moving too far
if(x > canvas.width-ballRadius || x < ballRadius) {
    dx = -dx;
}
if(y > canvas.height-ballRadius || y < ballRadius) {
    dy = -dy;
}

if(rightPressed && x < canvas.width-ballRadius || x < ballRadius) {
x += 3;
} 
else if(leftPressed && x < 0 | x > ballRadius) {
x -= 3;
}

if(spacePressed) {
if (bulletCount === 0) {
    x2 = x
}
y2 -=4;
drawBullet();
} 

} 
setInterval(draw, 10)