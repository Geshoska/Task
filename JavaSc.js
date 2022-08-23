let niza = [];


function add(){
  let li = document.createElement("li");
  li.id='li';
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
  niza.push(object);
  localStorage.setItem('Array', JSON.stringify(niza));
  console.log(niza);

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
  checkbox.addEventListener('click',strike);
  li.appendChild(checkbox);

  document.getElementById("ul").appendChild(li);
}

function rem(){
  let li=this.parentElement;
  for (let i=0; i<niza.length;i++) {
    if(li.firstChild.innerText === niza[i].content){
       li.remove();
       niza.splice(i,1);
    }
  } 
}

function strike (){
  let item = this.parentElement;
  let checkbox = document.getElementsByClassName('check');
  for (let i=0;i<niza.length;i++){
  if(checkbox[i].checked && niza[i].content){
    item.classList.add('check');
    niza[i].done=true;
  }
  else{
  item.classList.remove('check'); 
  niza[i].done=false;
  }
  }  
}