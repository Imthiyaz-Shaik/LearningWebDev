
 let toDoList=[];
let storedData=JSON.parse(localStorage.getItem('storeToDoList'));
   toDoList=[storedData];
   toDoList.push(storedData);
   addToDo();


function addToDo(){
    let toDoInput=document.querySelector('#toDo-input');
    let toDoDate=document.querySelector('#toDo-date');
    let inputElement=toDoInput.value;
    let dateElement=toDoDate.value;
    toDoList.push({item:inputElement,dueDate:dateElement});
    toDoInput.value='';
    toDoDate.value='';
    displayItems();
}


function displayItems(){
    let containerElement=document.querySelector('#display-container');
    let newHtml= '';
  for(let i=0;i < toDoList.length;i++){
   let {item,dueDate}=toDoList[i];
   newHtml+=`
   <span id="toDo-span1">${item}</span>
   <span id="toDo-span2">${dueDate}</span>
   <button id="dlt-button" onclick="toDoList.splice(${i},1);
   displayItems();
   localStorage.removeItem(toDoList[i].item);
   localStorage.removeItem(toDoList[i].dueDate);
   ">Delete</button>
   `;
  }
containerElement.innerHTML=newHtml;
storeData();
   
}

function storeData(){
  localStorage.setItem('storeToDoList',JSON.stringify(toDoList));
}

