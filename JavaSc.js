function add(){

    /*let textNode = document.getElementById('myInput');
	let lista = document.getElementById('lista');
    let item = document.createElement("li");
    item.innerHTML = textNode.value;    
    lista.appendChild(item);*/
    
    let x= document.getElementById('myInput');
    let li=document.createElement('li');
    let label=document.createElement('label');
    let span=document.createElement('span');
    let inp=document.createElement('checkbox');
    
    span.innerHTML=x.value;
    let bullet= ul.appendChild(li);
    bullet.appendChild(inp);
    li.appendChild(span);
    
}
function remove() {
    let e=document.querySelector("li:last-child");
    e.parentElement.removeChild(e);
}


function strike(){
    let list = document.getElementById('ul');      
    let checkbox = document.createElement('input');
    checkbox.type='checkbox';
             
    list.appendChild(checkbox);


    for (let i;i<x.length;i++){
        x[i].style.textDecoration = "line-through";
        //x[i].style.textDecoration='line-through';
    }
    //x.strike;
}

  