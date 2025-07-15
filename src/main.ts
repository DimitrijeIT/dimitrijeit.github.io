import './style.css'
import { createHeader } from './components/header.js'
import { createHero } from './components/hero.js'
import { createAbout } from './components/about.js'
import { createExperience } from './components/experience.js'
import { createSkills } from './components/skills.js'
import { createProjects } from './components/projects.js'
import { createContact } from './components/contact.js'
import { initializeAnimations } from './animations.js'

// Initialize the application
function initApp() {
  const app = document.querySelector<HTMLDivElement>('#app')!
  
  // Create the main layout structure
  app.innerHTML = `
    <div class="cv-container">
      ${createHeader()}
      <main class="main-content">
        ${createHero()}
        ${createAbout()}
        ${createExperience()}
        ${createSkills()}
        ${createProjects()}
        ${createContact()}
      </main>
    </div>
  `
  
  // Initialize animations and interactions
  initializeAnimations()
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
  const navMenu = document.querySelector('.nav-menu')
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active')
      mobileMenuBtn.classList.toggle('active')
    })
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp)
