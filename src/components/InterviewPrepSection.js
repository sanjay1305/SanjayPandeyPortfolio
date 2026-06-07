import { h } from '../lib/createElement.js';
import { interviewTopics } from '../data/interviewPrep.js';

export function InterviewPrepSection() {
  return h(
    'section',
    { className: 'section interview-section', id: 'interview-prep' },
    h(
      'div',
      { className: 'section-heading' },
      h('p', { className: 'eyebrow' }, 'Interview Prep'),
      h('h2', null, 'Topic-wise system design and LLM interview content.'),
    ),
    h(
      'p',
      { className: 'section-copy' },
      'Click a topic card to jump into the matching content below. The page keeps everything in one place so you can study without leaving the portfolio.',
    ),
    h(
      'div',
      { className: 'topic-grid' },
      ...interviewTopics.map((topic) =>
        h(
          'a',
          { className: 'topic-card', href: `#${topic.id}`, key: topic.id },
          h('span', { className: 'topic-category' }, topic.category),
          h('h3', null, topic.title),
          h('p', null, topic.summary),
        ),
      ),
    ),
    h(
      'div',
      { className: 'prep-content' },
      ...interviewTopics.map((topic) =>
        h(
          'article',
          { className: 'prep-topic', id: topic.id, key: topic.id },
          h(
            'div',
            { className: 'section-heading' },
            h('p', { className: 'eyebrow' }, topic.category),
            h('h2', null, topic.title),
          ),
          h('p', { className: 'section-copy' }, topic.summary),
          h(
            'div',
            { className: 'topic-links' },
            ...topic.links.map((link) =>
              h('a', { href: link.href, key: link.label }, link.label),
            ),
          ),
          h(
            'div',
            { className: 'subtopic-grid' },
            ...topic.subsections.map((subsection) =>
              h(
                'section',
                { className: 'subtopic-card', id: subsection.id, key: subsection.id },
                h('h3', null, subsection.title),
                h('p', null, subsection.body),
              ),
            ),
          ),
          h(
            'div',
            { className: 'prep-columns' },
            h(
              'div',
              { className: 'prep-panel' },
              h('h3', null, 'Key notes'),
              h(
                'ul',
                null,
                ...topic.notes.map((note) => h('li', { key: note }, note)),
              ),
            ),
            h(
              'div',
              { className: 'prep-panel' },
              h('h3', null, 'Interview questions'),
              h(
                'ul',
                null,
                ...topic.questions.map((question) => h('li', { key: question }, question)),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}

