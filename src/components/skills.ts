export function createSkills(): string {
  return `
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-subtitle">Technologies I work with and my proficiency levels</p>
        </div>
        
        <div class="skills-content">
          <div class="skills-categories">
            <div class="skill-category">
              <h3 class="category-title">Frontend Development</h3>
              <div class="skills-grid">
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">React</span>
                    <span class="skill-level">95%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 95%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">TypeScript</span>
                    <span class="skill-level">90%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 90%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Vue.js</span>
                    <span class="skill-level">85%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 85%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">CSS/Sass</span>
                    <span class="skill-level">95%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 95%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Next.js</span>
                    <span class="skill-level">88%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 88%"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="skill-category">
              <h3 class="category-title">Backend Development</h3>
              <div class="skills-grid">
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Node.js</span>
                    <span class="skill-level">92%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 92%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Express.js</span>
                    <span class="skill-level">90%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 90%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Python</span>
                    <span class="skill-level">80%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 80%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">GraphQL</span>
                    <span class="skill-level">85%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 85%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">REST APIs</span>
                    <span class="skill-level">95%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 95%"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="skill-category">
              <h3 class="category-title">Database & Cloud</h3>
              <div class="skills-grid">
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">PostgreSQL</span>
                    <span class="skill-level">88%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 88%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">MongoDB</span>
                    <span class="skill-level">85%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 85%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">AWS</span>
                    <span class="skill-level">82%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 82%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Docker</span>
                    <span class="skill-level">80%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 80%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Redis</span>
                    <span class="skill-level">75%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 75%"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="skill-category">
              <h3 class="category-title">Tools & Others</h3>
              <div class="skills-grid">
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Git</span>
                    <span class="skill-level">95%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 95%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Jest/Testing</span>
                    <span class="skill-level">88%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 88%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Webpack/Vite</span>
                    <span class="skill-level">85%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 85%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Figma</span>
                    <span class="skill-level">80%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 80%"></div>
                  </div>
                </div>
                
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">Agile/Scrum</span>
                    <span class="skill-level">90%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 90%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="skills-summary">
            <h3 class="summary-title">Technical Expertise</h3>
            <div class="expertise-tags">
              <span class="expertise-tag primary">Full Stack Development</span>
              <span class="expertise-tag">Microservices Architecture</span>
              <span class="expertise-tag">RESTful APIs</span>
              <span class="expertise-tag">Cloud Computing</span>
              <span class="expertise-tag">DevOps</span>
              <span class="expertise-tag">Database Design</span>
              <span class="expertise-tag">Performance Optimization</span>
              <span class="expertise-tag">Code Review</span>
              <span class="expertise-tag">Team Leadership</span>
              <span class="expertise-tag">Agile Methodologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
