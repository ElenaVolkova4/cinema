const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
// event.target.classList.toggle('active');

// event.target - элемент, куда кликнули

if (!event.target.classList.contains('booked')) { //не занято ли это место (!)
  // console.log("это место не занято")
  event.target.classList.toggle('active');
  let totalSeats = schemeSvg.querySelectorAll('.active').length; //сколько элементов выбрано (с классом active)

  totalPrice = totalSeats * cost;
  totalPriceTag.textContent = totalPrice;
}


})