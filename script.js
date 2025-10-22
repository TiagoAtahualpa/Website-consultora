
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





//SWIPER

const clientsSwiper = new Swiper('.clients-swiper', {
    // 1. Configuração para carrossel de logos
    direction: 'horizontal', // Deve ser horizontal
    loop: true,             // Rolagem infinita
    grabCursor: true,     //mãozinha
    // 2. Quantidade de slides visíveis - CRUCIAL para mostrar 5 logos
    slidesPerView: 5, 
    spaceBetween: 30,       // Espaçamento entre as logos
    
    // 3. Autoplay para rolar automaticamente
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    // 4. Configuração de responsividade
    breakpoints: {
        768: { slidesPerView: 5 },
        480: { slidesPerView: 3 },
        0: { slidesPerView: 2 }
    },
  
});


// SWIPER PARA O HERO SECTION IMG-FUNDO ( INDEX (INICIO) )
const heroSwiper = new Swiper('.hero-bg-swiper', { 
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1, 
    effect: 'fade', // Efeito suave
    
    // 
    autoplay: {
        delay: 3000, //3 segundos
        disableOnInteraction: false,
    },
});



