function addItem() {
    let input = document.getElementById('newText');
    let ul = document.getElementById('items');
    let listItem = document.createElement('li');

    if (input.value !== '') {
        listItem.textContent = input.value;
        ul.appendChild(listItem);

        input.value = '';
    }

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '[Delete]';
    deleteButton.style.color = 'red';
    deleteButton.style.backgroundColor = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.outline = 'none';
    deleteButton.style.fontWeight = '900';
    deleteButton.style.cursor = 'pointer';

    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        ul.removeChild(listItem);
    })
}