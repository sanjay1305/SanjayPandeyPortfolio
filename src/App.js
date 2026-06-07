import { Topbar } from './components/Topbar.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { SkillsSection } from './components/SkillsSection.js';
import { ProjectsSection } from './components/ProjectsSection.js';
import { ExperienceSection } from './components/ExperienceSection.js';
import { BookingSection } from './components/BookingSection.js';
import { ContactSection } from './components/ContactSection.js';

export function App() {
  return window.React.createElement(
    'div',
    { className: 'page-shell' },
    window.React.createElement(Topbar),
    window.React.createElement(
      'main',
      null,
      window.React.createElement(Hero),
      window.React.createElement(About),
      window.React.createElement(SkillsSection),
      window.React.createElement(ProjectsSection),
      window.React.createElement(ExperienceSection),
      window.React.createElement(BookingSection),
      window.React.createElement(ContactSection),
    ),
  );
}
