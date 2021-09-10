function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    switch(userInput){
      case "rock":
        return userInput;
        break;
      case "paper":
        return userInput;
        break;
      case "scissors":
        return userInput;
        break;
      case "bomb":
        return userInput;
        break;
      default:
        return "Please input a valid attack.";
        break;
                    }
  }
  
  function getComputerChoice(){
    let randomComputerChoice = Math.floor(Math.random() * 3);
    switch(randomComputerChoice){
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      default:
        return "scissors";
        break;
                               }
  }
  
  function determineWinner(userChoice, computerChoice){
    switch(userChoice){
        
  //same
      case computerChoice:
        return "It's a tie!";
        break;
        //-----------------------------
        
  //different
      default:   
        switch(userChoice){
            
          //-------------------------------
          //User chooses rock.
          case "rock":
            switch(computerChoice){
              //Computer chooses paper.  
              case "paper":
                return "You lose!";
                break;
              //Computer chooses scissors. 
              default:
                return "You win!";
                break;
                                 };
            break;
      
      //-------------------------------
              //User chooses paper.
          case "paper":
            switch(computerChoice){
              //Computer chooses scissors. 
              case "scissors":
                return "You lose!";
                break;
              //Computer chooses rock. 
              default:
                return "You win!";
                break;
                                 };
            break;
            
      //--------------------------------
              //User chooses scissors.
          case "scissors":
            switch(computerChoice){
              //Computer chooses rock. 
              case "rock":
                return "You lose!";
                break;
              //Computer chooses paper.  
              default:
                return "You win!";
                break;
                                 };
            break;
        //------------------------------
            //Cheat
          case "bomb":
            return "You blew the computer. Awesome!"
            break;
          default:
            return "The computer just kicked your ass!"
                         };
                     };  
  }
  
  function playGame(choice){
    let userChoice = getUserChoice(choice);
    let computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
    
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame("scissors"/*Enter your choice here*/);