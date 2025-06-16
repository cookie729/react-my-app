// import './styles.css';

const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'list-row';
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = todo;

  const completeBtn = document.createElement('button');
  completeBtn.innerText = '完了';
  completeBtn.addEventListener('click', () => {
    const moveTarget = completeBtn.closest('li');
    completeBtn.nextElementSibling.remove();
    completeBtn.remove();
    const backBtn = document.createElement('button');
    backBtn.innerText = '戻す';

    backBtn.addEventListener('click', () => {
      const todoText = backBtn.previousElementSibling.innerText;
      createIncompleteTodo(todoText);

      backBtn.closest('li').remove();
    });

    moveTarget.firstElementChild.appendChild(backBtn);
    document.getElementById('complete-list').appendChild(moveTarget);
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '削除';
  deleteBtn.addEventListener('click', () => {
    const deleteTarget = deleteBtn.closest('li');
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);

  document.getElementById('incomplete-list').appendChild(li);
};

document.getElementById('add-button').addEventListener('click', onClickAdd);
