const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const selectPlanButtons = document.querySelectorAll('.plan button');
const closeButton = document.querySelector('.modal__action--negative');

const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    this.hideModal();
});

if (selectPlanButtons.length > 0)
    addPlansEvents();

function addPlansEvents() {
    selectPlanButtons.forEach(btn => btn.addEventListener('click', showModal));
    closeButton.addEventListener('click', hideModal);
}

function showModal() {
    modal.classList.add('open');
    backdrop.classList.add('open');
}

function hideModal() {
    if (modal)
        modal.classList.remove('open');

    backdrop.classList.remove('open');
}