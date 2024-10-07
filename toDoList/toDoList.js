let inputContainer=document.getElementById("task-input");
let taskContainer=document.getElementById("task-list");

// taskContainer.innerHTML=localStorage.getItem("listItems");
function addTask(){
    if(inputContainer.value===0){
        alert("you have to write your task first")
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputContainer.value;
        taskContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    storeTheList();
    inputContainer.value='';
}

taskContainer.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    storeTheList();
}
else if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  storeTheList();}
},false);

function storeTheList(){
    localStorage.setItem("listItems",taskContainer.innerHTML);
}

function showTheList(){
    taskContainer.innerHTML=localStorage.getItem("listItems");
}
showTheList();