class Game{
    constructor(){
      
    }
    getGameState(){
      var gameStateRef = database.ref('gameState')
      gameStateRef.on("value",function(data){
        gameState = data.val();
      })
    }
    updateState(state){
        database.ref('/').update({
            gameState: state
          });

    }
    async start(){
        if(gameState == 0 ){
            player = new Player()
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getPlayerCount();
              }
              form = new Form()
              form.display();
        }
    }
    
    play(){
      form.hide();
      Player.getPlayerInfo();
      background(255,200,200);  
//    if(allPlayers !== undefined){
       
        if(turn ===1 && playerState==1){
          var coin = new Coin(arrBoard[5][3]["x"],arrBoard[5][0]["y"]-squareSize,59,59)
          coin.setImage(redImage)
          coins.push(coin)
          playerState=2
    
        } 
        if(turn==2 && playerState==2){
          var  coin=new Coin(arrBoard[5][3]["x"],arrBoard[5][0]["y"]-squareSize,59,59)
          coin.setImage(yellowImage)
          coins.push(coin)
          playerState=1
        
        }
        for(var i = 0; i<coins.length; i++){
          coins[i].display()
        }
      
      coins[coins.length-1].setCoinX()
      ground.display()  
      board.drawBoard()
    
      
   // }
   }
   end(){
     if(endState=="win" ){
       //if( gameState==2)
     console.log("end");
      textSize(15)
      gameState=2;

      text("win",800,300)
      
     }
      if(endState=="tie"){
      textSize(15)
      gameState=2;

      text("tie",800,300)
     
     }
     
     
   }   
   }

    
