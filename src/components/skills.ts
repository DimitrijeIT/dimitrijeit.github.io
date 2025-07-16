// Helper function to create skills categories
function createSkillsCategories(): string {
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
            </svg>
          </div>
          <h2 class="category-title">AI & Machine Learning</h2>
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
          <h2 class="category-title">Automotive Software</h2>
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
          <h2 class="category-title">Software Engineering</h2>
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
          <h1 class="category-title">Teaching & Leadership</h1>
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
  `
}

// Helper function to create research section
function createResearchSection(): string {
  return `
    <div class="research-section">
      <h1 class="section-subtitle">Research Publications</h1>
      
      <div class="research-grid">
        <div class="research-paper">
          <div class="paper-header">
            <h4 class="paper-title">Comparison of AWS Architectures for Scalable and Cost-Efficient Retrieval-Augmented Generation</h4>
            <div class="paper-meta">
              <span class="paper-year">2025</span>
            </div>
          </div>
          <div class="paper-venue">
            IEEE Conference (In Press)
          </div>
          <div class="paper-abstract">
            Large Language Models (LLMs) require up-to-date and domain-specific knowledge to generate accurate responses. This paper evaluates serverless RAG architecture on AWS that leverages Lambda, Amazon S3, DynamoDB, and API Gateway. Our evaluation demonstrates that a serverless approach can give savings of up to 87% for loads of 10000 requests per hour compared to EC2 instances while meeting the performance and efficiency requirements of modern AI applications.
          </div>
          <div class="paper-links">
            <a href="https://scholar.google.com/citations?user=Bw0wfi8AAAAJ" target="_blank" class="paper-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z"/>
              </svg>
              Google Scholar
            </a>
          </div>
          <div class="paper-tags">
            <span class="research-tag ai">Large Language Models</span>
            <span class="research-tag tech">Cloud Computing</span>
            <span class="research-tag tech">AWS</span>
          </div>
        </div>
        
        <div class="research-paper">
          <div class="paper-header">
            <h4 class="paper-title">Person re-identification with transformers and image stacking</h4>
            <div class="paper-meta">
              <span class="paper-year">2024</span>
            </div>
          </div>
          <div class="paper-venue">
            Telfor Conference
          </div>
          <div class="paper-abstract">
            Person re-identification (ReID) is increasingly important due to the expansion of surveillance cameras. We propose a transformer-based model, DeepChangeVIT-ReID, fine-tuned with triplet loss, using the DeepChange dataset. DeepChangeVIT-ReID achieves state-of-the-art performance, significantly improving Rank-1 accuracy compared to existing methods on the DeepChange dataset.
          </div>
          <div class="paper-links">
            <a href="https://ieeexplore.ieee.org/abstract/document/10819135/" target="_blank" class="paper-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z"/>
              </svg>
              IEEE Xplore
            </a>
          </div>
          <div class="paper-tags">
            <span class="research-tag ai">Computer Vision</span>
            <span class="research-tag ai">Transformers</span>
            <span class="research-tag tech">Person Re-ID</span>
          </div>
        </div>
        
        <div class="research-paper">
          <div class="paper-header">
            <h4 class="paper-title">Unit Test Generation Multi-Agent AI System for Enhancing Software Documentation and Code Coverage</h4>
            <div class="paper-meta">
              <span class="paper-year">2024</span>
            </div>
          </div>
          <div class="paper-venue">
            Telfor IEEE Conference
          </div>
          <div class="paper-abstract">
            Software development necessitates a robust testing plan though test development can be laborious and nonappealing task. We explore the utilization of artificial intelligence agents for generating and executing unit tests, enhancing the "Mostly Basic Python Problems" dataset. We employ behavior-driven development within a three-agent system to generate user stories and unit tests.
          </div>
          <div class="paper-links">
            <a href="https://ieeexplore.ieee.org/abstract/document/10819096/" target="_blank" class="paper-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z"/>
              </svg>
              IEEE Xplore
            </a>
          </div>
          <div class="paper-tags">
            <span class="research-tag ai">Multi-Agent Systems</span>
            <span class="research-tag tech">Software Testing</span>
            <span class="research-tag tech">AI Agents</span>
          </div>
        </div>
        
        <div class="research-paper">
          <div class="paper-header">
            <h4 class="paper-title">Improving Lane Annotation in Autonomous Driving Data Sets with Classical Computer Vision Techniques</h4>
            <div class="paper-meta">
              <span class="paper-year">2023</span>
            </div>
          </div>
          <div class="paper-authors">
            <span class="author-name primary">D. Stojanović</span>
          </div>
          <div class="paper-venue">
            IEEE Conference
          </div>
          <div class="paper-abstract">
            Autonomous driving systems rely on accurate and reliable lane detection to safely navigate roads. In this paper, we propose a method for improving lane annotation in autonomous driving data sets using classical computer vision techniques. The proposed method combines the Hough transform and linear curve fitting to detect and smooth the positions of lane markings in a video stream.
          </div>
          <div class="paper-links">
            <a href="https://ieeexplore.ieee.org/abstract/document/10174073" target="_blank" class="paper-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z"/>
              </svg>
              IEEE Xplore
            </a>
          </div>
          <div class="paper-tags">
            <span class="research-tag automotive">Autonomous Driving</span>
            <span class="research-tag ai">Computer Vision</span>
            <span class="research-tag tech">Lane Detection</span>
          </div>
        </div>
        
        <div class="research-paper">
          <div class="paper-header">
            <h4 class="paper-title">Comparative Analysis of Docker and Python Runtimes for AWS Lambda in RAG-Based AI Solutions</h4>
            <div class="paper-meta">
              <span class="paper-year">2025</span>
            </div>
          </div>
          <div class="paper-venue">
            Zinc Conference (In Press)
          </div>
          <div class="paper-abstract">
            Large Language Models (LLMs) require up-to-date and domain-specific knowledge to generate accurate responses. This paper evaluates serverless RAG architecture on AWS that leverages Lambda, Amazon S3, DynamoDB, and API Gateway to automate scaling, reduce management overhead, and implement a cost-effective, pay-per-use model for AI applications.
          </div>
          <div class="paper-links">
            <a href="https://scholar.google.com/citations?user=Bw0wfi8AAAAJ" target="_blank" class="paper-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z"/>
              </svg>
              Google Scholar
            </a>
          </div>
          <div class="paper-tags">
            <span class="research-tag tech">AWS Lambda</span>
            <span class="research-tag tech">Docker</span>
            <span class="research-tag ai">RAG Systems</span>
          </div>
        </div>
        
        <div class="research-paper">
          <div class="paper-header">
            <h4 class="paper-title">Source code generators for ADAS feature deployment in context of ROS and adaptive AUTOSAR applications</h4>
            <div class="paper-meta">
              <span class="paper-year">2019</span>
            </div>
          </div>
          <div class="paper-venue">
            Telfor Conference
          </div>
          <div class="paper-abstract">
            Fast development of autonomous vehicles comes with many challenges. One of biggest platform wise challenges is parallel development of Adaptive AUTOSAR platform and application that run on it. Use of source code generators was chosen to solve this problem. This paper presents one solution of using ROS features to allow running adaptive application on still developing platform using source code generators.
          </div>
          <div class="paper-links">
            <a href="https://ieeexplore.ieee.org/abstract/document/8971074" target="_blank" class="paper-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z"/>
              </svg>
              IEEE Xplore
            </a>
          </div>
          <div class="paper-tags">
            <span class="research-tag automotive">ADAS</span>
            <span class="research-tag automotive">AUTOSAR</span>
            <span class="research-tag tech">ROS</span>
          </div>
        </div>
      </div>
      
      <div class="research-footer">
        <p class="research-note">
          For a complete list of publications and latest research updates, visit my 
          <a href="https://scholar.google.com/citations?user=Bw0wfi8AAAAJ" target="_blank" class="scholar-link">
            Google Scholar profile
          </a>
        </p>
      </div>
    </div>
  `
}

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
          
          <div class="skills-summary">
            <h1 class="summary-title">Research & Technical Expertise</h1>
            <div class="expertise-tags">
              <span class="expertise-tag primary">AI Research</span>
              <span class="expertise-tag">Computer Vision</span>
              <span class="expertise-tag">Transformer Models</span>
              <span class="expertise-tag">Automotive Software</span>
              <span class="expertise-tag">AUTOSAR</span>
              <span class="expertise-tag">C++ Development</span>
              <span class="expertise-tag">Test-Driven Development</span>
              <span class="expertise-tag">Academic Teaching</span>
              <span class="expertise-tag">PhD Research</span>
              <span class="expertise-tag">Startup Experience</span>
            </div>
          </div>
          
          ${createResearchSection()}
        </div>
      </div>
    </section>
  `
}
