window.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const thankYouModal = document.getElementById("thankYouModal");
    const closeModalButton = document.getElementById("closeModal");

    if (contactForm && thankYouModal && closeModalButton) {

        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            thankYouModal.classList.add("active"); 
            contactForm.reset(); 
        });

        closeModalButton.addEventListener("click", () => {
            thankYouModal.classList.remove("active"); 
        });

        window.addEventListener("click", (e) => {
            if (e.target === thankYouModal) {
                thankYouModal.classList.remove("active"); 
            }
        });
    } else {
        console.error("Некоторые элементы формы или модального окна не найдены в DOM.");
    }
});
