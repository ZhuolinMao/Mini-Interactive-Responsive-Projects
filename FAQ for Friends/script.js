const expands = document.querySelectorAll('.faq');
expands.forEach(expand => {
    expand.addEventListener('click', () => {
        expand.classList.toggle('active');
    });
});

const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle => {
    if (toggle.parentNode.classList.contains('active')) {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.remove('active');
        });
    }
});

expands[0].classList.add('active');