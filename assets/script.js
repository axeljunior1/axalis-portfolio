// Formulaire de contact : démo front-end uniquement, pas de backend branché.
// Pour une mise en production, remplacer ce bloc par un vrai envoi
// (endpoint d'e-mail transactionnel, service de formulaire, etc.).
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var thanks = document.getElementById('thanks');
  if (!form || !thanks) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.style.display = 'none';
    thanks.style.display = 'block';
  });
});
