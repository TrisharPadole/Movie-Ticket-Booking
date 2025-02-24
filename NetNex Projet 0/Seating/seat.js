let seats = document.querySelector(".all-seats");
for (let i = 0; i < 59; i++) {
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "booked" : "";

    seats.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="tickets" id="s${i + 2}"/>
        <label for="s${i + 2}" class="seat ${booked}"></label>`
    )
}

let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
    ticket.addEventListener("change", updateTotal);
});

document.querySelectorAll('input[name="food"]').forEach(foodItem => {
    foodItem.addEventListener('change', updateTotal);
});

function updateTotal() {
    let amount = 0;
    let count = 0;

    tickets.forEach((ticket) => {
        if (ticket.checked) {
            count += 1;
            amount += 200; // Assuming each ticket costs ₹200
        }
    });

    const selectedFood = document.querySelector('input[name="food"]:checked');
    const foodPrice = selectedFood ? parseInt(selectedFood.value) : 0;
    amount += foodPrice;

    document.querySelector(".amount").innerHTML = amount;
    document.querySelector(".count").innerHTML = count;
}

document.querySelector("button[type='button']").addEventListener("click", () => {
    const ticketCount = document.querySelector(".count").textContent;
    alert(`Your ${ticketCount} Movie Tickets have been CONFIRMED.`);
});