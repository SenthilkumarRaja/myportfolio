const sun = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 22H16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.5" d="M5 19H19" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 16H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.5" d="M12 6C8.68629 6 6 8.68629 6 12C6 13.5217 6.56645 14.911 7.5 15.9687H16.5C17.4335 14.911 18 13.5217 18 12C18 8.68629 15.3137 6 12 6Z" stroke="#ffffff" stroke-width="1.5"></path> <path opacity="0.5" d="M12 2V3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M22 12L21 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M3 12L2 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M19.0708 4.92969L18.678 5.32252" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M5.32178 5.32227L4.92894 4.92943" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`
const moon = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16C22.75 16.4142 22.4142 16.75 22 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z" fill="#000a29"></path> <path opacity="0.5" d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19Z" fill="#000a29"></path> <path opacity="0.5" d="M12 2C6.47715 2 2 6.47715 2 12C2 13.4222 2.2969 14.7751 2.83209 16H21.1679C21.7031 14.7751 22 13.4222 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2Z" fill="#000a29"></path> <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="#000a29"></path> <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="#000a29"></path> </g></svg>`

   function toggleTheme() {
      const body = document.body;
      const themeIcon = document.querySelector('.theme-icon');

      if (body.getAttribute('data-theme') === 'light') {
         body.removeAttribute('data-theme');
         themeIcon.innerHTML = sun;

         localStorage.setItem('theme', 'dark');
      } else {
         body.setAttribute('data-theme', 'light');
         themeIcon.innerHTML = moon;
         localStorage.setItem('theme', 'light');
      }
   }

   // Load saved theme
   document.addEventListener('DOMContentLoaded', function () {
      const savedTheme = localStorage.getItem('theme');
      const themeIcon = document.querySelector('.theme-icon');
      const themeText = document.querySelector('.theme-text');

      if (savedTheme === 'light') {
         document.body.setAttribute('data-theme', 'light');
         themeIcon.innerHTML = moon;
      } else {
         // Default to dark mode
         document.body.removeAttribute('data-theme');
         themeIcon.innerHTML = sun;
      }
   });


   // Theme Toggle functionality
   // function toggleTheme() {
   //     const body = document.body;
   //     const themeIcon = document.querySelector('.theme-icon');
   //     const themeText = document.querySelector('.theme-text');

   //     if (body.getAttribute('data-theme') === 'light') {
   //         body.removeAttribute('data-theme');
   //         themeIcon.innerHTML = moon;
   //         //themeText.textContent = 'Dark';
   //         localStorage.setItem('theme', 'dark');
   //     } else {
   //         body.setAttribute('data-theme', 'light');
   //         themeIcon.innerHTML = sun;
   //         //themeText.textContent = 'Light';
   //         localStorage.setItem('theme', 'light');
   //     }
   // }

   // Load saved theme
   // document.addEventListener('DOMContentLoaded', function() {
   //     const savedTheme = localStorage.getItem('theme');
   //     const themeIcon = document.querySelector('.theme-icon');
   //     const themeText = document.querySelector('.theme-text');

   //     if (savedTheme === 'dark') {
   //         document.body.setAttribute('data-theme', 'dark');
   //         themeIcon.innerHTML = moon;
   //         //themeText.textContent = 'Light';
   //     } 
   //     else {
   //     // Default to dark mode
   //     document.body.removeAttribute('data-theme');
   //         themeIcon.innerHTML = sun;
   //         //themeText.textContent = 'Dark';
   //     }
   // });

   // Navigation functionality
   document.addEventListener('DOMContentLoaded', function () {
      const navPills = document.querySelectorAll('.nav-pill');
      const sections = document.querySelectorAll('.section');

      navPills.forEach(pill => {
         pill.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all pills and sections
            navPills.forEach(p => p.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked pill
            this.classList.add('active');

            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
         });
      });
   });

   // Modal functionality
   function openModal(modalId) {
      document.getElementById(modalId).style.display = 'block';
      document.body.style.overflow = 'hidden';
   }

   function closeModal(modalId) {
      document.getElementById(modalId).style.display = 'none';
      document.body.style.overflow = 'auto';
   }


   // Allow clicking on progress steps to navigate
   document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.progress-step').forEach(step => {
         step.addEventListener('click', function () {
            const targetStep = parseInt(this.getAttribute('data-step'));
            currentWizardStep = targetStep;
            updateWizardStep();
         });
      });
   });

   // Close modal with Escape key
   document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
         document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
         });
         document.body.style.overflow = 'auto';
      }
   });

   // Smooth scrolling for better UX
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
            target.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
            });
         }
      });
   });


   const selectTyped = document.querySelector('.typed');
   if (selectTyped) {
      let typed_strings = selectTyped.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
         strings: typed_strings,
         loop: true,
         typeSpeed: 100,
         backSpeed: 50,
         backDelay: 2000
      });
   }


   let currentIndex = 0;
   let currentGallery = [];

   // Attach to any gallery
   document.querySelectorAll('.gallery').forEach(gallery => {
      const images = gallery.querySelectorAll('img');
      images.forEach((img, index) => {
         img.addEventListener('click', function () {
            currentGallery = Array.from(images);
            currentIndex = index;
            openLightbox();
         });
      });
   });

   function openLightbox() {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = currentGallery[currentIndex].src;
      lightbox.style.display = 'flex';
   }

   function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
   }

   function nextImage() {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      document.getElementById('lightbox-img').src = currentGallery[currentIndex].src;
   }

   function prevImage() {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      document.getElementById('lightbox-img').src = currentGallery[currentIndex].src;
   }

   // Close when clicking backdrop
   document.getElementById('lightbox').addEventListener('click', function (e) {
      if (e.target === this) closeLightbox();
   });

   // Keyboard navigation
   document.addEventListener('keydown', function (e) {
      const lightbox = document.getElementById('lightbox');
      if (lightbox.style.display === 'flex') {
         if (e.key === 'ArrowRight') nextImage();
         if (e.key === 'ArrowLeft') prevImage();
         if (e.key === 'Escape') closeLightbox();
      }
   });


   // tab functionality
   document.querySelectorAll('.tab-btn').forEach(tab => {
   tab.addEventListener('click', () => {
      // Remove active class from all tabs and panels
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.project-panel').forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding project panel
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
   });
   });
