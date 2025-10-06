window.addEventListener("load", () => {
    const toggleButton = document.querySelector('.theme-color');
    const body = document.body;
    const header = document.querySelector('header')
    const cardItem = document.querySelectorAll('.extensions-cards-item');
    const removeBtn = document.querySelectorAll('.remove');
    const cardItemTitle = document.querySelectorAll('.extensions-cards-item-text-title');
    const cardItemText = document.querySelectorAll('.extensions-cards-item-text-p');
    const navBtn = document.querySelectorAll('.nav-btn')
    const headerTitle = document.querySelector('.extensions-bar-title')
    const mainTitle = document.querySelector('.header-title')
    const themeBtn = document.querySelector('.theme-color')
    



    // Функция переключения темы
    function toggleTheme() {
        body.classList.toggle('light-theme');
        header.classList.toggle('light-theme');
        headerTitle.classList.toggle('light-theme')
        themeBtn.classList.toggle('light-theme')
        mainTitle.classList.toggle('light-theme')
        
        cardItem.forEach(item => {
            item.classList.toggle('light-theme')
        })
        cardItemTitle.forEach(item => {
            item.classList.toggle('light-theme')
        })
        cardItemText.forEach(item => {
            item.classList.toggle('light-theme')
        })
        removeBtn.forEach(item => {
            item.classList.toggle('light-theme')
        })
        navBtn.forEach(item => {
            item.classList.toggle('light-theme')
        })
    }

    // Обработчик события
    toggleButton.addEventListener('click', toggleTheme);

})

