import { h } from '../lib/createElement.js';

export function Topbar() {
  return h(
    'header',
    { className: 'topbar' },
    h(
      'div',
      { className: 'brand' },
      h(
        'div',
        { className: 'brand-mark', 'aria-hidden': 'true' },
        h('img', {
          className: 'brand-image',
          src: './pic.png',
          alt: '',
        }),
      ),
      h(
        'div',
        null,
        h('p', { className: 'eyebrow' }, 'Portfolio'),
        h('p', { className: 'brand-name' }, 'Sanjay Pandey'),
      ),
    ),
    h(
      'nav',
      { className: 'nav' },
      h('a', { href: '#about' }, 'About'),
      h('a', { href: '#skills' }, 'Skills'),
      h('a', { href: '#projects' }, 'Projects'),
      h('a', { href: '#experience' }, 'Experience'),
      h('a', { href: '#register' }, 'Register'),
      h('a', { href: '#calendar' }, 'Calendar'),
      h('a', { href: '#contact' }, 'Contact'),
    ),
  );
}
