// track when some leave your site  ======================================

let docTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'come Back :(';
});
window.addEventListener('focus', () => {
  document.title = docTitle;
});
// track when some leave your site  ======================================

// tracking Muse animation  ======================================
// Set up the canvas
const canvas = document.getElementById('spacedWaterRippleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set up animation parameters
const circles = [];
const maxCircles = 10; // Maximum number of circles in the ripple
const addCircleFrequency = 30; // Add a circle every 30 frames

// Frame counter
let frameCount = 0;

// Update canvas size on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  circles.length = 0; // Clear existing circles on resize
});

// Update mouse position on mousemove
window.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  // Add a new ripple circle to the animation at a reduced frequency
  if (frameCount % addCircleFrequency === 0) {
    circles.push({
      x: clientX,
      y: clientY,
      size: 1,
      opacity: 1,
    });
  }

  // Keep the ripple within the maximum limit
  if (circles.length > maxCircles) {
    circles.shift(); // Remove the oldest circle
  }

  // Increment the frame counter
  frameCount++;
});

// Animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each circle in the ripple
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];

    // Reduce opacity over time
    circle.opacity -= 0.01;

    // Remove circles with zero opacity
    if (circle.opacity <= 0) {
      circles.splice(i, 1);
      i--;
      continue;
    }

    // Draw the ripple circle with varying opacity and only a border
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
    ctx.strokeStyle = `rgba(30, 41, 59, ${circle.opacity})`;
    ctx.lineWidth = 2; // Adjust the border width as needed
    ctx.stroke();

    // Increase the size for the next frame
    circle.size += 2;
  }

  // Repeat the animation
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
// tracking Muse animation  ======================================

// Start of the Header toggle ======================================

let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function (e) {
  document
    .querySelector('body')
    .classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
});
// End of the Header toggle ======================================

// tracking sections start ======================================

// Active Link State on Scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a');
// Get All Section
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
  const scrollPos = window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (
          section.getAttribute('id') ===
          link.getAttribute('href').substring(1)
        ) {
          link.classList.add('active');
        }
      });
    }
  });
});

// tracking sections start ======================================

// Typing Effect

let typed = new Typed('.auto-input', {
  strings: [
    'Front-End Developer!',
    'Freelancer!',
    'UI Designer',
    'Artist',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

// Projects Slider start ======================================

document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.slide__item');
  document.getElementById('slide').appendChild(lists[0]);
};
document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.slide__item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
};

// Projects Slider end ======================================
