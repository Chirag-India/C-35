class form {
    constructor(){}
    display(){
        var Title= createElement("h2");
        Title.html("Car Racing Game ");
        Title.position(130,0);
        var Input = createInput("Name");
        Input.position(130,160);
        var Button = createButton("Play");
        Button.position(250,200);
        
        Button.mousePressed(function(){
            Input.hide();
            Button.hide();
            var Name = Input.value();
            playerCount+=1;
            player.update (Name)
            player.updateCount(playerCount);
            var Greeting = createElement("h3");
            Greeting.html("Hello"+Name)
            Greeting.position(130,160);
        
        })

    }
}