document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('invitationCard');
    const doors = document.getElementById('gatefoldDoors');
    const wrapper = document.querySelector('.invitation-wrapper');

    // ================= CONTROL DEL OVERLAY DE ROTACIÓN =================
    const rotateOverlay = document.getElementById('rotateScreenOverlay');

    if (rotateOverlay) {
        const timer = setTimeout(() => {
            rotateOverlay.classList.add('fade-out');
        }, 3500);

        rotateOverlay.addEventListener('click', () => {
            clearTimeout(timer);
            rotateOverlay.classList.add('fade-out');
        });

        window.addEventListener('orientationchange', () => {
            clearTimeout(timer);
            rotateOverlay.classList.add('fade-out');
        });
    }

    // ================= APERTURA DE LA TARJETA =================
    doors.addEventListener('click', () => {
        card.classList.add('open');
    });

    // ================= MODAL INFORMACIÓN EXTRA =================
    const openBtn = document.getElementById('openInfoBtn');
    const closeBtn = document.getElementById('closeInfoBtn');
    const overlay = document.getElementById('modalOverlay');

    function openModal() {
        if (overlay) overlay.classList.add('active');
    }

    function closeModal() {
        if (overlay) overlay.classList.remove('active');
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ================= ESCALADO MAXIMIZADO PARA PC Y MÓVIL =================
    function scaleInvitation() {
        if (!card || !wrapper) return;

        const w = window.innerWidth;
        const h = window.innerHeight;
        const isLandscapeMobile = h < 550 && w > h;
        const isPortraitMobile = w <= 768 && h >= w;

        let marginX, marginY, maxScale;

        if (isLandscapeMobile) {
            // Móvil en horizontal: márgenes mínimos para apurar toda la pantalla
            marginX = 16;
            marginY = 42; 
            maxScale = 1.0; 
        } else if (isPortraitMobile) {
            // Móvil en vertical
            marginX = 8;
            marginY = 70;
            maxScale = 1.0;
        } else {
            // Ordenador / Portátil: se permite crecer hasta 1.35x para llenar la pantalla
            marginX = 40;
            marginY = 70;
            maxScale = 1.35;
        }

        const availableW = w - marginX;
        const availableH = h - marginY;

        const scaleX = availableW / 900;
        const scaleY = availableH / 636;
        
        // Toma la escala máxima posible sin recortar ningún borde
        const scale = Math.min(scaleX, scaleY, maxScale);

        card.style.transform = `scale(${scale})`;
        wrapper.style.width = `${900 * scale}px`;
        wrapper.style.height = `${636 * scale}px`;
    }

    window.addEventListener('resize', scaleInvitation);
    window.addEventListener('orientationchange', scaleInvitation);
    scaleInvitation();
});
