const $button = document.getElementById('getStartedButton');
const $form = document.getElementById('advantages');

$button.addEventListener('click', e => {
  $form.scrollIntoView({ 
    behavior: 'smooth',
  });
});