let array = [];



function add() {
  let li = document.createElement("li");
  let inp = document.getElementById("myInput").value;
  let txt = document.createTextNode(inp);
  let Span = document.createElement('span');
  Span.id='Span';
  Span.appendChild(txt);
  li.appendChild(Span);
  
  let object = {
    content:document.getElementById('myInput').value,
    done:false
  };
  array.push(object);
  localStorage.setItem('Array', JSON.stringify(array));
  console.log(array);

  if (inp === '') {
    alert("You must input toDo!");
    return;   
  }

  let span = document.createElement('span');
  let nameS = document.createTextNode('Remove');
  span.className='remove';
  span.addEventListener('click',rem);
  span.appendChild(nameS);
  li.appendChild(span);
    
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'check';
  checkbox.addEventListener('change',strikeItem);
  li.appendChild(checkbox);

  document.getElementById("ul").appendChild(li);
}

function rem(){
  let myArray= [];
  myArray = array;
  for (let i=0;i<myArray.length;i++){
      myArray.splice(i,1);
      //alert('deleted ' + myArray[i]);
      console.log(myArray);
  }

  let li=this.parentElement;
  li.remove();
  
 
}

function strikeItem() {
  let item = this.parentElement;
  if (this.checked) {
    item.classList.add('check');
  } else {
    item.classList.remove('check');
  }
}
