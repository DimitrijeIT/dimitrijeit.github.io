export function createHeader(): string {
  return `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="#hero" class="logo-text">Dimitrije Stojanović</a>
          </div>
          
          <nav class="nav">
            <ul class="nav-menu">
              <li><a href="#hero" class="nav-link">Home</a></li>
              <li><a href="#about" class="nav-link">About</a></li>
              <li><a href="#experience" class="nav-link">Experience</a></li>
              <li><a href="#skills" class="nav-link">Skills</a></li>
              <li><a href="#research" class="nav-link">Research</a></li>
              <li><a href="#projects" class="nav-link">Projects</a></li>
              <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            
            <button class="mobile-menu-btn" aria-label="Toggle mobile menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  `
}
