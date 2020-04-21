class player {
    constructor(){}
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",function(data){
            playerCount=data.val(); 
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })  
      }
      update(Name){
          var playerindex="player"+ playerCount;
          database.ref(playerindex).set({
              Name :Name
          })
      }
}