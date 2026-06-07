import { h } from '../lib/createElement.js';

export function InterviewPrepHeader() {
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
        h('p', { className: 'eyebrow' }, 'Interview Prep'),
        h('p', { className: 'brand-name' }, 'Sanjay Pandey'),
      ),
    ),
    h(
      'nav',
      { className: 'nav' },
      h('a', { href: './index.html' }, 'Portfolio'),
      h('a', { href: '#topic-index' }, 'Topics'),
      h('a', { href: '#system-design-basics' }, 'System Design'),
      h('a', { href: '#llm-foundations' }, 'LLM'),
    ),
  );
}

