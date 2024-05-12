const formEl = document.querySelector('#task-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value.trim();

  if(!taskName) return;

  formEl.reset();
});