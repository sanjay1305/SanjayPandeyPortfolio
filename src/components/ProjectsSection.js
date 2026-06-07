import { h } from '../lib/createElement.js';
import { projects } from '../data/portfolio.js';

export function ProjectsSection() {
  return h(
    'section',
    { className: 'section', id: 'projects' },
    h(
      'div',
      { className: 'section-heading' },
      h('p', { className: 'eyebrow' }, 'Selected Work'),
      h('h2', null, 'Projects built around backend reliability and delivery.'),
    ),
    h(
      'div',
      { className: 'project-grid' },
      ...projects.map((project, index) =>
        h(
          'article',
          { className: 'project-card', key: project.name },
          h('p', { className: 'project-index' }, `0${index + 1}`),
          h('h3', null, project.name),
          h('p', null, project.description),
          h(
            'ul',
            null,
            ...project.stack.map((item) => h('li', { key: item }, item)),
          ),
        ),
      ),
    ),
  );
}
