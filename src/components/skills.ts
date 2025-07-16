export function createSkills(): string {
  return `
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-subtitle">Technologies I work with and expertise areas</p>
        </div>
        
        <div class="skills-content">
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
          
          <div class="skills-summary">
            <h3 class="summary-title">Research & Technical Expertise</h3>
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
          
          <div class="education-section">
            <h3 class="section-subtitle">Education</h3>
            <div class="education-grid">
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/ftn.png" alt="University of Novi Sad" class="logo">
                </div>
                <div class="education-info">
                  <h4>PhD in Computer Science</h4>
                  <p class="institution">Faculty of Technical Sciences, University of Novi Sad</p>
                  <p class="period">2021 - Present</p>
                  <p class="description">Focus on AI Research, Transformer models, and Computer Vision</p>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/ftn.png" alt="University of Novi Sad" class="logo">
                </div>
                <div class="education-info">
                  <h4>Master of Science in Electrical Engineering</h4>
                  <p class="institution">Faculty of Technical Sciences, University of Novi Sad</p>
                  <p class="period">2019 - 2021</p>
                  <p class="description">Specialized in Computer Vision and Machine Learning</p>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/etf.png" alt="University of Belgrade" class="logo">
                </div>
                <div class="education-info">
                  <h4>Bachelor's degree, Computer Engineering and Informatics</h4>
                  <p class="institution">University of Belgrade, School of Electrical Engineering</p>
                  <p class="period">2014 - 2018</p>
                  <p class="description">Foundation in Computer Engineering and Informatics</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="certifications-section">
            <h3 class="section-subtitle">Certifications & Professional Development</h3>
            <div class="education-grid">
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/udacity.png" alt="Udacity" class="logo">
                </div>
                <div class="education-info">
                  <h4>AI Programming with Python Nanodegree</h4>
                  <p class="institution">Udacity</p>
                  <p class="period">2020</p>
                  <p class="description">Advanced Python programming for AI applications</p>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Python AI/ML</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
                </div>
                <div class="education-info">
                  <h4>AI Agentic Design Patterns with AutoGen</h4>
                  <p class="institution">DeepLearning.AI</p>
                  <p class="period">2024</p>
                  <p class="description">Multi-agent conversation patterns and agentic AI design with Microsoft AutoGen</p>
                  <a href="https://learn.deeplearning.ai/accomplishments/f657a881-60aa-42d8-88c0-24e2a3fd747e?usp=sharing" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Large Language Models</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
                </div>
                <div class="education-info">
                  <h4>ChatGPT Prompt Engineering for Developers</h4>
                  <p class="institution">DeepLearning.AI</p>
                  <p class="period">2024</p>
                  <p class="description">Advanced prompt engineering techniques for ChatGPT and LLM applications</p>
                  <a href="https://learn.deeplearning.ai/accomplishments/bb4d050c-53ec-4019-b626-74e927c6e7d1" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Large Language Models</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
                </div>
                <div class="education-info">
                  <h4>Open Source Models with Hugging Face</h4>
                  <p class="institution">DeepLearning.AI</p>
                  <p class="period">2024</p>
                  <p class="description">Working with open source models, NLP, computer vision, and multimodal applications</p>
                  <a href="https://learn.deeplearning.ai/accomplishments/57ddf23a-9f1f-4d9b-a799-d406287e1d41" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">HuggingFace</span>
                    <span class="cert-tag ai-ml">Computer Vision</span>
                    <span class="cert-tag ai-ml">Transformers</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
                </div>
                <div class="education-info">
                  <h4>LangChain for LLM Application Development</h4>
                  <p class="institution">DeepLearning.AI</p>
                  <p class="period">2024</p>
                  <p class="description">Building LLM applications with LangChain framework, memory, and chains</p>
                  <a href="https://learn.deeplearning.ai/accomplishments/e00cbf27-d31d-4905-93d7-87e7e52da273" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Large Language Models</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
                </div>
                <div class="education-info">
                  <h4>Building Generative AI Applications with Gradio</h4>
                  <p class="institution">DeepLearning.AI</p>
                  <p class="period">2024</p>
                  <p class="description">Creating interactive AI applications with Gradio for NLP and computer vision tasks</p>
                  <a href="https://learn.deeplearning.ai/accomplishments/0ab350ce-fc59-4d72-a267-df3308761e1a" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Computer Vision</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
                </div>
                <div class="education-info">
                  <h4>Knowledge Graphs for RAG</h4>
                  <p class="institution">DeepLearning.AI</p>
                  <p class="period">2024</p>
                  <p class="description">Building knowledge graphs for Retrieval-Augmented Generation applications</p>
                  <a href="https://learn.deeplearning.ai/accomplishments/e2adb4f6-65e2-4458-b238-cc907c02cda0" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Large Language Models</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
                </div>
                <div class="education-info">
                  <h4>AI Agents in LangGraph</h4>
                  <p class="institution">DeepLearning.AI</p>
                  <p class="period">2024</p>
                  <p class="description">Advanced AI agent development using LangGraph framework with persistence and streaming</p>
                  <a href="https://learn.deeplearning.ai/accomplishments/5cbfee27-52aa-42d5-8753-aa28b507af08" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Large Language Models</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                    <span class="cert-tag engineering">Software Architecture</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
                </div>
                <div class="education-info">
                  <h4>LangChain- Develop AI Agents with LangChain & LangGraph</h4>
                  <p class="institution">Udemy</p>
                  <p class="period">September 2024</p>
                  <p class="description">Advanced AI Agents development using LangChain and LangGraph frameworks</p>
                  <a href="https://www.udemy.com/certificate/UC-e9a9f28e-a3c0-4b0d-b93d-d6cbf2f89589/" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Large Language Models</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                    <span class="cert-tag engineering">Software Architecture</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
                </div>
                <div class="education-info">
                  <h4>AWS Certified Machine Learning Specialty 2025 - Hands On!</h4>
                  <p class="institution">Udemy</p>
                  <p class="period">July 2024</p>
                  <p class="description">Comprehensive AWS ML services training and certification preparation</p>
                  <a href="https://www.udemy.com/certificate/UC-578bef9f-6e6d-4bd0-b8b3-f00f169eea59/" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                    <span class="cert-tag engineering">Software Architecture</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
                </div>
                <div class="education-info">
                  <h4>Machine Learning A-Z: AI, Python & R + ChatGPT Prize</h4>
                  <p class="institution">Udemy</p>
                  <p class="period">2024</p>
                  <p class="description">Comprehensive Machine Learning course covering Python, R, and AI technologies</p>
                  <a href="https://www.udemy.com/certificate/UC-b6648857-7af2-43d2-b4a9-a285b402fc5d/" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">AI & Machine Learning</span>
                    <span class="cert-tag ai-ml">Python AI/ML</span>
                    <span class="cert-tag ai-ml">Large Language Models</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
                </div>
                <div class="education-info">
                  <h4>Become a Product Manager | Learn the Skills & Get the Job</h4>
                  <p class="institution">Udemy</p>
                  <p class="period">2024</p>
                  <p class="description">Product management fundamentals, strategy, and career development</p>
                  <a href="https://www.udemy.com/certificate/UC-fcad8f44-e30b-45c9-a7e6-8faf951c2296/" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag leadership">Teaching & Leadership</span>
                    <span class="cert-tag leadership">Entrepreneurship</span>
                    <span class="cert-tag engineering">Agile Methodologies</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
                </div>
                <div class="education-info">
                  <h4>The Complete Guide to Becoming a Software Architect</h4>
                  <p class="institution">Udemy</p>
                  <p class="period">2020</p>
                  <p class="description">Software architecture principles, design patterns, and system design</p>
                  <a href="https://www.udemy.com/certificate/UC-ff11f74b-3d00-43dc-a77c-6cad85a23d25/" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag engineering">Software Engineering</span>
                    <span class="cert-tag engineering">Software Architecture</span>
                    <span class="cert-tag engineering">Test-Driven Development</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
                </div>
                <div class="education-info">
                  <h4>Complete Python Bootcamp From Zero to Hero in Python</h4>
                  <p class="institution">Udemy</p>
                  <p class="period">2019</p>
                  <p class="description">Comprehensive Python programming fundamentals and advanced concepts</p>
                  <a href="http://www.udemy.com/certificate/UC-LQQX7LIE" target="_blank" class="certificate-link">View Certificate</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">Python AI/ML</span>
                    <span class="cert-tag engineering">Software Engineering</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/startup_centar.png" alt="Startup Center" class="logo">
                </div>
                <div class="education-info">
                  <h4>Startup Accelerator Program</h4>
                  <p class="institution">Startup Center Novi Sad</p>
                  <p class="period">2018</p>
                  <p class="description">Entrepreneurship, Business Development, and Innovation</p>
                  <div class="certificate-tags">
                    <span class="cert-tag leadership">Teaching & Leadership</span>
                    <span class="cert-tag leadership">Entrepreneurship</span>
                    <span class="cert-tag leadership">Research & Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="teaching-section">
            <h3 class="section-subtitle">Teaching</h3>
            <div class="education-grid">
              <div class="course-card">
                <div class="course-image">
                  <img src="/personal_cv/course-images/tdd-bdd-course.jpg" alt="Software Development with TDD and BDD">
                </div>
                <div class="course-content">
                  <h4>Software Development with TDD and BDD</h4>
                  <p class="institution">NIT Academy</p>
                  <p class="period">Current - Advanced Level</p>
                  <p class="description">Master the art of software craftsmanship and technical excellence with Test-Driven Development (TDD) and Behavior-Driven Development (BDD). This comprehensive course covers patterns in TDD, refactoring legacy code, and BDD methodology with practical applications.</p>
                  <a href="https://academy.nit-institute.com/course/software-development-with-tdd-and-bdd/" target="_blank" class="certificate-link">View Course</a>
                  <div class="certificate-tags">
                    <span class="cert-tag teaching">Software Engineering</span>
                    <span class="cert-tag engineering">TDD/BDD</span>
                    <span class="cert-tag engineering">C++</span>
                  </div>
                </div>
              </div>
              
              <div class="course-card">
                <div class="course-image">
                  <img src="/personal_cv/course-images/adaptive-autosar-course.jpg" alt="Automotive Software with Adaptive AUTOSAR">
                </div>
                <div class="course-content">
                  <h4>Automotive Software with Adaptive AUTOSAR</h4>
                  <p class="institution">NIT Academy</p>
                  <p class="period">Current - Advanced Level</p>
                  <p class="description">Learn and master Adaptive AUTOSAR architecture, methodology and workflow. This training covers service-oriented architecture, communication management, functional clusters, and modern vehicle ECU development using industry-proven platforms.</p>
                  <a href="https://academy.nit-institute.com/course/automotive-software-with-adaptive-autosar/" target="_blank" class="certificate-link">View Course</a>
                  <div class="certificate-tags">
                    <span class="cert-tag automotive">Automotive Software</span>
                    <span class="cert-tag automotive">AUTOSAR</span>
                    <span class="cert-tag engineering">C++</span>
                  </div>
                </div>
              </div>
              
              <div class="course-card">
                <div class="course-image">
                  <img src="/personal_cv/course-images/rust-programming-course.png" alt="Programming with Rust">
                </div>
                <div class="course-content">
                  <h4>Programming with Rust</h4>
                  <p class="institution">NIT Academy</p>
                  <p class="period">Current - Advanced Level</p>
                  <p class="description">Introduction to Rust programming language fundamentals including ownership concepts, concurrency, smart pointers, data types, and package management. Designed for safe and efficient system-level and microservices development.</p>
                  <a href="https://academy.nit-institute.com/course/rust/" target="_blank" class="certificate-link">View Course</a>
                  <div class="certificate-tags">
                    <span class="cert-tag engineering">Rust</span>
                    <span class="cert-tag engineering">Systems Programming</span>
                    <span class="cert-tag teaching">Programming Languages</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/ftn.png" alt="Faculty of Technical Sciences" class="logo">
                </div>
                <div class="education-info">
                  <h4>Computer Vision</h4>
                  <p class="institution">Faculty of Technical Sciences, University of Novi Sad</p>
                  <p class="period">Current - University Course</p>
                  <p class="description">Advanced computer vision course covering modern techniques, algorithms, and applications in image processing, pattern recognition, and machine learning for visual data analysis.</p>
                  <a href="https://ftn.uns.ac.rs/2686/dimitrije-stojanovic" target="_blank" class="certificate-link">Faculty Profile</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">Computer Vision</span>
                    <span class="cert-tag ai-ml">Machine Learning</span>
                    <span class="cert-tag teaching">Academic Teaching</span>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="education-logo">
                  <img src="/personal_cv/logos/ftn.png" alt="Faculty of Technical Sciences" class="logo">
                </div>
                <div class="education-info">
                  <h4>Classic Computer Vision</h4>
                  <p class="institution">Faculty of Technical Sciences, University of Novi Sad</p>
                  <p class="period">Current - University Course</p>
                  <p class="description">Foundational computer vision course focusing on classical image processing techniques, feature detection, geometric transformations, and traditional approaches to visual perception and analysis.</p>
                  <a href="https://ftn.uns.ac.rs/2686/dimitrije-stojanovic" target="_blank" class="certificate-link">Faculty Profile</a>
                  <div class="certificate-tags">
                    <span class="cert-tag ai-ml">Computer Vision</span>
                    <span class="cert-tag engineering">Image Processing</span>
                    <span class="cert-tag teaching">Academic Teaching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>

      </div>
     
    </section>
     ${createResearchSection()}
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