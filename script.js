
const hamburgerButton = document.getElementById('hamburger');
const closeMenuButton = document.getElementById('close-menu');
const navMenu = document.getElementById('main-nav');
const submenuToggles = document.querySelectorAll('.submenu-toggle');


// Função para FECHAR o menu principal e RESETAR todos os submenus
function closeMainMenu() {
    navMenu.classList.remove('is-active');
    
    // Itera sobre todos os itens de menu que podem ter submenu e remove a classe ativa
    const allSubmenuContainers = document.querySelectorAll('.nav-item.has-submenu');
    allSubmenuContainers.forEach(container => {
        container.classList.remove('submenu-active');
    });
}

// ----------------------------------------------------

// Abrir o menu com o hambúrguer
hamburgerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    navMenu.classList.add('is-active');
});

// Fechar com o botão 'X'
closeMenuButton.addEventListener('click', () => {
    closeMainMenu();
});

// ----------------------------------------------------
// ABRIR/FECHAR SUBMENU AO CLIQUE (para todos os submenus)
// ----------------------------------------------------
submenuToggles.forEach(toggle => {
    
    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        
        // 2. Encontra o <li> pai mais próximo, que é o container do submenu
        const parentNavItem = toggle.closest('.nav-item.has-submenu');

        const icon = toggle.querySelector('i');
        

        const allSubmenus = document.querySelectorAll('.nav-item.has-submenu');
        
        //Submenu abre e o outro fecha
        allSubmenus.forEach(item => {
            // Verifica se o item é DIFERENTE do que estamos clicando
            if (item !== parentNavItem) {
                // Se o outro item estiver aberto, feche-o e resete o ícone
                if (item.classList.contains('submenu-active')) {
                    item.classList.remove('submenu-active');
                    
                    // Reseta o ícone do submenu que foi FECHADO
                    const otherIcon = item.querySelector('.submenu-toggle i');
                    if (otherIcon) {
                        otherIcon.classList.remove('fa-chevron-up');
                        otherIcon.classList.add('fa-chevron-down');
                    }
                }
            }
        });
        // ----------------------------------------------------

        // 3. Alterna a classe 'submenu-active' no elemento pai para abrir/fechar
        parentNavItem.classList.toggle('submenu-active');

       icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});
// ----------------------------------------------------

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



