document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('invitationCard');
    const doors = document.getElementById('gatefoldDoors');
    const wrapper = document.querySelector('.invitation-wrapper');

    // Overlay de aviso para girar
    const rotateOverlay = document.getElementById('rotateScreenOverlay');
    if (rotateOverlay) {
        const timer = setTimeout(() => rotateOverlay.classList.add('fade-out'), 3500);
        rotateOverlay.addEventListener('click', () => {
            clearTimeout(timer);
            rotateOverlay.classList.add('fade-out');
        });
        window.addEventListener('orientationchange', () => {
            clearTimeout(timer);
            rotateOverlay.classList.add('fade-out');
        });
    }

    // Apertura suave
    doors.addEventListener('click', () => card.classList.add('open'));

    // Modal información extra
    const openBtn = document.getElementById('openInfoBtn');
    const closeBtn = document.getElementById('closeInfoBtn');
    const overlay = document.getElementById('modalOverlay');

    if (openBtn) openBtn.addEventListener('click', () => overlay && overlay.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => overlay && overlay.classList.remove('active'));
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    }

    // Escalado exclusivo para ordenadores (sin distorsionar en móvil)
    function scaleDesktop() {
        if (!card || !wrapper) return;
        if (window.innerWidth > 768 && window.innerHeight > 550) {
            const scale = Math.min((window.innerWidth - 60) / 900, (window.innerHeight - 80) / 636, 1.25);
            card.style.transform = `scale(${scale})`;
            wrapper.style.width = `${900 * scale}px`;
            wrapper.style.height = `${636 * scale}px`;
        } else {
            card.style.transform = 'none';
            wrapper.style.width = '';
            wrapper.style.height = '';
        }
    }

    window.addEventListener('resize', scaleDesktop);
    scaleDesktop();
});
