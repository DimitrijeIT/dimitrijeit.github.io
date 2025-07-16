// Skills Categories Section
export function createSkillsCategories(): string {
  return `
    <div class="skills-categories">
      <div class="skill-category">
        <div class="category-header">
          <div class="category-icon ai-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
              <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
              <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
              <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
              <path d="M18.364 18.364c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414-.024-.39-1.414 0-.39 1.024 0 1.414z"/>
              <path d="M4.222 4.222c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414-1.024-.39-1.414 0-.39 1.024 0 1.414z"/>
              <path d="M18.364 5.636c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0-.39 1.024 0 1.414 1.024.39 1.414 0z"/>
              <path d="M4.222 19.778c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0-.39 1.024 0 1.414 1.024.39 1.414 0z"/>
            </svg>
          </div>
          <h3 class="category-title">AI & Machine Learning</h3>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-name">Computer Vision</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Transformers</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Large Language Models</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">HuggingFace</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Python AI/ML</span>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <div class="category-header">
          <div class="category-icon automotive-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 17h14v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z"/>
              <path d="M7 14h10l1.8-6H5.2L7 14z"/>
              <path d="M5 8h14"/>
              <circle cx="7" cy="17" r="2"/>
              <circle cx="17" cy="17" r="2"/>
            </svg>
          </div>
          <h3 class="category-title">Automotive Software</h3>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-name">C++</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">AUTOSAR Classic</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Adaptive AUTOSAR</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">ASPICE</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Rust</span>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <div class="category-header">
          <div class="category-icon engineering-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <h3 class="category-title">Software Engineering</h3>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-name">Test-Driven Development</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Agile Methodologies</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Software Architecture</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Version Control (Git)</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Code Review</span>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <div class="category-header">
          <div class="category-icon leadership-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3 class="category-title">Teaching & Leadership</h3>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-name">Academic Teaching</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Mentoring</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Research & Development</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Public Speaking</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Entrepreneurship</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
