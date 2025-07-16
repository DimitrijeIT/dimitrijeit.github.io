// Education Section
export function createEducationSection(): string {
  return `
    <div class="education-content">
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
  `;
}
