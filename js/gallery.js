document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/gallery-data.json")
    .then((response) => response.json())
    .then((data) => {
      let galleryData = data.gallery;
      const galleryList = document.getElementById("gallery-list");

      if (!galleryList) {
        return;
      }

      function displayGallery() {
        galleryData.forEach((image) => {
          const li = document.createElement("li");

          li.innerHTML = `
              <img src="${image.src}" alt="${image.alt}">
            `;
          galleryList.appendChild(li);
        });
      }

      displayGallery();
    })
    .catch((error) => console.error("Помилка при завантаженні JSON:", error));
});
