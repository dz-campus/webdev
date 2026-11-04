// Work page: filter the project cards by topic.
// Works with a mouse, touch, or the keyboard (Tab to a button, then Enter or Space).
(function () {
  var buttons = document.querySelectorAll('.filter-button');
  var cards = document.querySelectorAll('.project-card');
  var status = document.getElementById('filter-status');

  if (!buttons.length || !cards.length || !status) {
    return;
  }

  function applyFilter(button) {
    var filter = button.getAttribute('data-filter');
    var shown = 0;

    cards.forEach(function (card) {
      var matches = filter === 'all' || card.getAttribute('data-category') === filter;
      card.hidden = !matches;
      if (matches) {
        shown += 1;
      }
    });

    buttons.forEach(function (other) {
      other.setAttribute('aria-pressed', other === button ? 'true' : 'false');
    });

    if (filter === 'all') {
      status.textContent = 'Showing all ' + cards.length + ' projects';
    } else {
      status.textContent = 'Showing ' + shown + ' of ' + cards.length + ' projects: ' + button.textContent;
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      applyFilter(button);
    });
  });
})();
