import Icon from './img/check.svg';

function changeFavicon() {
  const head = document.querySelector('head');
  const linkEl = document.createElement('link');
  linkEl.rel = 'icon';
  linkEl.href = Icon;
  head.appendChild(linkEl);
}

function buildPage() {
    changeFavicon();
}

export { buildPage };
