/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore,activePlayer,dice;

scores = [0,0];
round = 0;
activePlayer = 0;


x = document.getElementById("score-"+activePlayer).textContent;

document.querySelector('.btn-roll').onclick = function(){ 
    
    var currentScore = document.getElementById("current-"+activePlayer).textContent;
    if(currentScore == 0)
    {
    // Generating random Number
    dice = Math.floor(Math.random() * 6 ) + 1;
    // Assigning to the player current score
    document.getElementById("current-"+activePlayer).textContent = dice;
    document.querySelector('.dice').style.display = 'block';    
    document.querySelector('.dice').src = 'dice-'+dice+'.png';
        }
    
};

document.querySelector('.btn-hold').onclick =function(){
   
    var score1 = document.getElementById("score-"+activePlayer).textContent;
    document.getElementById("score-"+activePlayer).textContent = +score1 + +dice ; 
    var totalScore = document.getElementById("score-"+activePlayer).textContent;
    document.getElementById("current-"+activePlayer).textContent = 0;   
    document.querySelector('.dice').style.display ='none';
    if(totalScore > 10)
    {
        if(activePlayer === 0)
        {
            alert("Player 1 won the game!!");
        }
        else
        {
            alert("Player 2 won the game!!");
        }
          document.getElementById("score-0").textContent = "0";
          document.getElementById("score-1").textContent = "0";
          document.querySelector('.player-0-panel').classList.toggle('active');       
          document.querySelector('.player-1-panel').classList.toggle('active');   
          
   
    }
   if(activePlayer === 0)
        {
            activePlayer = 1;
            document.querySelector('.player-0-panel').classList.toggle('active');       
            document.querySelector('.player-1-panel').classList.toggle('active');       
   
        }
        else
        {
            activePlayer = 0;
            document.querySelector('.player-1-panel').classList.toggle('active');       
            document.querySelector('.player-0-panel').classList.toggle('active');       

        }
};


document.querySelector('.btn-new').onclick = function(){
    
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
 //   document.querySelector('.score-0').textContent = 0;

};





