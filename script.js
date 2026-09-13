const WHATSAPP_NUMBER = "5583999999999"; 

const bookingForm = document.getElementById("quick-booking-form");
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    const message = `Olá! Gostaria de verificar a disponibilidade de reserva:%0A- Check-in: ${checkin}%0A- Check-out: ${checkout}%0A- Hóspedes: ${guests}`;
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${message}`, "_blank");
});

const roomButtons = document.querySelectorAll(".btn-select-room");
roomButtons.forEach(button => {
    button.addEventListener("click", function() {
        const roomName = this.getAttribute("data-room");
        const message = `Olá! Tenho interesse em reservar a seguinte acomodação:%0A- Quarto: ${roomName}`;
        window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${message}`, "_blank");
    });
});
