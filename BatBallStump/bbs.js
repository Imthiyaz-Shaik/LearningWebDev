
let scoreStr=localStorage.getItem('score');
let score = JSON.parse(scoreStr) || {
   win:0,
   lost:0,
   tie:0,
  
};

score.displayScore = function(){
   return `score:won:${score.win},lost:${score.lost} and tie:${score.tie}
    `;
 };

 function resetScore(){
   score={
      win:0,
      lost:0,
      tie:0,
      displayScore : function(){
         return `score:won:${score.win},lost:${score.lost} and tie:${score.tie}
          `;}
 }
}

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
localStorage.setItem('score',JSON.stringify(score));

//   return   alert(`you have chosen ${userChoice},computer choice is ${computerChoice} 
      
//    ${resultMsg}
      
//    ${score.displayScore()}` );

   document.querySelector('#user-choice').innerText=userChoice ?`you have chosen ${userChoice}`:'';
document.querySelector('#computer-choice').innerText=computerChoice ?`computer choice is ${computerChoice} `:'';
document.querySelector('#result').innerText=resultMsg ? resultMsg:'';
document.querySelector('#score').innerText=score.displayScore();
}