const form = document.querySelector(".form");
const container = document.querySelector(".container");
let cards_info = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { firstname, lastname, email, image, progress, rate, days } =
    event.target;

  cards_info.push({
    name: `${firstname.value} ${lastname.value}`,
    salary: rate.value * days.value,
    email: email.value,
    image: image.value,
    progress: progress.value,
  });

  render();
  // render2(cards_info[cards_info.length - 1]);

  firstname.value = "";
  lastname.value = "";
  email.value = "";
  image.value = "";
  progress.value = "";
});

const render = () => {
  container.innerText = "";
  cards_info.forEach(({ name, email, image, progress, salary }, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const nameElem = document.createElement("p");
    const salaryElem = document.createElement("p");
    const emailElem = document.createElement("a");
    emailElem.classList.add("email");
    const emailSpan = document.createElement("span");
    const imgElem = document.createElement("img");
    imgElem.src = image;
    const progressContaier = document.createElement("div");
    progressContaier.classList.add("progress");
    const progressStatus = document.createElement("div");
    const progressValue = document.createElement("p");

    let color = "lightskyblue";
    if (progress <= 20) color = "red";
    else if (progress >= 75) color = "green";
    progressStatus.style.background = color;
    progressStatus.style.width = progress + "%";
    progressValue.innerText = progress + "%";

    progressContaier.append(progressStatus, progressValue);

    nameElem.innerText = `Name: ${name}`;
    salaryElem.innerText = `Salary: ${salary}`;
    emailSpan.innerText = "Email: ";
    emailElem.href = `mailto:${email}`;
    emailElem.innerText = `${email}`;
    card.append(
      nameElem,
      salaryElem,
      emailSpan,
      emailElem,
      imgElem,
      progressContaier
    );
    // if (i == cards_info.length - 1)
    container.append(card);
  });
};

// const render2 = ({ firstname, lastname, email, image, progress }) => {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   const fistnameElem = document.createElement("p");
//   const lastnameElem = document.createElement("p");
//   const emailElem = document.createElement("a");
//   emailElem.classList.add("email");
//   const emailSpan = document.createElement("span");
//   const imgElem = document.createElement("img");
//   imgElem.src = image;
//   const progressContaier = document.createElement("div");
//   progressContaier.classList.add("progress");
//   const progressStatus = document.createElement("div");
//   const progressValue = document.createElement("p");

//   let color = "lightskyblue";
//   if (progress <= 20) color = "red";
//   else if (progress >= 75) color = "green";
//   progressStatus.style.background = color;
//   progressStatus.style.width = progress + "%";
//   progressValue.innerText = progress + "%";

//   progressContaier.append(progressStatus, progressValue);

//   fistnameElem.innerText = `First Name: ${firstname}`;
//   lastnameElem.innerText = `Last Name: ${lastname}`;
//   emailSpan.innerText = "Email: ";
//   emailElem.href = `mailto:${email}`;
//   emailElem.innerText = `${email}`;
//   card.append(
//     fistnameElem,
//     lastnameElem,
//     emailSpan,
//     emailElem,
//     imgElem,
//     progressContaier
//   );
//   container.append(card);
// };
