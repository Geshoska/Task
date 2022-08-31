let niza = [];

function add() {
  let li = document.createElement("li");
  li.id = "li";
  let inp = document.getElementById("myInput").value;
  let txt = document.createTextNode(inp);
  let Span = document.createElement("span");
  Span.id = "Span";
  Span.appendChild(txt);
  li.appendChild(Span);

  let object = {
    element: li,
    content: document.getElementById("myInput").value,
    done: false,
  };
  niza.push(object);
  writeLocal();
  myLoad();

  if (inp === "") {
    alert("You must input toDo!");
    return;
  }

  let span = document.createElement("span");
  let nameS = document.createTextNode("Remove");
  span.className = "remove";
  span.addEventListener("click", rem);
  span.appendChild(nameS);
  li.appendChild(span);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "check";
  checkbox.addEventListener("click", strike);
  li.appendChild(checkbox);

  document.getElementById("ul").appendChild(li);
}

function rem() {
  let checkbox = this;
  let li = checkbox.parentElement;
  let ref = niza.find((el) => el.element === li);
  let index = niza.indexOf(ref);
  if (ref !== undefined) {
    li.remove();
    niza.splice(index, 1);
    console.log(niza);
  }
  writeLocal();
  myLoad();
}

function strike() {
  let checkbox = this;
  let item = checkbox.parentElement;
  let ref = niza.find((el) => el.element === item);
  if (ref !== undefined) {
    if (checkbox.checked) {
      item.classList.add("Checked");
      ref.done = true;
    } else {
      item.classList.remove("Checked");
      ref.done = false;
    }
  }
  writeLocal();
  myLoad();
  
}

function writeLocal() {
  localStorage.setItem("AppState", JSON.stringify(niza));
}

function myLoad() {
let items = localStorage.getItem('AppState');

if(localStorage.length == 0){
  document.getElementById('div1').style.display = 'none';
}else
    document.getElementById('div1').innerHTML = JSON.stringify(items);

}
