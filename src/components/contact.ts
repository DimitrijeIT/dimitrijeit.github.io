export function createContact(): string {
  return `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Ready to work together? Let's discuss your next project</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-text">
              <h3>Let's Build Something Amazing</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h4>Email</h4>
                  <a href="mailto:dimitrije.stojanovic.95@gmail.com">dimitrije.stojanovic.95@gmail.com</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener">Connect with me</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h4>Location</h4>
                  <span>Novi Sad, Serbia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-footer">
          <div class="footer-content">
            <p>&copy; 2025 Dimitrije Stojanović. All rights reserved.</p>
            <div class="footer-links">
              <a href="#hero">Back to Top</a>
              <span class="separator">•</span>
              <a href="mailto:dimitrije.stojanovic.95@gmail.com">Email</a>
              <span class="separator">•</span>
              <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
