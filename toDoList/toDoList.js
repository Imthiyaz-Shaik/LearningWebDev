let toDoList=[
  {
    item:'buy milk',
    dueDate:'25/09/2024',
  },
  {
    item:'prepare oats',
    dueDate:'25/09/2024',
  }
];
displayItems();

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
    let newHtml='';
  for(let i=0;i < toDoList.length;i++){
    let item=toDoList[i].item;
    let dueDate=toDoList[i].dueDate;
   newHtml+=`
   <span>${item}</span>
   <span>${dueDate}</span>
   <button onclick="toDoList.splice(${i},1);
   displayItems();">Delete</button>
   `;
  }
containerElement.innerHTML=newHtml;
}

