
// define global variables
const navBar = document.querySelector('#navbar__list'); 
const sections = document.querySelectorAll('section'); 
const menuLinks = document.querySelectorAll('.menu__link'); 

// build navigation 
const navBuild = () => {

  // looping over all sections
  sections.forEach(section => {
    let buttons = document.createElement("li");
    const sectionID = section.id; 
    const sectionDataNav = section.dataset.nav;

    buttons.innerHTML = `<a class="menu__link" href="#${sectionID}">${sectionDataNav}</a>`;
    navBar.appendChild(buttons);
  });

};

navBuild();



// create function for smooth scroll effect to each section
const smoothScroll = (evt) => {
  evt.preventDefault();
  const dataLink = evt.target.getAttribute('href');
  const sectionTarget = document.querySelector(dataLink);
  window.scrollTo({
    top: sectionTarget.offsetTop,
    behavior: 'smooth',
  });
};

// Scroll to section on link click
const buttonLinks = document.querySelectorAll('.menu__link');
buttonLinks.forEach((button) => button.addEventListener('click', smoothScroll));


// Use IntersectionObserver to active classes in viewport
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px 0px -150px 0px",
};


let makeActive = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      menuLinks.classList.add('active');
      sections.classList.add('your-active-class');
    } else if(!entry.isIntersecting) {
      menuLinks.classList.remove('active');
      sections.className.remove('your-active-class');
    };
  });
});

sections.forEach(section => {
  makeActive.observe(section);
});

