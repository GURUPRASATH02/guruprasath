const jobTitles = [
  "Software Developer (Java/Python)",
  "Full Stack Web Developer",
  "Flutter Mobile Developer with REST API"
];

const staticText = "I'm a ";
const textElement = document.getElementById("dynamic-text");

let jobIndex = 0;
let charIndex = 0;

function typeJobTitle() {
  const currentJob = jobTitles[jobIndex];
  if (charIndex <= currentJob.length) {
    textElement.textContent = staticText + currentJob.slice(0, charIndex);
    charIndex++;
    setTimeout(typeJobTitle, 80); // typing speed
  } else {
    setTimeout(() => {
      jobIndex = (jobIndex + 1) % jobTitles.length;
      charIndex = 0;
      typeJobTitle();
    }, 2000); // wait before changing to next job title
  }
}

typeJobTitle();

document.addEventListener('DOMContentLoaded', () => {
  // Previous existing code...

  // Number counter animation
  function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.textContent = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }

  // Intersection Observer for cards
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const card = entry.target;
              card.classList.add('visible');
              
              // Animate project counter
              if (card.querySelector('.project-counter')) {
                  const counter = card.querySelector('.project-counter');
                  animateValue(counter, 0, 8, 2000);
              }

              // Animate skills list
              if (card.querySelector('.skills-list')) {
                  const listItems = card.querySelectorAll('.skills-list li');
                  listItems.forEach((item, index) => {
                      setTimeout(() => {
                          item.style.opacity = 1;
                          item.style.transform = 'translateY(0)';
                      }, index * 200);
                  });
              }
          }
      });
  }, { threshold: 0.1 });

  // Observe all cards
  document.querySelectorAll('.card').forEach(card => {
      observer.observe(card);
  });
});