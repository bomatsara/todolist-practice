export function writeInLocalStorage(item, value) {
  localStorage.setItem(item, JSON.stringify(value));
}

export function getFromLocalStorage(item) {
  return JSON.parse(localStorage.getItem(item));
}