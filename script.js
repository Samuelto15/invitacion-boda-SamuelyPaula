document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('invitationCard');
    const doors = document.getElementById('gatefoldDoors');
    const insideContent = document.querySelector('.inside-content');
    const dots = document.querySelectorAll('.dot');

    // Apertura al pulsar la portada
    doors.addEventListener('click', () => {
        card.classList.add('open');
    });

    // Actualización de los puntitos al deslizar con el dedo en móvil
    if (insideContent && dots.length > 0) {
        insideContent.addEventListener('scroll', () => {
            const scrollLeft = insideContent.scrollLeft;
            const pageWidth = insideContent.clientWidth;
            const activeIndex = Math.round(scrollLeft / pageWidth);

            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
    }
});
