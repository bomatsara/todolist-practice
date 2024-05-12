export function createListElement(taskText, id) {
  return `<li>${taskText} <button data-delete="${id}">X</button></li>`
}