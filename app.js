addToDo = document.getElementById("addToDo");
btn = document.getElementById("btn");
item = document.getElementById("item");
container = document.querySelector(".container");
delBtnC = document.querySelector(".delBtn");
h1 = document.querySelector("h1");

h1.innerHTML = `<i class="fas fa-clipboard-list"></i> TO DO APP`;

btn.addEventListener("click", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const val = addToDo.value;

  if (val.length > 0) {
    let div = document.createElement("div");
    let p = document.createElement("p");

    div.classList.add("list-Div");
    item.appendChild(div);
    div.appendChild(p);
    div.classList.add("itemList");

    p.innerHTML = val;

    addToDo.value = "";

    //   ---Check button btn ---

    let checkBtn = document.createElement("button");
    div.appendChild(checkBtn);
    checkBtn.classList.add("delBtn");
    checkBtn.innerHTML = `<i class="far fa-check-square"></i>`;

    //   ---Delete button btn ---

    let delbtn = document.createElement("button");
    div.appendChild(delbtn);
    delbtn.classList.add("delBtn");
    delbtn.innerHTML = `<i class="fas fa-times"></i>`;

    // ---------Click Events------------
    //   -----Event Check button Line-through--

    checkBtn.addEventListener("click", () => {
      p.classList.toggle("line");
      checkBtn.style.color = "green";
      p.style.color = "green";
    });

    //  ------Delete Event on double click--
    delbtn.style.color = "red";

    delbtn.addEventListener("dblclick", () => {
      p.style.display = "none";
      delbtn.style.display = "none";
      div.style.display = "none";

      console.log(123);
    });
  } else {
    alert("Please enter a task");
  }
}
