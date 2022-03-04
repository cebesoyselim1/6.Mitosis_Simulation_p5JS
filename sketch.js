let cells = [];

function setup(){
    createCanvas(400,400);
    background(0);

    cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());
}

function draw(){
    background(0);

    for(let ct = 0; ct < cells.length; ct++){
        cells[ct].Move();
        cells[ct].Show();
    }
    
}

function mousePressed(){
    for(let ct = cells.length - 1; 0 <= ct; ct--){
        cells[ct].Mitosis_Division();
    }
}