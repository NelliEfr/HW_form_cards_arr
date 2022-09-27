const workers_form = document.querySelector('.workers_form');
const card_container = document.querySelector('.card_container');
let card_info = [];

workers_form.addEventListener('submit', event => {
    card_container.innerText = '';
    event.preventDefault();

    const {firstname, lastname, rate, days} = event.target;

    card_info.push({
        firstname: firstname.value,
        lastname: lastname.value,
        rate: rate.value,
        days: days.value
    });

    firstname.value = '';
    lastname.value = '';
    rate.value = '';
    days.value = '';

    render();
});

const render = () => {
    card_info.forEach(({firstname, lastname, rate, days}) => {

        const card = document.createElement('div');
        const name_elem = document.createElement('p');
        const salary_elem = document.createElement('p');
        

        name_elem.innerText = `Name: ${firstname} ${lastname}`;
        salary_elem.innerText =`Salary: ${rate * days}`


        card.classList.add('card');

        card.append(name_elem, salary_elem);
        card_container.append(card);
    }); 
    
};