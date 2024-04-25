// menu


function toggleMenu(element) {
    if (window.innerWidth < 930) {
      element.classList.toggle('change');
      var menuLinks = document.querySelector('.menu-links');
      menuLinks.classList.toggle('show');
  
      document.body.style.overflow = (menuLinks.classList.contains('show')) ? 'hidden' : 'auto';
    }
  }
  
  document.querySelectorAll('.menu-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      var menuButton = document.querySelector('.menu');
      if (window.innerWidth < 930) {
        toggleMenu(menuButton);
      }
    });
  })
  
  function toggleActive(event) {
    var links = document.querySelectorAll('.menu-links a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  }
  
  // function for moving the underline according to the section the user hovers
  
  window.addEventListener('scroll', function() {
    var sections = this.document.querySelectorAll('#hero-section, #about-atz-section, #atz-specializari-section, #acreditari-atz-section, #intrebari-frecvente-section, #informatii-contact-section, #recenzii-section');
    var scrollPosition = window.scrollY;
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        var link = document.querySelector('a[href="#' + section.id + '"]');
        toggleActive({target: link});
      }
    });
  });
  
  // function for changing the background color of the header and its contents depending on the position of the user on the website
  
  function adjustHeaderStyles() {
    var header = document.querySelector('.header');
    var logo = document.querySelector('#logo');
    var menuLinks = document.querySelectorAll('.menu-links a');
    var menuBars = document.querySelectorAll('.menu .bar');
    var heroSection = document.querySelector('#hero-section');
  
    if (window.scrollY > heroSection.clientHeight) {
        header.style.backgroundColor = '#f2f2f2';
        logo.style.filter = 'brightness(0)';
        menuLinks.forEach(function(link) {
            link.style.color = '#1e1e1e';
        });
        menuBars.forEach(function(bar) {
            bar.style.backgroundColor = '#1e1e1e';
        });
    } else {
        header.style.backgroundColor = 'transparent';
        logo.style.filter = 'brightness(1)';
        menuLinks.forEach(function(link) {
            link.style.color = '#f2f2f2';
        });
        menuBars.forEach(function(bar) {
            bar.style.backgroundColor = '#f2f2f2';
        });
    }
  }
  
  // Listen for scroll events to adjust header styles
  window.addEventListener('scroll', function() {
    adjustHeaderStyles();
  });