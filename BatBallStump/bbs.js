
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
   return 'it is a tie';
}
else if(computerChoice==='Stump' )
{
return 'computer has won';
}
else if( userChoice==='Stump')
{
   return 'user has won';
}
else if(computerChoice==='Bat'&& userChoice==='Ball')
{
   return 'compter has won';
}
else{
   return 'user has won';
}
}