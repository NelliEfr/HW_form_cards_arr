// Создайте форму сбора данных работников с четырьмя полями: Имя, Фамилия, ставка и количество дней. Поля ввода должны включать "текст-подсказку".

// Зарплата = ставка * кол-во дней;

// Форма должна собирать полученные данные, добавлять их в пустой массив, а затем формировать карточки работников с полученной информацией из массива.

// После отправки необходимо очистить инпуты.

const workers_form = document.querySelector('.workers_form');
const container = document.querySelector('.container');

let all_workers = [];

const render = (array) => {
	container.innerText = '';
	const cards = array.map(({ firstname, lastname, rate, days }) => {
		const cardElem = document.createElement('div');
		const nameElem = document.createElement('p');
		const salaryElem = document.createElement('p');

		nameElem.innerText = `Name: ${firstname} ${lastname}`;
		salaryElem.innerText = `Salary: ${rate * days}`;

		cardElem.append(nameElem, salaryElem);
		return cardElem;
	});
	container.append(...cards);
};

workers_form.addEventListener('submit', (event) => {
	event.preventDefault();
	const { firstname, lastname, rate, days } = event.target;

	all_workers.push({
		firstname: firstname.value,
		lastname: lastname.value,
		rate: rate.value,
		days: days.value,
	});

	firstname.value = '';
	lastname.value = '';
	rate.value = '';
	days.value = '';

	render(all_workers);
});
