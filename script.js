document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('invitationCard');
    const doors = document.getElementById('gatefoldDoors');
    const wrapper = document.querySelector('.invitation-wrapper');

    // Apertura al pulsar las puertas
    doors.addEventListener('click', () => {
        card.classList.add('open');
    });

    // Escala la tarjeta completa para que encaje al 100% en cualquier pantalla
    function scaleInvitation() {
        if (!card || !wrapper) return;

        const screenW = window.innerWidth - 30; // Margen de seguridad lateral
        const screenH = window.innerHeight - 30; // Margen de seguridad vertical

        const scaleX = screenW / 900;
        const scaleY = screenH / 636;
        
        // Toma la escala necesaria para que quepa completa sin salirse
        const scale = Math.min(scaleX, scaleY, 1);

        card.style.transform = `scale(${scale})`;
        wrapper.style.width = `${900 * scale}px`;
        wrapper.style.height = `${636 * scale}px`;
    }

    window.addEventListener('resize', scaleInvitation);
    window.addEventListener('orientationchange', scaleInvitation);
    scaleInvitation();
});
