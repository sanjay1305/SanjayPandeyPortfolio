import { h } from '../lib/createElement.js';

export function ContactSection() {
  return h(
    'section',
    { className: 'section contact-section', id: 'contact' },
    h(
      'div',
      { className: 'contact-card' },
      h(
        'div',
        null,
        h('p', { className: 'eyebrow' }, 'Contact'),
        h('h2', null, 'Have a backend role or platform challenge? Let us build something solid.'),
      ),
      h(
        'p',
        null,
        'Reach out for full-time roles, platform work, or a conversation about Java, Spring Boot, microservices, Docker, Kubernetes, and OCI Cloud.',
      ),
      h(
        'div',
        { className: 'contact-actions' },
        h(
          'a',
          { className: 'button button-primary', href: 'mailto:sanjaypandey151081@gmail.com' },
          'sanjaypandey151081@gmail.com',
        ),
        h(
          'a',
          {
            className: 'button button-secondary',
            href: 'https://www.linkedin.com/in/sanjaypandeybangalore/',
            target: '_blank',
            rel: 'noreferrer',
          },
          'LinkedIn Profile',
        ),
      ),
    ),
  );
}
