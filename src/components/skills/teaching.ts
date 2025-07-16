// Teaching Section
export function createTeachingSection(): string {
  return `
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
  `;
}
