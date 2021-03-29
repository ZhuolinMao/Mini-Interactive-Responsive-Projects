const panels = document.querySelectorAll(".panel");

panels.forEach(p => {
    p.addEventListener('click', () => {
        removeActiveClass();
        p.classList.add('active');
    })
})

function removeActiveClass() {
    panels.forEach(p => {
        p.classList.remove('active');
    })
}