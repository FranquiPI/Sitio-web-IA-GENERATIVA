document.addEventListener("DOMContentLoaded", () => {
    const abrirMenu = document.getElementById('open-menu');
    const cerrarMenu = document.getElementById('close-menu');
    const nav = document.getElementById('nav');

    abrirMenu.addEventListener('click', () => {
        nav.classList.add('active');
    });

    cerrarMenu.addEventListener('click', () => {
        nav.classList.remove('active');
    });


    //cierra el menú al hacer clic en cualquier enlace del menú
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', ()=>{
            nav.classList.remove('active');
        });
    });
})