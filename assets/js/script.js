// MENU MOBILE 

// Seleciona o menu mobile e a lista de navegação
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = navList.querySelectorAll('li a'); // Seleciona todos os links

// Função para verificar se a tela é pequena
function isMobile() {
    return window.innerWidth <= 992;
}

// Alterna a visibilidade da navegação
function toggleNav() {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');

    if (navList.classList.contains('active')) {
        navList.style.visibility = 'visible';
        navList.style.opacity = '1';
        const links = navList.querySelectorAll('li');
        links.forEach((link, index) => {
            link.style.opacity = '1';
            link.style.transitionDelay = `${index * 0.1}s`;
        });
    } else {
        const links = navList.querySelectorAll('li');
        links.forEach((link) => {
            link.style.opacity = '0';
            link.style.transitionDelay = '0s';
        });
        setTimeout(() => {
            navList.style.opacity = '0';
            navList.style.visibility = 'hidden';
        }, 500);
    }
}

// Evento de clique no menu mobile
mobileMenu.addEventListener('click', () => {
    if (isMobile()) toggleNav();
});

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMobile()) toggleNav();
    });
});

// Ajusta a visibilidade do menu em redimensionamento
window.addEventListener('resize', () => {
    if (!isMobile()) {
        // Garante que o menu de navegação fique visível no desktop
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
        navList.style.visibility = 'visible';
        navList.style.opacity = '1';
    } else {
        // Configurações para modo mobile (se necessário)
        navList.style.visibility = 'hidden';
        navList.style.opacity = '0';
    }
});

// Define o estado inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (isMobile()) {
        navList.style.visibility = 'hidden';
        navList.style.opacity = '0';
    }
});

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMobile()) { // Verifica se a tela é pequena
            mobileMenu.classList.remove('active'); // Remove a classe 'active' do menu
            navList.classList.remove('active'); // Remove a classe 'active' da lista

            const links = navList.querySelectorAll('li');
            links.forEach(link => {
                link.style.opacity = '0'; // Esconde os links
            });
            // Aguarda um tempo antes de esconder a lista
            setTimeout(() => {
                navList.style.visibility = 'hidden'; // Torna invisível
            }, 225); // Tempo para combinar com a animação
        }
    });
});

// Adiciona um evento de redimensionamento da janela para ajustar o menu
window.addEventListener('resize', () => {
    if (!isMobile()) {
        // Se a tela for maior que 992px, certifique-se de que o menu esteja visível
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
        navList.style.visibility = 'visible'; // Garante que o menu de navegação padrão esteja visível
    }
});





// SEÇÃO EXPERIÊNCIA

document.addEventListener('DOMContentLoaded', function () {
    showContent('livraria'); // Mostra a primeira experiência ao carregar a página
});

function showContent(id) {
    // Esconder todas as experiências
    const experiences = document.querySelectorAll('.text-experience');
    experiences.forEach(exp => {
        exp.style.display = 'none';  // Esconde cada div de experiência
    });

    // Mostrar a experiência correspondente ao item clicado
    const selectedExperience = document.getElementById(id);
    selectedExperience.style.display = 'block';  // Exibe a div correspondente

    // Adicionar classe 'active' ao item clicado e remover dos outros
    const companies = document.querySelectorAll('.company');
    companies.forEach(company => {
        company.classList.remove('active');  // Remove a classe 'active' de todos
    });

    // Adiciona a classe 'active' ao item selecionado
    const selectedCompany = Array.from(companies).find(company => company.onclick.toString().includes(id));
    if (selectedCompany) {
        selectedCompany.classList.add('active'); // Adiciona a classe 'active' ao item correspondente
    }
}





//SEÇÃO CONEHCIMENTOS

const articles = document.querySelectorAll('#skills-cards article');
const description = document.querySelector('.changeDescription');

// Define o texto padrão como o do primeiro card (HTML, por exemplo)
window.addEventListener('DOMContentLoaded', () => {
    const firstArticle = articles[0]; // O primeiro card
    const firstText = firstArticle.getAttribute('data-description');
    description.textContent = firstText; // Exibe a descrição do primeiro card por padrão
});

articles.forEach(article => {
    article.addEventListener('mouseover', () => {
        const text = article.getAttribute('data-description');
        setTimeout(() => {
            description.textContent = text;
        }, 400); // Delay de 0.4 segundos (400ms)
    });

    article.addEventListener('mouseleave', () => {
        // Quando o mouse sai, o texto permanece o mesmo, ou você pode redefinir
        description.textContent = description.textContent;
    });
});





//SEÇÃO CERTIFICADOS

document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('#services article');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close")[0];

    articles.forEach(article => {
        article.addEventListener('click', function () {
            const img = this.querySelector('img');
            modal.style.display = "block"; // Exibe o modal
            modalImg.src = img.src; // Define a fonte da imagem no modal
            captionText.innerHTML = this.querySelector('h3').innerHTML; // Define o título como legenda

            // Adiciona a classe 'show' para ativar a transição
            setTimeout(() => {
                modal.classList.add('show');
            }, 10); // Um pequeno delay para garantir que o display esteja aplicado antes da transição
        });
    });

    closeModal.onclick = function () {
        modal.classList.remove('show'); // Remove a classe 'show' ao clicar no "x"
        setTimeout(() => {
            modal.style.display = "none"; // Oculta o modal após a transição
        }, 400); // Aguarda a duração da transição antes de ocultar
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.classList.remove('show'); // Remove a classe 'show' ao clicar fora do modal
            setTimeout(() => {
                modal.style.display = "none"; // Oculta o modal após a transição
            }, 400); // Aguarda a duração da transição antes de ocultar
        }
    }
});





//SEÇÂO PROJETOS
//caso necessário poderá adiconar aqui o js da seção





// SEÇÃO P-TECHS
document.addEventListener("DOMContentLoaded", function () {
    const techItems = document.querySelectorAll(".tech-item");

    techItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Previne qualquer comportamento padrão do link

            // Fecha todos os itens atualmente abertos, exceto o clicado
            techItems.forEach(i => {
                if (i !== item) {
                    const detail = i.querySelector(".tech-detail");
                    if (detail) {
                        detail.classList.remove("active");
                        detail.style.maxHeight = null; // Reseta a altura máxima
                    }
                }
            });

            // Alterna a exibição do item clicado
            const detail = item.querySelector(".tech-detail");
            if (detail) {
                const isActive = detail.classList.contains("active");
                detail.classList.toggle("active", !isActive);
                item.classList.toggle("expanded", !isActive);

                // Define a altura máxima para o efeito de transição
                if (!isActive) {
                    detail.style.maxHeight = detail.scrollHeight + "px"; // Aumenta a altura para o tamanho do conteúdo
                } else {
                    detail.style.maxHeight = null; // Reseta a altura
                }
            }
        });
    });
});