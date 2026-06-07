import { h } from '../lib/createElement.js';
import { InterviewPrepHeader } from './InterviewPrepHeader.js';
import { interviewTopics } from '../data/interviewPrep.js';

export function InterviewPrepPage() {
  const tocItems = interviewTopics.flatMap((topic) =>
    [
      { label: topic.title, href: `#${topic.id}` },
      ...(topic.subsections || []).map((subsection) => ({
        label: subsection.title,
        href: `#${subsection.id}`,
      })),
      ...(topic.commandTables || []).map((table) => ({
        label: table.title,
        href: `#${table.id}`,
      })),
    ],
  );

  return h(
    'div',
    { className: 'page-shell interview-page' },
    InterviewPrepHeader(),
    h(
      'main',
      null,
      h(
        'section',
        { className: 'gfg-hero' },
        h(
          'div',
          { className: 'hero-copy article-hero-copy' },
          h('p', { className: 'eyebrow' }, 'Article Library'),
          h('h1', null, 'Interview Prep'),
          h(
            'p',
            { className: 'lead' },
            'A topic-wise reading page for system design and LLM interview preparation, arranged like a technical article library.',
          ),
        ),
      ),
      h(
        'section',
        { className: 'gfg-layout' },
        h(
          'aside',
          { className: 'gfg-sidebar' },
          h('h3', null, 'Contents'),
          h(
            'nav',
            { className: 'gfg-toc' },
            ...tocItems.map((item) =>
              h('a', { href: item.href, key: `${item.href}-${item.label}` }, item.label),
            ),
          ),
        ),
        h(
          'div',
          { className: 'gfg-main' },
          ...interviewTopics.map((topic) =>
            topic.commandTables
              ? h(
                  'article',
                  { className: 'prep-topic article-card', id: topic.id, key: topic.id },
                  h(
                    'header',
                    { className: 'article-header' },
                    h('span', { className: 'topic-category' }, topic.category),
                    h('h2', null, topic.title),
                    h('p', { className: 'article-summary' }, topic.summary),
                  ),
                  h(
                    'div',
                    { className: 'article-links' },
                    ...topic.links.map((link) =>
                      h('a', { href: link.href, key: link.label }, link.label),
                    ),
                  ),
                  ...topic.commandTables.map((table) =>
                    h(
                      'section',
                      { className: 'command-section', id: table.id, key: table.id },
                      h('h3', null, table.title),
                      h(
                        'div',
                        { className: 'command-table-wrap' },
                        h(
                          'table',
                          { className: 'command-table' },
                          h(
                            'thead',
                            null,
                            h(
                              'tr',
                              null,
                              h('th', null, 'Command'),
                              h('th', null, 'Use'),
                            ),
                          ),
                          h(
                            'tbody',
                            null,
                            ...table.rows.map((row) =>
                              h(
                                'tr',
                                { key: row.command },
                                h('td', null, h('code', null, row.command)),
                                h('td', null, row.usage),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                )
              : h(
                  'article',
                  { className: 'prep-topic article-card', id: topic.id, key: topic.id },
                  h(
                    'header',
                    { className: 'article-header' },
                    h('span', { className: 'topic-category' }, topic.category),
                    h('h2', null, topic.title),
                    h('p', { className: 'article-summary' }, topic.summary),
                  ),
                  h(
                    'div',
                    { className: 'article-links' },
                    ...topic.links.map((link) =>
                      h('a', { href: link.href, key: link.label }, link.label),
                    ),
                  ),
                  h(
                    'div',
                    { className: 'article-body' },
                    ...topic.subsections.map((subsection) =>
                      h(
                        'section',
                        { className: 'article-section', id: subsection.id, key: subsection.id },
                        h('h3', null, subsection.title),
                        h('p', null, subsection.body),
                      ),
                    ),
                  ),
                  h(
                    'div',
                    { className: 'qa-grid' },
                    h(
                      'section',
                      { className: 'prep-panel' },
                      h('h3', null, 'Key notes'),
                      h(
                        'ul',
                        null,
                        ...topic.notes.map((note) => h('li', { key: note }, note)),
                      ),
                    ),
                    h(
                      'section',
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
        h(
          'aside',
          { className: 'gfg-aside' },
          h(
            'div',
            { className: 'hero-card interview-card' },
            h('div', { className: 'status-pill' }, 'Curated content'),
            h(
              'div',
              { className: 'topic-highlight' },
              h('h2', null, 'Study by topic'),
              h('p', null, 'Open any section from the contents list and read it like an article.'),
            ),
          ),
          h(
            'div',
            { className: 'prep-panel gfg-note' },
            h('h3', null, 'How to use this page'),
            h('p', null, 'Start with the topic index, then jump into each article section and its subtopics.'),
          ),
        ),
      ),
    ),
  );
}
