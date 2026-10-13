(function () {
  var root = document.documentElement;

  // Wires a group of [data-set-<name>] buttons to a data-<name> attribute on <html>.
  function bindPreference(name, current) {
    var buttons = document.querySelectorAll('[data-set-' + name + ']');
    buttons.forEach(function (button) {
      var value = button.getAttribute('data-set-' + name);
      button.setAttribute('aria-pressed', String(value === current));
      button.addEventListener('click', function () {
        root.setAttribute('data-' + name, value);
        try { localStorage.setItem(name, value); } catch (e) {}
        buttons.forEach(function (other) {
          other.setAttribute('aria-pressed', String(other === button));
        });
      });
    });
  }

  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  bindPreference('theme', root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light'));
  bindPreference('font', root.getAttribute('data-font'));

  var prefsButton = document.getElementById('prefs-btn');
  var prefsPanel = document.getElementById('prefs-panel');

  function setPanelOpen(open) {
    prefsPanel.classList.toggle('open', open);
    prefsButton.setAttribute('aria-expanded', String(open));
  }

  if (prefsButton && prefsPanel) {
    prefsButton.addEventListener('click', function () {
      setPanelOpen(!prefsPanel.classList.contains('open'));
    });

    document.addEventListener('click', function (event) {
      if (!prefsPanel.contains(event.target) && !prefsButton.contains(event.target)) {
        setPanelOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && prefsPanel.classList.contains('open')) {
        setPanelOpen(false);
        prefsButton.focus();
      }
    });
  }

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.tslider').forEach(function (slider) {
    var track = slider.querySelector('.tslider-track');
    var dotsBox = slider.querySelector('.tslider-dots');
    var total = track.children.length;
    var index = 0;
    var timer;

    if (total < 2) {
      slider.querySelector('.tslider-controls').hidden = true;
      return;
    }

    for (var i = 0; i < total; i++) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'tslider-dot';
      dot.setAttribute('aria-label', String(i + 1) + ' / ' + total);
      dot.dataset.index = i;
      dotsBox.appendChild(dot);
    }

    function go(n) {
      index = ((n % total) + total) % total;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      Array.prototype.forEach.call(dotsBox.children, function (dot, j) {
        dot.classList.toggle('active', j === index);
      });
    }

    function pause() { clearInterval(timer); }
    function play() {
      pause();
      if (!reduceMotion) timer = setInterval(function () { go(index + 1); }, 5000);
    }

    slider.querySelector('.tslider-prev').addEventListener('click', function () { go(index - 1); play(); });
    slider.querySelector('.tslider-next').addEventListener('click', function () { go(index + 1); play(); });
    dotsBox.addEventListener('click', function (event) {
      if (event.target.dataset.index != null) { go(+event.target.dataset.index); play(); }
    });

    var startX;
    track.addEventListener('touchstart', function (event) {
      startX = event.touches[0].clientX;
      pause();
    }, { passive: true });
    track.addEventListener('touchend', function (event) {
      var dx = event.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      play();
    }, { passive: true });

    go(0);
    play();
  });
})();
