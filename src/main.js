import { nanoid } from 'nanoid';
import { writeInLocalStorage, getFromLocalStorage } from './js/utils.js';
import { createListElement } from './js/markupRenders.js';
import { formEl, taskListEl } from './js/refs.js';
import { TODO_LIST_NAME } from './js/consts.js';
import renderListFromLocalStorage from './js/renderListFromLocalStorage.js';
import './js/deleteTaskInLocalStorage.js';

renderListFromLocalStorage();

function writeTaskInLocalStorage(taskText) {
  const todoList = getFromLocalStorage(TODO_LIST_NAME) || [];

  todoList.push({
    id: nanoid(),
    value: taskText
  });

  writeInLocalStorage(TODO_LIST_NAME, todoList);
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value.trim();

  if(!taskName) return;

  writeTaskInLocalStorage(taskName);
  taskListEl.insertAdjacentHTML('beforeend', createListElement(taskName));

  formEl.reset();
});