import { h } from '../lib/createElement.js';

export function About() {
  return h(
    'section',
    { className: 'section about', id: 'about' },
    h(
      'div',
      { className: 'section-heading' },
      h('p', { className: 'eyebrow' }, 'About'),
      h('h2', null, 'Focused on dependable backend systems and clean engineering execution.'),
    ),
    h(
      'p',
      { className: 'section-copy' },
      'I work across service design, API development, data persistence, containerization, and cloud deployment. My goal is simple: build systems that are maintainable, scalable, and straightforward to deliver.',
    ),
  );
}
