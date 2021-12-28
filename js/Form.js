class Form{
    constructor(){
        this.input = createInput(" ").attribute("placeholder","Enter your name");
        this.playButton = createButton("Play");
        this.title = createElement("h1");
        this.greeting = createElement("h2");
    }
    setElementPosition(){
        this.title.position(500,50);
        this.input.position(width/2-110,height/2-80);
        this.playButton.position(width/2-90,height/2-20);
        this.greeting.position(width/2-300,height/2-100);
    }
    setElementStyle(){
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");

    }
    hide(){
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();

    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
        })
    }
    display(){
        this.title.html("Green Arrow")
        this.setElementPosition();
        this.setElementStyle();
        this.handleMousePressed();
    }
}