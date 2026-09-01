// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Contact form submission via Formspree
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var action = form.getAttribute('action') || '';

      // Placeholder endpoint check — see README for setup instructions.
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        status.textContent = 'Form isn\'t connected yet. See the README for the two-minute Formspree setup, or reach out directly using the details on this page.';
        status.className = 'error';
        return;
      }

      var data = new FormData(form);
      status.textContent = 'Sending…';
      status.className = '';

      fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          status.textContent = 'Thanks — your message is on its way. We\'ll get back to you shortly.';
          status.className = 'success';
          form.reset();
        } else {
          status.textContent = 'Something went wrong sending that. Please try again or email us directly.';
          status.className = 'error';
        }
      }).catch(function () {
        status.textContent = 'Something went wrong sending that. Please try again or email us directly.';
        status.className = 'error';
      });
    });
  }
});
