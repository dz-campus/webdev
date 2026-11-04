// About page: validate the contact form and show helpful errors on the page.
// The form does not send anything. Works with the keyboard (Tab, Enter).
(function () {
  var form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  // Turn off the browser's own pop-up messages so ours show instead.
  form.noValidate = true;

  var summary = document.getElementById('form-summary');
  var success = document.getElementById('form-success');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var fields = [
    {
      input: document.getElementById('contact-name'),
      error: document.getElementById('contact-name-error'),
      check: function (value) {
        if (value.trim() === '') {
          return 'Enter your name.';
        }
        if (value.trim().length < 2) {
          return 'Your name needs at least 2 characters.';
        }
        return '';
      }
    },
    {
      input: document.getElementById('contact-email'),
      error: document.getElementById('contact-email-error'),
      check: function (value) {
        if (value.trim() === '') {
          return 'Enter your email address.';
        }
        if (!emailPattern.test(value.trim())) {
          return 'Enter an email address like name@example.com.';
        }
        return '';
      }
    },
    {
      input: document.getElementById('contact-message'),
      error: document.getElementById('contact-message-error'),
      check: function (value) {
        var length = value.trim().length;
        if (length === 0) {
          return 'Write a message.';
        }
        if (length < 20) {
          return 'Your message needs at least 20 characters. You have ' + length + ' so far.';
        }
        return '';
      }
    }
  ];

  function validateField(field) {
    var message = field.check(field.input.value);
    field.error.textContent = message;
    if (message) {
      field.input.setAttribute('aria-invalid', 'true');
    } else {
      field.input.removeAttribute('aria-invalid');
    }
    return message === '';
  }

  fields.forEach(function (field) {
    // Check a field when the person leaves it.
    field.input.addEventListener('blur', function () {
      if (field.input.value !== '' || field.input.hasAttribute('aria-invalid')) {
        validateField(field);
      }
    });
    // Once a field shows an error, update it as the person types.
    field.input.addEventListener('input', function () {
      if (field.input.hasAttribute('aria-invalid')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    success.hidden = true;

    var firstInvalid = null;
    var problems = 0;

    fields.forEach(function (field) {
      if (!validateField(field)) {
        problems += 1;
        if (!firstInvalid) {
          firstInvalid = field.input;
        }
      }
    });

    if (problems > 0) {
      summary.textContent = problems === 1
        ? 'Please fix 1 problem below, then send again.'
        : 'Please fix ' + problems + ' problems below, then send again.';
      summary.hidden = false;
      firstInvalid.focus();
      return;
    }

    summary.hidden = true;
    form.reset();
    fields.forEach(function (field) {
      field.error.textContent = '';
      field.input.removeAttribute('aria-invalid');
    });
    success.textContent = 'Thank you! Your message is ready. (This demo form does not send email.)';
    success.hidden = false;
    success.focus();
  });
})();
