import { getFromLocalStorage } from './utils.js';
import { taskListEl } from './refs.js';
import { createListElement } from './markupRenders.js';
import { TODO_LIST_NAME } from './consts.js';

export default function renderListFromLocalStorage() {
  const todoList = getFromLocalStorage(TODO_LIST_NAME) || [];

  if (!todoList) {
    return;
  }

  taskListEl.innerHTML = todoList.reduce((string, element) => {
    string += createListElement(element.value, element.id);
    return string;
  }, '');
}