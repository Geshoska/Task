function add() {
  let li = document.createElement("li");
  let inp = document.getElementById("myInput").value;
  let txt = document.createTextNode(inp);
  //let Span = document.createElement('span');
  //Span.appendChild(txt);
  li.appendChild(txt);
  if (inp === '') {
    alert("You must input toDo!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("myInput").value = "";

let span = document.createElement('span');
let nameS = document.createTextNode('Remove');
span.className='remove';
span.appendChild(nameS);
li.appendChild(span);



let remove = document.getElementsByClassName('remove');

for(let i =0; i<remove.length;i++){
  remove[i].onclick = function(){
    let div=this.parentElement;
    div.style.display='none';
  }
}

let checkbox = document.createElement('input');
checkbox.type='checkbox';
checkbox.className = 'check';
li.appendChild(checkbox);
}

