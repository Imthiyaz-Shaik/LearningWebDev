

function ComputerGeneratedChoice()
{
    let randomNumber=Math.random()*3;
    console.log(randomNumber);

    if(randomNumber >0 && randomNumber <=1)

    {return'Bat';}

    else if(randomNumber >1 && randomNumber <=2)

        { return'Ball'; }

    else
     { return'Stump'; }
}