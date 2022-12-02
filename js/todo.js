const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODOS_KEY = "todos";

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  //   console.log(todos);
  //   console.log(localStorage.getItem(TODOS_KEY));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((todos) => todos.id !== parseInt(li.id));
  saveTodo();
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  span.innerText = newTodo.text;
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = { text: newTodo, id: Date.now() };
  todos.push(newTodoObject);
  saveTodo();
  paintTodo(newTodoObject);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedTodo) {
  todos = savedTodo;
  savedTodo.forEach(paintTodo);
}
