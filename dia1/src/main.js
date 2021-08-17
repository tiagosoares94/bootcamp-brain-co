import './style.css'

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const link = document.querySelector('[data-js="link"]');
const app = document.querySelector('[data-js="app"]');

link.addEventListener('click', (e) => {
  e.preventDefault();
  app.hidden = !app.hidden;
});
