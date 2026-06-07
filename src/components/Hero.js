import { h } from '../lib/createElement.js';

export function Hero() {
  return h(
    'section',
    { className: 'hero' },
    h(
      'div',
      { className: 'hero-copy' },
      h('p', { className: 'eyebrow' }, 'Software Engineer'),
      h(
        'h1',
        null,
        'I build reliable backend systems with Java, Spring Boot, and cloud deployment in mind.',
      ),
      h(
        'p',
        { className: 'lead' },
        'I am Sanjay Pandey, a software engineer focused on microservices, API design, persistence, containerization, and cloud-native delivery.',
      ),
      h(
        'div',
        { className: 'hero-actions' },
        h('a', { className: 'button button-primary', href: '#projects' }, 'View projects'),
        h('a', { className: 'button button-secondary', href: '#contact' }, 'Let us talk'),
      ),
      h(
        'dl',
        { className: 'stats', 'aria-label': 'Professional highlights' },
        h('div', null, h('dt', null, 'Java'), h('dd', null, 'enterprise-grade application development')),
        h('div', null, h('dt', null, 'Cloud'), h('dd', null, 'OCI deployment and infrastructure workflow')),
        h('div', null, h('dt', null, 'APIs'), h('dd', null, 'clean service contracts and integrations')),
      ),
    ),
    h(
      'aside',
      { className: 'hero-card' },
      h(
        'div',
        { className: 'status-pill' },
        h('span', { className: 'status-dot', 'aria-hidden': 'true' }),
        'Available for backend engineering opportunities',
      ),
      h(
        'div',
        { className: 'profile-panel' },
        h('div', { className: 'profile-orb', 'aria-hidden': 'true' }),
        h(
          'div',
          { className: 'profile-copy' },
          h('p', { className: 'panel-label' }, 'Currently focused on'),
          h('h2', null, 'Building scalable services that are clean, stable, and easy to operate.'),
          h(
            'p',
            null,
            'I enjoy solving backend problems with practical architecture, clear data models, and deployment-friendly service design.',
          ),
        ),
      ),
      h(
        'div',
        { className: 'mini-grid' },
        h('div', null, h('span', null, 'Primary stack'), h('strong', null, 'Java, Spring Boot, Microservices')),
        h('div', null, h('span', null, 'Cloud'), h('strong', null, 'OCI, Docker, Kubernetes')),
      ),
    ),
  );
}
