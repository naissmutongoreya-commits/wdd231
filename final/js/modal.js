
export function openModal(content) {
    const dialog = document.querySelector("#careerModal");
    const modalContent = document.querySelector(".modal-content");

    modalContent.innerHTML = content;
    dialog.showModal();
    dialog.focus();
}
