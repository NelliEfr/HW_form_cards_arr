const form = document.querySelector('.form');
const container = document.querySelector('.container');
let cards_info = [];

const render = ({ name, last_name, rate, days }) => {
    const card = document.createElement('div');
const nameElem = document.createElement('p');
const lastNameElem = document.createElement('p');
const salaryElem = document.createElement('p');

nameElem.innerText = `Name: ${name}`;
lastNameElem.innerText = `Last name: ${last_name}`;
salaryElem.innerText = `Salary: ${rate * days}`;

card.classList.add('card');

card.append(nameElem, lastNameElem, salaryElem);
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