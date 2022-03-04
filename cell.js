class Cell{
    constructor(x,y,r,color,isLeftCell){
        if(x && y && color){
            this.r = r;
            this.position = createVector(x,y);
            this.color = createVector(color.x,color.y,color.z);

            //Check if it is now dividing
            this.isDivisionState = true;

            //Check wheteher it is left cell or not
            this.isLeftCell = isLeftCell;

            //Divison speed and it's acceleration
            this.divison_speed = r;
            this.divison_speed_acceleration = r / 50;
        }else{
            this.r = 40;
            this.position = createVector(random(this.r,width-this.r),random(this.r,height-this.r))
            this.color = createVector(random(0,255), random(0,255), random(0,255));
            this.isDivisionState = false;
        }
        this.movementSpeed = 1;
    }

    Mitosis_Division(){
        let distance = dist(this.position.x,this.position.y,mouseX,mouseY);
        if(distance <= this.r){
            cells.push(new Cell(this.position.x - this.r/4, this.position.y,this.r*0.75,this.color,true));
            cells.push(new Cell(this.position.x + this.r/4, this.position.y,this.r*0.75,this.color,false));
            cells = cells.filter((cell) => cell != this);
        }
    }

    Mitosis_Division_Movement(){
        if(this.isLeftCell){
            this.position.x = this.position.x - 0.1 * this.divison_speed;
        }else{
            this.position.x = this.position.x + 0.1 * this.divison_speed;
        }
        
        this.divison_speed = this.divison_speed - this.divison_speed_acceleration;
        this.divison_speed_acceleration += this.r/100;

        if(this.divison_speed <= 0){
            this.isDivisionState = false;
        }
    }

    Move(){
        if(this.isDivisionState){
            this.Mitosis_Division_Movement();
        }else{
            let randomMovement = p5.Vector.random2D();
            this.position.x += randomMovement.x * this.movementSpeed;
            this.position.y += randomMovement.y * this.movementSpeed;
        }
    }

    Show(){
        fill(this.color.x,this.color.y,this.color.z);
        noStroke();
        ellipse(this.position.x,this.position.y,this.r*2);
    }
}