const containerEl = document.querySelector('.cards-container');
const formEl = document.querySelector('.form');

let cards_arr = [];

render = ({ firstname, lastname, rate, days }) => {
    const firstNameEl = document.createElement('p');
    const lastNameEl = document.createElement('p');
    const salaryEl = document.createElement('p');
    const card = document.createElement('div');

    firstNameEl.innerText = `First name: ${firstname}`;
    lastNameEl.innerText = `Last name: ${lastname}`;
    salaryEl.innerText = `Salary: ${rate * days}`;

    card.append(firstNameEl, lastNameEl, salaryEl);
    card.classList.add('card');
    containerEl.append(card);
}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const {firstname, lastname, rate, days} = event.target;

    cards_arr.push({
        firstname: firstname.value,
        lastname: lastname.value,
        rate: rate.value,
        days: days.value
    });
    render(cards_arr[cards_arr.length - 1]);
    firstname.value = '';
    lastname.value = '';
    rate.value = '';
    days.value = '';
})