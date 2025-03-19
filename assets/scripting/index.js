document.querySelectorAll('.counter').forEach(c => {
    var t = +c.getAttribute('data-target'), v = 0;
    (function u() {
      c.innerText = Math.min(Math.ceil(v += t / 50), t); // Faster increment
      if (v < t) setTimeout(u, 20);
    })();
  });