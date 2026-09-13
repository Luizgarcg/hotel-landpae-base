document.addEventListener("DOMContentLoaded", () => {
  const roomsGrid = document.querySelector(".rooms-grid");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  if (roomsGrid && arrowLeft && arrowRight) {
    const scrollAmount = 1;

    arrowLeft.addEventListener("click", () => {
      roomsGrid.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    arrowRight.addEventListener("click", () => {
      roomsGrid.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  }

  const quickBookingForm = document.getElementById("quick-booking-form");
  if (quickBookingForm) {
    quickBookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const checkin = document.getElementById("checkin").value;
      const checkout = document.getElementById("checkout").value;
      const guests = document.getElementById("guests").value;

      if (!checkin || !checkout) {
        alert("Por favor, preencha as datas de check-in e check-out.");
        return;
      }

      alert(
        `Buscando disponibilidade para ${guests} hóspede(s) de ${checkin} até ${checkout}.`,
      );
    });
  }

  const roomButtons = document.querySelectorAll(".btn-select-room");
  roomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const roomName = button.getAttribute("data-room");
      alert(
        `Acomodação selecionada: ${roomName}. Redirecionando para a reserva...`,
      );
    });
  });
});
