import { h } from '../lib/createElement.js';
import { skills } from '../data/portfolio.js';

export function SkillsSection() {
  return h(
    'section',
    { className: 'section skills-section', id: 'skills' },
    h(
      'div',
      { className: 'skills-card' },
      h(
        'div',
        { className: 'section-heading' },
        h('p', { className: 'eyebrow' }, 'Skills'),
        h('h2', null, 'Tools and technologies I work with every day.'),
      ),
      h(
        'div',
        { className: 'skill-chips', 'aria-label': 'Core skills' },
        ...skills.map((skill) => h('span', { key: skill }, skill)),
      ),
    ),
  );
}
