document.addEventListener("DOMContentLoaded", () => {
  // your code here
  getInput();
  bubbleListener()
});

function getInput() {
  form = document.querySelector("#create-task-form")
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault() //prevent refresh to retain info
  let description = document.querySelector("#new-task-description").value
  newTodo(description)
}

const newTodo = (description) => {
  li = document.createElement("li");
  li.innerHTML = description;
  li.className = "listItem"
  //deleteListener(li);
  addForm(li)
  ul = document.getElementById("tasks");
  ul.appendChild(li)
}

// function deleteListener(li) {
//   li.addEventListener("click", function() {
//     if(li.style.textDecoration === "line-through"){
//       li.style.textDecoration = "";
//     }
//     else{
//       li.style.textDecoration = "line-through";
//     }
//   });
// }


const bubbleListener = () => {
  let list = document.getElementById("list")
  list.addEventListener("click", (event) => {
    if (event.target.className === "listItem"){
      event.target.remove() //giulia
      //event.target.parentElement.removeChild(event.target) //kalada   
    }
  })
}

//form cature values 
//form to pop up underneitth??????
//have it already if you enter something
//take values and update dom

function addForm(li) {
  form = document.createElement("form");
  input = document.createElement("input");
  input.setAttribute("type", "text");
  form.appendChild(input);
  li.appendChild(form)
  addListener(li)
}

function addListener(li) {
  li.addEventListener("submit", function(event) {
    event.preventDefault() //prevent refresh to retain info
    let formValue = li.firstElementChild.firstElementChild.value
    formValue = formValue.split(" ")
    if (formValue[0] === "font"){
      li.style.fontSize = formValue[1]
      console.log("help")
    }
    else if (formValue[0] === "color"){
      li.style.color = formValue[1]
    }

    //li.firstElementChild.firstElementChild.value.remove()
  });
}

function liSubmit(event) {
  let description = document.querySelector("#new-task-description").value
  newTodo(description)
}