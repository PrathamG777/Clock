class Home{
    constructor(){
        this.greeting = createElement('h2');
        this.choice = createElement('h3');
        this.name = createInput('Name');
        this.button = createButton('Enter');
        this.buttonOne = createButton('Time & Date');
        this.buttonTwo = createButton('Schedule');
        this.buttonThree = createButton('Important Events');
    }

    display(){
        this.name.position(600,400);
        this.button.position(600,380);
        /*this.greeting.hide();
        this.choice.hide();
        this.buttonOne.hide();
        this.buttonTwo.hide();
        this.buttonThree.hide();*/
        this.button.mousePressed(()=>{
            this.name.hide();
            this.button.hide();
            this.greeting.html("Hello" + this.name.value());
            this.greeting.position(600,125);
            this.choice.html("What Would You Like To See?");
            this.choice.position(600,250);
            this.buttonOne.position(600,600);
            this.buttonTwo.position(600,400);
            this.buttonTwo.position(600,200);
        });

    }
}