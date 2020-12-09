const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')

const movieSelect = document.getElementById("movie")

// The + in the front converts t he value into an interger. Other options include parseInt() or Math.floor
let ticketPrice = +movieSelect.value




function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;
    total.innerText = selectedSeatsCount * ticketPrice
    count.innerText = selectedSeatsCount
}



// Puts an event listener on the whole container, and through that, it checks if a seat has been clicked and if so, toggles it
container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();

    }
})

movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value
    updateSelectedCount()
})