document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('invitationCard');
    const doors = document.getElementById('gatefoldDoors');
    const wrapper = document.querySelector('.invitation-wrapper');

    // Apertura suave al tocar la portada
    doors.addEventListener('click', () => {
        card.classList.add('open');
    });

    // Escalado adaptativo perfecto
    function scaleInvitation() {
        if (!card || !wrapper) return;

        // Aprovecha el ancho completo del dispositivo
        const isMobile = window.innerWidth <= 768;
        const marginX = isMobile ? 8 : 40;
        const marginY = isMobile ? 20 : 40;

        const availableW = window.innerWidth - marginX;
        const availableH = window.innerHeight - marginY;

        const scaleX = availableW / 900;
        const scaleY = availableH / 636;
        
        const scale = Math.min(scaleX, scaleY, 1);

        card.style.transform = `scale(${scale})`;
        wrapper.style.width = `${900 * scale}px`;
        wrapper.style.height = `${636 * scale}px`;
    }

    window.addEventListener('resize', scaleInvitation);
    window.addEventListener('orientationchange', scaleInvitation);
    scaleInvitation();
});
