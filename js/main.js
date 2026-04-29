/* Email reveal — address never in DOM until user clicks */
(function () {
  const btn = document.getElementById('email-btn');
  if (!btn) return;

  const parts = ['hello', '@', 'karthick.page'];

  btn.addEventListener('click', function revealEmail() {
    const addr = parts.join('');
    const container = btn.closest('li');

    const wrapper = document.createElement('span');
    wrapper.className = 'email-revealed';

    const dash = document.createElement('span');
    dash.className = 'em-dash';
    dash.textContent = '—';

    const emailSpan = document.createElement('span');
    emailSpan.className = 'email-address';
    emailSpan.textContent = addr;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'copy';
    copyBtn.setAttribute('aria-label', 'Copy email address');

    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(addr).then(function () {
        copyBtn.textContent = 'copied';
        copyBtn.classList.add('copied');
        setTimeout(function () {
          copyBtn.textContent = 'copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });

    wrapper.appendChild(dash);
    wrapper.appendChild(emailSpan);
    wrapper.appendChild(copyBtn);

    container.innerHTML = '';
    container.appendChild(wrapper);
  }, { once: true });
})();

/* Keyboard shortcuts — desktop (pointer) only */
(function () {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key.toLowerCase()) {
      case 'w':
        window.location.href = '/writings/';
        break;
      case 'p':
        window.location.href = '/projects/';
        break;
    }
  });
})();
