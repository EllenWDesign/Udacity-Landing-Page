const navBar = document.querySelector('#navbar__list');
// sections global var
const sections = document.querySelectorAll('section');


const navBuild = () => {

  // looping over all sections
  sections.forEach(section => {
    let buttons = document.createElement("li");
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    buttons.innerHTML = `<a class="menu__link" href="#${sectionID}">${sectionDataNav}</a>`;
    navBar.appendChild(buttons);
  });
  // append all elements to the navigation



};

navBuild();



// Scroll to anchor ID using scrollTO event

// Scroll to anchor ID using scrollTO event
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


const makeActive = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    entry.target.classList('your-active-class')
  });
});

sections.forEach(section => {
  makeActive.observe(section);
});
