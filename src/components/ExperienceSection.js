import { h } from '../lib/createElement.js';
import { experience } from '../data/portfolio.js';

export function ExperienceSection() {
  return h(
    'section',
    { className: 'section timeline-section', id: 'experience' },
    h(
      'div',
      { className: 'section-heading' },
      h('p', { className: 'eyebrow' }, 'Experience'),
      h('h2', null, 'A timeline of backend work and growing responsibility.'),
    ),
    h(
      'div',
      { className: 'timeline' },
      ...experience.map((item) =>
        h(
          'article',
          { className: 'timeline-item', key: item.title },
          h('p', { className: 'timeline-period' }, item.period),
          h(
            'div',
            null,
            h(
              'h3',
              null,
              item.title,
              ' ',
              h('span', null, item.company),
            ),
            h('p', null, item.detail),
          ),
        ),
      ),
    ),
  );
}
