document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.header ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href'); // Obtém o ID do alvo
            const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

            if (targetElement) {
                // Adiciona um delay de 200ms (0.2 segundos)
                setTimeout(function() {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Rolagem suave
                    });
                }, 200); // Tempo em milissegundos
            }
        });
    });
});

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));
