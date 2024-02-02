(() => {
    window.onload = () => {
        let header_burger = document.querySelector('.header__burger');
        let header_menu = document.querySelector('.header__nav');
        let body = document.querySelector('body');
        header_burger.addEventListener('click', (e) => {
            header_burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            body.classList.toggle('lock');
            console.log("start");
        })
        let menu_list = document.querySelector('.header__list');
        menu_list.addEventListener('click', (e) => {
            header_burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            body.classList.toggle('lock');
        })
    }
})();
