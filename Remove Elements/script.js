window.addEventListener('load', function () {
    let input = document.querySelector('input');
    let button = document.querySelector('.btn');
    let ul = document.querySelector('ul');


    button.addEventListener('click', () => {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        let article = document.createElement('article');

        li.textContent = input.value;

        btn.innerHTML = 'X';

        article.appendChild(li);
        article.appendChild(btn);

        ul.appendChild(article);

        document.querySelectorAll('ul button').forEach(item => {
            item.addEventListener('click', () => {
                ul.removeChild(article);
            })
        });
        input.value = '';
    })
})