let score={
   win:0,
   lost:0,
   tie:0,

   displayScore: function(){
     return` No of matches won:${this.win},lost:${this.lost} and tie:${this.tie}
      `;
   }
};
function getcomputerChoice(){
    let randomNumber=Math.random()*3;
    console.log(randomNumber);

    if(randomNumber>0 && randomNumber<1)
        {
          return'Bat';
        }
        else if( randomNumber<2)
        {
           return'Ball';
        }
        else
        {
           return'Stump';
        }
}

function getResultMsg(userChoice,computerChoice)
{
if(userChoice===computerChoice)
{
   score.tie++;
   return 'it is a tie';
   
}
else if(computerChoice==='Stump' )
{
   score.lost++;
return 'computer has won';
}
else if( userChoice==='Stump')
{
   score.win++;
   return 'user has won';
}
else if(computerChoice==='Bat'&& userChoice==='Ball')
{
   score.lost++;
   return 'compter has won';
}
else{
   score.win++;
   return 'user has won';
}
}

function alertMsg(userChoice,computerChoice,resultMsg)
{
  return   alert(`you have chosen ${userChoice},computer choice is ${computerChoice} 
      
   ${resultMsg}
      
   ${score.displayScore()}` );
}