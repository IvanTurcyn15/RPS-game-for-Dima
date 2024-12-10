const footerModal = document.querySelector('.footer-modal');
const backdrop = document.querySelector(".backdrop");
const btnFooterModalOpen = document.querySelector(".subscription-button");
const btnFooterModalClose = document.querySelector(".footer-modal-close-btn");

function openFooterModal(e) {
    e.preventDefault();
    footerModal.style.display = "block";
    backdrop.style.display = "block";
    
    setTimeout(() => {
        footerModal.style.opacity = "1";
        backdrop.style.opacity = "1";
    }, 200); 
}

function closeFooterModal() {
    footerModal.style.opacity = "0";
    backdrop.style.opacity = "0";

    setTimeout(() => {
        footerModal.style.display = "none";
        backdrop.style.display = "none";
    }, 400);
}

function onCloseBackdropClick(e) {
    if (e.currentTarget === e.target) {
        closeFooterModal();
    }
}

function onCloseEscapeClick(e) {
    if (e.key === "Escape") {
        closeFooterModal();
    }
}

btnFooterModalOpen.addEventListener("click", openFooterModal);
btnFooterModalClose.addEventListener("click", closeFooterModal);
backdrop.addEventListener("click", onCloseBackdropClick);
document.addEventListener("keydown", onCloseEscapeClick);
