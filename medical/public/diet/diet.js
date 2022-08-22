const form = document.getElementById('addForm');
const itemsList = document.getElementById('items');
const filter = document.getElementById('filter');


// прослушка добавления новой задачи
form.addEventListener('submit', addItem);
// клик по кнопке Удалить
itemsList.addEventListener('click', removeItem);
itemsList.addEventListener('click', editItem);
// прослушка ввода данных с клавиатуры
filter.addEventListener('keyup', filterItems);

// СОЗДАНИЕ НОВОГО ЭЛЕМЕНТА СПИСКА ДЕЛ
function addItem(e) {
  e.preventDefault();

  // получаем input
  const newItemInput = document.getElementById('newItemText');
  // получаем текст из input
  const newItemText = newItemInput.value;

  if (newItemText.trim().length == 0) {
    newItemInput.placeholder = 'Неа! )) Поле не должно быть пустым!';
    newItemInput.value = '';
  } else {
    // создаём новый элемент
    const newElement = document.createElement('li');
    newElement.className = 'list-group-item';

    // добавляем текст в новый элемент
    const newTextNode = document.createTextNode(newItemText);
    newElement.appendChild(newTextNode);

    // создаем кнопку
    const deleteBtn = document.createElement('button');
    deleteBtn.dataset.action = 'delete';
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn btn-light btn-sm float-right';
    deleteBtn.appendChild(document.createTextNode('Удалить'));

    newElement.appendChild(deleteBtn);

    // создаем кнопку редактировать
    const editBtn = document.createElement('button');
    editBtn.dataset.action = 'edit';
    editBtn.type = 'button';
    editBtn.className = 'btn btn-light btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Редактировать'));

    newElement.appendChild(editBtn);

    // добавляем новую задачу в список с задачами
    itemsList.prepend(newElement);

    // очищаем поле ввода
    newItemInput.value = '';
    newItemInput.placeholder = 'Добавить задачу'
  }
}

// РЕДАКТИРОВАТЬ
function editItem(e) {
  const editText = e.target.parentNode.firstChild.textContent.trim();

  if (e.target.hasAttribute('data-action') &&
    e.target.getAttribute('data-action') == 'edit') {
    let newText = prompt('Редактировать задачу:', editText);
    // это проверка на случай если юзер попытается добавить пустую строку
    while (newText != null && newText.trim().length == 0) {
      newText = prompt('Редактировать задачу \n(поле не должно быть пустым):', editText);
    }
    if (newText != null && newText.trim().length != 0) {
      e.target.parentNode.firstChild.textContent = newText;
    }
  }
}

// УДАЛЕНИЕ
function removeItem(e) {
  if (e.target.hasAttribute('data-action') &&
    e.target.getAttribute('data-action') == 'delete') {
    if (confirm('Удалить задачу?')) {
      e.target.parentNode.remove();
    }
  }
}

// ПОИСК 
function filterItems(e) {
  const searchText = e.target.value.toLowerCase();
  const items = itemsList.querySelectorAll('li');

  items.forEach(item => {
    const itemText = item.firstChild.textContent.toLowerCase();
    if (itemText.indexOf(searchText) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}