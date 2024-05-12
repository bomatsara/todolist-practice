import { getFromLocalStorage, writeInLocalStorage } from './utils.js';
import { TODO_LIST_NAME } from './consts.js';
import { taskListEl } from './refs.js';

function deleteTaskInLocalStorage(id) {
  const todoList = getFromLocalStorage(TODO_LIST_NAME) || [];
  const indexElement = todoList.findIndex(element => element.id === id);

  if (indexElement === -1) return;

  todoList.splice(indexElement, 1);

  writeInLocalStorage(TODO_LIST_NAME, todoList);
}

taskListEl.addEventListener('click', event => {
  const currentEl = event.target;

  if(!currentEl.dataset.delete) return;

  deleteTaskInLocalStorage(currentEl.dataset.delete);
  currentEl.parentNode.remove();
});