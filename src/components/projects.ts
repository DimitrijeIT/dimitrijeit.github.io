export function createProjects(): string {
  return `
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Some of my recent work and personal projects</p>
        </div>
        
        <div class="projects-grid">
          <div class="project-card featured">
            <div class="project-image">
              <div class="project-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener" class="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-category">PhD Research</div>
              <h3 class="project-title">AI Research - Transformers & Computer Vision</h3>
              <p class="project-description">
                Current PhD research focusing on latest AI technologies including Computer Vision, 
                Transformers, and Large Language Models using open-source platforms like HuggingFace. 
                Combining theoretical research with practical automotive applications.
              </p>
              <div class="project-tech">
                <span class="tech-tag">Computer Vision</span>
                <span class="tech-tag">Transformers</span>
                <span class="tech-tag">LLM</span>
                <span class="tech-tag">HuggingFace</span>
                <span class="tech-tag">Python</span>
              </div>
              <div class="project-stats">
                <div class="stat">
                  <span class="stat-value">3+</span>
                  <span class="stat-label">Years Research</span>
                </div>
                <div class="stat">
                  <span class="stat-value">PhD</span>
                  <span class="stat-label">In Progress</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                </svg>
              </div>
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener" class="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-category">Startup</div>
              <h3 class="project-title">BikeSeeing - Tourism Marketplace</h3>
              <p class="project-description">
                Co-founded BikeSeeing, a two-sided marketplace connecting tourists with local guides on bikes, 
                helping tourists discover hidden places and special views. Gained valuable entrepreneurship 
                and business development experience.
              </p>
              <div class="project-tech">
                <span class="tech-tag">Entrepreneurship</span>
                <span class="tech-tag">Business Development</span>
                <span class="tech-tag">Marketplace</span>
                <span class="tech-tag">Tourism</span>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener" class="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-category">Automotive Software</div>
              <h3 class="project-title">TTTech Auto - Software Update Solutions</h3>
              <p class="project-description">
                Senior C++ software engineer working on cutting-edge automotive software update technologies. 
                Implementing TDD, agile methodologies, and ASPICE processes for safety-critical automotive systems.
              </p>
              <div class="project-tech">
                <span class="tech-tag">C++</span>
                <span class="tech-tag">AUTOSAR</span>
                <span class="tech-tag">TDD</span>
                <span class="tech-tag">ASPICE</span>
                <span class="tech-tag">Automotive</span>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <div class="project-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div class="project-overlay">
                <div class="project-links">
                  <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener" class="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-category">Academic Teaching</div>
              <h3 class="project-title">University Teaching & Training</h3>
              <p class="project-description">
                Teaching Computer Vision and AUTOSAR at Faculty of Technical Sciences, and Adaptive AUTOSAR, 
                TDD, and Rust at NIT Academy. Bridging academia and industry through practical education.
              </p>
              <div class="project-tech">
                <span class="tech-tag">Computer Vision</span>
                <span class="tech-tag">AUTOSAR</span>
                <span class="tech-tag">TDD</span>
                <span class="tech-tag">Rust</span>
                <span class="tech-tag">Teaching</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="projects-footer">
          <p class="projects-note">
            Interested in my research or want to collaborate? Connect with me on 
            <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener" class="github-link">
              LinkedIn
            </a> 
            to discuss AI research, automotive software, or academic opportunities.
          </p>
        </div>
      </div>
    </section>
  `
}
