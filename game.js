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
  for (var  r = 5; r >= 0; r--) {
    if (!board[r][c]) {
      board[r][c] = this.state.currentPlayer;
      break;
    }
  }

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
   isCollide(){
     var collid= Matter.Detector.canCollide(coin(arrBoard[5][3]["x"],arrBoard[5][0]["y"]-squareSize, arrBoard[5][3]["x"],arrBoard[5][0]["y"]-squareSize) )
  if(collid){
    return true;
    gameState=2
  }
  else{
    return false;
    gameState=1

  }
   }
   end(){
     if(endState=="win" ){
      
     console.log("end");
      textSize(15)
      text("Win!!!!!",displayWidth/4,displayHeight/4)
      gameState=2;//change5


      text("win",800,300)
      
     }
      else if(endState=="tie"){
      textSize(15)
      gameState=2;

      text("Tie!!!!!",displayWidth/4,displayHeight/4)
     
     }
     
     else{
      text("Lose!!",displayWidth/4,displayHeight/4)
     }
   }   
   }

    
