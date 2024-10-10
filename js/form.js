document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("hotel-form");
  const loadingMessage = document.getElementById("loading");
  const hotelSection = document.getElementById("hotel-section");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    loadingMessage.style.display = "block";
    setTimeout(() => {
      loadingMessage.style.display = "none"; 

      hotelSection.scrollIntoView({
        behavior: "smooth",
      });
    }, 2000);
  });
});
