function isValidCol(col){
    if(arrBoard[5][col]["state"]==0){
        return true 
    }
    else{
        return false
    }
}
function allchecks(row,col){
  if(horiCheck(row,col)>=4||vertCheck(row,col)>=4||diagCheck(row,col)>=4){
    return true
  }else{
    return false
  }
}
function horiCheck(row,col){
    var counter = 1
    //console.log(arrBoard[0][5]["state"])

    for(var i = col+1 ;i<arrBoard[row].length;i++){
      if(arrBoard[row][col]["state"]== arrBoard[row][i]["state"]){
          counter++
      }else{
        break;
        }
      }

      for(var i = col-1 ;i>=0;i--){
      if(arrBoard[row][col]["state"]== arrBoard[row][i]["state"]){
          counter++
        
      }else{
        break;
        }
      }
      return counter;
    }        
    function vertCheck(row,col){
        var counter = 1
      //  console.log(arrBoard[0][3]["state"])

        for(var i = row +1 ;i<arrBoard.length;i++){
          if(arrBoard[row][col]["state"]== arrBoard[i][col]["state"]){
              counter++
          }else{
            break;
            }
          }

          for(var i = row-1 ;i>=0;i--){
          if(arrBoard[row][col]["state"]== arrBoard[i][col]["state"]){
              counter++
            
          }else{
            break;
            }
          }
          return counter;
        }
    function diagCheck(row,col){
      var counter = 1
      
      for(var i = col; i<arrBoard[row].length;i++){
        console.log(row,col)
        if(arrBoard[row][col]["state"]== arrBoard[row+1][i]["state"]){
          
          counter++
          
        }else{
          break;
          }
        }
        for(var i = col-1; i>=0;i--){
          if(arrBoard[row][col]["state"]== arrBoard[row+1][i]["state"]){
            counter++
      
          }else{
            break;
            }
          }
          return counter;
        
      }
  

    
      