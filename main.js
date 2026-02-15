<script src="main.js"></script>// 
Java<script src="main.js"></script>

// Hover effect on featured project image
const featuredImg = document.querySelector('#projects img');

if (featuredImg) {
  featuredImg.addEventListener('mouseover', () => {
    featuredImg.style.opacity = '0.7';
  });

  featuredImg.addEventListener('mouseout', () => {
    featuredImg.style.opacity = '1';
  });
}
feat(dom): add hover effect to featured project image

// Toggle Skills section
const skillsSection = document.querySelector('#skills');
const skillsBtn = document.createElement('button');
skillsBtn.textContent = 'Toggle Skills';
skillsSection.before(skillsBtn);

skillsBtn.addEventListener('click', () => {
  skillsSection.hidden = !skillsSection.hidden;
});
feat(dom): toggle visibility of Skills section

// Toggle About section
const aboutSection = document.querySelector('#about');
const aboutBtn = document.createElement('button');
aboutBtn.textContent = 'Toggle About';
aboutSection.before(aboutBtn);

aboutBtn.addEventListener('click', () => {
  aboutSection.hidden = !aboutSection.hidden;
});
feat(dom): toggle visibility of About section

// Toggle Featured Project section
const projectsSection = document.querySelector('#projects');
const projectsBtn = document.createElement('button');
projectsBtn.textContent = 'Toggle Projects';
projectsSection.before(projectsBtn);

projectsBtn.addEventListener('click', () => {
  projectsSection.hidden = !projectsSection.hidden;
});
feat(dom): toggle visibility of Featured Project section

// Toggle Contact section
const contactSection = document.querySelector('#contact');
const contactBtn = document.createElement('button');
contactBtn.textContent = 'Toggle Contact';
contactSection.before(contactBtn);

contactBtn.addEventListener('click', () => {
  contactSection.hidden = !contactSection.hidden;
});
feat(dom): toggle visibility of Contact section

// Handle contact form submission with feedback
const contactForm = document.querySelector('#contact form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // stop actual submission

    alert('Thank you! Your message has been received.');

    contactForm.reset();
  });
}
feat(dom): handle contact form submission with feedback

// Reusable toggle function
function addToggleButton(sectionId, buttonLabel) {
  const section = document.querySelector(sectionId);
  if (!section) return;

  const btn = document.createElement('button');
  btn.textContent = buttonLabel;
  section.before(btn);

  btn.addEventListener('click', () => {
    section.hidden = !section.hidden;
  });
}

// Apply reusable function
addToggleButton('#skills', 'Toggle Skills');
addToggleButton('#about', 'Toggle About');
addToggleButton('#projects', 'Toggle Projects');
addToggleButton('#contact', 'Toggle Contact');
refactor(dom): extract section toggle logic into reusable function



