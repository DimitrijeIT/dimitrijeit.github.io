export function createExperience(): string {
  return `
    <section id="experience" class="experience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Experience</h2>
          <p class="section-subtitle">My professional journey and achievements</p>
        </div>
        
        <div class="experience-timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="job-title">Senior Full Stack Developer</h3>
                <span class="company">Tech Company Inc.</span>
                <span class="period">2022 - Present</span>
              </div>
              <div class="job-description">
                <p>
                  Leading development of scalable web applications using React, Node.js, and AWS. 
                  Mentoring junior developers and establishing best practices for the development team.
                </p>
                <ul class="achievements">
                  <li>Architected and developed a microservices platform serving 100k+ users</li>
                  <li>Reduced application load times by 60% through optimization and caching strategies</li>
                  <li>Led a team of 5 developers on multiple high-impact projects</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 80%</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Node.js</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">AWS</span>
                  <span class="tech-tag">Docker</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="job-title">Full Stack Developer</h3>
                <span class="company">Digital Solutions Ltd.</span>
                <span class="period">2020 - 2022</span>
              </div>
              <div class="job-description">
                <p>
                  Developed and maintained web applications for various clients using modern JavaScript frameworks 
                  and backend technologies. Collaborated with design and product teams to deliver user-focused solutions.
                </p>
                <ul class="achievements">
                  <li>Built 15+ responsive web applications for diverse industry clients</li>
                  <li>Improved code quality by implementing automated testing (Jest, Cypress)</li>
                  <li>Integrated third-party APIs and payment systems for e-commerce platforms</li>
                  <li>Mentored 3 junior developers and conducted code reviews</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">Vue.js</span>
                  <span class="tech-tag">Express.js</span>
                  <span class="tech-tag">MongoDB</span>
                  <span class="tech-tag">PostgreSQL</span>
                  <span class="tech-tag">Jest</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="job-title">Frontend Developer</h3>
                <span class="company">StartupXYZ</span>
                <span class="period">2019 - 2020</span>
              </div>
              <div class="job-description">
                <p>
                  Focused on creating intuitive user interfaces and implementing responsive designs. 
                  Worked closely with UX designers to translate mockups into pixel-perfect implementations.
                </p>
                <ul class="achievements">
                  <li>Developed the company's main product interface used by 10k+ users</li>
                  <li>Implemented responsive design resulting in 40% increase in mobile usage</li>
                  <li>Optimized application performance achieving 95+ Lighthouse scores</li>
                  <li>Established component library reducing development time by 30%</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Redux</span>
                  <span class="tech-tag">Sass</span>
                  <span class="tech-tag">Webpack</span>
                  <span class="tech-tag">Figma</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="job-title">Junior Web Developer</h3>
                <span class="company">Web Agency Pro</span>
                <span class="period">2018 - 2019</span>
              </div>
              <div class="job-description">
                <p>
                  Started my professional journey building websites and learning modern web development practices. 
                  Gained experience with various CMS platforms and frontend frameworks.
                </p>
                <ul class="achievements">
                  <li>Built 20+ client websites using WordPress and custom solutions</li>
                  <li>Learned modern JavaScript frameworks and best practices</li>
                  <li>Improved website loading speeds by implementing optimization techniques</li>
                  <li>Provided technical support and maintenance for existing projects</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">HTML/CSS</span>
                  <span class="tech-tag">JavaScript</span>
                  <span class="tech-tag">WordPress</span>
                  <span class="tech-tag">PHP</span>
                  <span class="tech-tag">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
