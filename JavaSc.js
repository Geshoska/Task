let niza = [];
const inp = document.getElementById("myInput");

function createTodo(content, done) {
  let li = document.createElement("li");
  li.id = "li";
  let Span = document.createElement("span");
  Span.textContent = content;
  Span.id = "Span";
  li.appendChild(Span);

  let span = document.createElement("span");
  span.textContent = "Remove";
  span.className = "remove";
  span.addEventListener("click", rem);
  li.appendChild(span);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "check";
  checkbox.addEventListener("click", strike);
  li.appendChild(checkbox);

  if (done) {
    li.classList.add("Checked");
  }

  return { element: li, content: content, done: done };
}

function add() {
  if (inp.value === "") {
    alert("You must input toDo!");
    return;
  }
  const element = createTodo(inp.value, false);

  niza.push(element);
  writeLocal();
  myLoad();
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
}

function writeLocal() {
  localStorage.setItem(
    "AppState",
    JSON.stringify(
      niza.map((item) => ({ content: item.content, done: item.done }))
    )
  );
}

function myLoad() {
  const container = document.querySelector("#ul");
  const newDiv = document.querySelector('#div1');
  container.childNodes.forEach((child) => child.remove()); // empty the container
  if (localStorage.length !== 0) {
    let items = localStorage.getItem("AppState");
    const itemsFromLocalStorage = JSON.parse(items);
    niza = [];

    for (let i = 0; i < itemsFromLocalStorage.length; i++) {
      const element = createTodo(
        itemsFromLocalStorage[i].content,
        itemsFromLocalStorage[i].done
      );
      if(element.done){
      newDiv.appendChild(element.element);
      newDiv.classList.add('#div1-fadeIn');
      }
      else
      container.appendChild(element.element);
      container.classList.add('#div1-fadeIn');
      niza.push(element);
    }
  }
}
document.addEventListener("DOMContentLoaded", myLoad);

function refresh() {
  window.location.reload();
}

function clearAll() {
  if (localStorage.length > 0) localStorage.clear();
  window.location.reload();
}