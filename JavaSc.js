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
function strike(event) {
  let checkBox = [];
  let listLi= [];
  let checkboxes = document.getElementsByClassName('check');
  let li = document.getElementById('li');
    for(let i=0 ;i<niza.length;i++){
      listLi.push(niza[i].content);
      checkboxes[i].checked;
      checkBox.push(checkboxes[i].checked);
        
      if(niza[i].content === checkBox[i].checked){
      niza[i].done = true;
    } 
  } 
 /*
  if(checkBox[i].checked && listLi[i]){
    //niza[i].done = true;
    document.getElementById('li').classList.add('check');
  }
  if(checkboxes[i].checked === false){
    niza[i].done=false;
    document.getElementById('li').classList.remove('check');
  }*/
    
}
