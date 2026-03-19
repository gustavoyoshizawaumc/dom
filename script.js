const toggleButton = document.querySelector('#toggle-mode');
const body = document.body;
const nameForm = document.querySelector('#name-form');
const nameInput = document.querySelector('#name-input');
const messageDiv = document.querySelector('#message');
toggleButton.addEventListener('click', () => {
   body.classList.toggle('dark');
   toggleButton.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
});
nameForm.addEventListener('submit', (e) => {
   e.preventDefault();
   const name = nameInput.value.trim();
   if (name) {
       messageDiv.textContent = `Olá, ${name}!`;
       messageDiv.classList.remove('hidden');
       setTimeout(() => {
           messageDiv.classList.add('show');
       }, 100);
   }
})