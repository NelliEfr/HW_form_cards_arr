// Создайте форму сбора данных работников с четырьмя полями: Имя, Фамилия, ставка и количество дней. Поля ввода должны включать "текст-подсказку". 

// Зарплата = ставка * кол-во дней;

// Форма должна собирать полученные данные, добавлять их в пустой массив, а затем формировать карточки работников с полученной информацией из массива.

// После отправки необходимо очистить инпуты.



const form = document.querySelector('.form');
const container = document.querySelector('.container');

let workerInfo = [];

const render = () => {
    container.innerText = '';

    workerInfo.forEach(({firstname, lastname, rate, days}) => {

        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const salaryElem = document.createElement('p');
        
        nameElem.innerText = `Name: ${firstname} ${lastname}`;
        salaryElem.innerText = 'Salary: ' + rate * days;


        cardElem.classList.add('card');
        cardElem.append(nameElem, salaryElem);
        container.append(cardElem);

    })
}
        console.log(workerInfo)


form.addEventListener('submit', event => {
    event.preventDefault();

    const {firstname, lastname, rate, days} = event.target;

    workerInfo.push({
        firstname: firstname.value,
        lastname: lastname.value,
        rate: rate.value,
        days: days.value
    })

        firstname.value = '';
        lastname.value = '';
        rate.value = '';
        days.value = '';

        console.log(workerInfo);

        render();


}) 






























