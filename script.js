window.addEventListener("load", () => {
    const toggleButton = document.querySelector('.theme-color');
    const body = document.body;
    const cardItem = document.querySelectorAll('.extensions-cards-item');
    // const cardItemTex = document.querySelector('.extensions-cards-item-text')
    const removeBtn = document.querySelector('.remove');
    const cartItemTitle = document.querySelector('.extensions-cards-item-text-title');
    const cardItemText = document.querySelector('.extensions-cards-item-text-p');



    // Функция переключения темы
    function toggleTheme() {
        body.classList.toggle('light-theme');
        cardItem.classList.toggle('light-theme');
        // cardItemTex.classList.toggle('light-theme');
        removeBtn.classList.toggle('light-theme');
        cartItemTitle.classList.toggle('light-theme');
        cardItemText.classList.toggle('light-theme');



    }

    // Обработчик события
    toggleButton.addEventListener('click', toggleTheme);

})

