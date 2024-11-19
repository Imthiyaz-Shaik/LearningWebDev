const URL="https://official-joke-api.appspot.com/random_joke";
    const factPara=document.querySelector("#factPara");
    const btn=document.querySelector("#btn")


    const facts=async ()=>{
       try{
         let fetchData= await fetch(URL);
        if(!fetchData.ok){
            throw new Error(`HTTP error Status :${fetchData.status}`)
        }
        console.log(fetchData); //JSON
        let changeFormat= await fetchData.json();
        factPara.innerText=`${changeFormat.setup} : ${changeFormat.punchline}`;
        }catch (error) {
                console.error("Error fetching data:", error);
                factPara.innerText = "Failed to fetch the joke. Please try again.";
            }
        };

    btn.addEventListener("click",facts);
