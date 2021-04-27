function setup(){
    createCanvas(500, 500);
}

function draw(){
    for(let i = -69;i <= 69;i+=69) {
        point(mouseX + i, mouseY + i);
    }
}
