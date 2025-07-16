// Import refactored skill components
import {
  createSkillsCategories,
  createSkillsSummary,
  createEducationSection,
  createCertificationsSection,
  createTeachingSection
} from './skills/index';

export function createSkills(): string {
  return `
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-subtitle">Technologies I work with and expertise areas</p>
        </div>
        
        <div class="skills-content">
          ${createSkillsCategories()}
          ${createSkillsSummary()}
          ${createEducationSection()}
          ${createCertificationsSection()}
          ${createTeachingSection()}
        </div>
      </div>
    </section>
  `;
}