const form = document.querySelector('.form');
const container = document.querySelector('.container');

let cards_info = [];

const render = ({ name, last_name, rate, days }) => {
    const card = document.createElement('div');
const nameElem = document.createElement('p');
const salaryElem = document.createElement('p');

nameElem.innerText = `Name: ${name} ${last_name}`;

salaryElem.innerText = `Salary: ${rate * days}`;

card.classList.add('card');

card.append(nameElem, salaryElem);
container.append(card);

}

form.addEventListener('submit', (event) => {
event.preventDefault();

const{ name, last_name, rate, days } = event.target;

cards_info.push({
    name:name.value,
    last_name:last_name.value,
    rate:rate.value,
    days:days.value

})

name.value = '';
last_name.value = '';
rate.value = '';
days.value = '';

render(cards_info[cards_info.length - 1]);

})




// const workers_form = document.querySelector('.workers_form');
// const container = document.querySelector('.container');

// let all_workers = [];

// const render = (array) => {
//   container.innerText = '';
//   const cards = array.map(({ firstname, lastname, rate, days }) => {
//     const cardElem = document.createElement('div');
//     const nameElem = document.createElement('p');
//     const salaryElem = document.createElement('p');

//     nameElem.innerText = `Name: ${firstname} ${lastname}`;
//     salaryElem.innerText = `Salary: ${rate * days}`;
  
//     cardElem.append(nameElem, salaryElem);
//     return cardElem
//   })
//   container.append(...cards);
// }

// workers_form.addEventListener('submit', event => {
//   event.preventDefault();
//   const { firstname, lastname, rate, days } = event.target;

//   all_workers.push({
//     firstname: firstname.value,
//     lastname: lastname.value,
//     rate: rate.value,
//     days: days.value
//   });

//   firstname.value = '';
//   lastname.value = '';
//   rate.value = '';
//   days.value = '';

//   render(all_workers);
// })