
const hamburgerButton = document.getElementById('hamburger');
const closeMenuButton = document.getElementById('close-menu');
const navMenu = document.getElementById('main-nav');
const submenuToggle = document.querySelector('.submenu-toggle');
const submenuContainer = document.querySelector('.has-submenu');


// Função para FECHAR o menu principal e RESETAR o submenu
function closeMainMenu() {
    navMenu.classList.remove('is-active');
    // Garante que o submenu volte a fechar ao fechar o menu principal
    submenuContainer.classList.remove('submenu-active'); 
}


// Abrir o menu com o hambúrguer
hamburgerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    navMenu.classList.add('is-active');
});

// Fechar com o botão 'X'
closeMenuButton.addEventListener('click', () => {
    closeMainMenu();
});

// Abrir/fechar o submenu de SERVICIOS ao clicar na SETA
submenuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    submenuContainer.classList.toggle('submenu-active');
});

// Fechar o menu principal ao clicar FORA dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburgerButton.contains(event.target);

    // Se o menu estiver aberto E o clique não foi dentro do menu E não foi no hambúrguer
    if (navMenu.classList.contains('is-active') && !isClickInsideMenu && !isClickOnHamburger) {
        closeMainMenu();
    }
});