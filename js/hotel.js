document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/hotel-data.json")
    .then((response) => response.json())
    .then((data) => {
      let hotelData = data.hotels;
      const hotelList = document.getElementById("our-hotel");

      if (!hotelList) {
        return;
      }

      function displayHotel() {
        hotelData.forEach((hotel) => {
          const li = document.createElement("li");
          li.classList.add("hotel-item");

          li.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img">
            <div class="hotel-wrapper">
                <h3 class="hotel-item-title">${hotel.name}</h3>
                <p>${hotel.price}</p>
                <address class="hotel-address">
                  <svg width="24" height="24">
                    <use href="./img/icon-defs.svg#icon-location2"></use>
                  </svg>
                  ${hotel.address}
                </address>
                <a
                href="./contacts-page.html"
                class="hotel-link"
                target="_blank"
                rel="noreferrer noopener"
                >Ver detalles
                <svg width="24" height="24">
                    <use href="./img/icon-defs.svg#icon-arrow-right"></use>
                  </svg>
                </a>
              </div>
              
          `;
          hotelList.appendChild(li);
        });
      }

      displayHotel();
    })
    .catch((error) => console.error("Помилка при завантаженні JSON:", error));
});
