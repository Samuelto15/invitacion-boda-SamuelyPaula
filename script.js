document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('invitationCard');
    const doors = document.getElementById('gatefoldDoors');

    doors.addEventListener('click', () => {
        card.classList.add('open');
    });
});