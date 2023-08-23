import LottieAnimations from './LottieAnimations.js';
import Accordion from './Accordion.js';



document.addEventListener('DOMContentLoaded', function () {    
  startPage ();    
  swup.hooks.on('animation:in:end', () => {
    startPage();    
  });  
});


function startPage() {

  handleBG();  
  handleLogo();
  checkContactHash();
  contactListeners();
  observeElements();
  createAccordions();
  handleNewsdock();
  handleLottie();

  const fvCut = document.querySelectorAll('.section-fv-cut');
  const tarCase = document.querySelector('.case');
  if (isUserAtTop() && tarCase) {    
    tarCase.classList.add('initial');
  }
  const fvCutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tarCase.classList.add('no-margin');
        document.querySelector('.wrapper-geometry').classList.add('transitional');
      }
    });
  });
  fvCut.forEach(fvCutElement => {
    fvCutObserver.observe(fvCutElement);
  });   
} //startPage


function checkContactHash() {    
  const contactAnchor = document.getElementById("contact");
  if(window.location.hash === "#contact") {
    contactAnchor.classList.add('active');
  }
}


function contactListeners() {  
  const contactForm = document.querySelector('.form');
  const btnsContact = document.querySelectorAll('.btn-contact');
  const btnsClose = document.querySelectorAll('.btn-close');  
  btnsContact.forEach(btnContact => {
    contactBtnToggle(btnContact);
  });  
  btnsClose.forEach(btnClose => {
    contactBtnToggle(btnClose);
  });
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (contactForm.classList.contains('active')) {
        contactForm.classList.remove('active');
      }
    }
  });  
}


function contactBtnToggle(e) {
  e.addEventListener('click', () => {
    if (contactForm.classList.contains('active')) {
      contactForm.classList.remove('active');
    } else {
      contactForm.classList.add('active');
    }
  });
}


function isUserAtTop() {
  return window.scrollY === 0;
}


function observeElements() {
  handleObservers(document.querySelectorAll('.mw-svg'), {unobserve: true}, 0, 'active');
  handleObservers(document.querySelectorAll('.bg-geometry'), {unobserve: true}, 0, 'active');
  handleObservers(document.querySelectorAll('.popin'), {unobserve: true}, 100, 'active');
  handleObservers(document.querySelectorAll('.popin2'), {unobserve: true}, 800, 'active');
  handleObservers(document.querySelectorAll('.item-news-ichiran'), {unobserve: true}, 100, 'active');
  handleObservers(document.querySelectorAll('.news-header'), {unobserve: true}, 100, 'active');
  handleReporterObservers(document.querySelectorAll('.feature-list'), document.querySelector('.feature-wrapper'), {unobserve: false}, 100, 'active');  
}

function handleObservers(target, options, timeout, classToAdd) {   
  if(!target) {
    return;
  } 
  const handleIntersection = entry => {
    if(!entry.isIntersecting) {
      return;
    }        
    addClassAfterTimeout(entry.target, timeout, classToAdd);
    if(options.unobserve) {           
      observer.unobserve(entry.target);
    }
  }  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(handleIntersection);
  }, { threshold: 0.4 });
  
  target.forEach(element => {
    observer.observe(element);
  });
}

function handleReporterObservers(reporter, tarObs, options, timeout, classToAdd) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {        
        tarObs.classList.add(classToAdd);
      } else {        
        tarObs.classList.remove(classToAdd);
      }
    });
  });
  reporter.forEach(element => {
    observer.observe(element);
  })
}


function addClassAfterTimeout(element, timeout, classToAdd) {
  setTimeout(() => {
    element.classList.add(classToAdd);
  }, timeout);
}

function createAccordions() {
  if(!document.querySelector('details')) {
    return;
  }
  document.querySelectorAll('details').forEach((e) => {
    new Accordion(e);
  });
}

function handleBG() {
  const geometryBox = document.querySelector('.bg-geometry');
  const concernObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        geometryBox.classList.add('change-color');
        entry.target.querySelector('h2 .text-white').style.color = 'black';
        entry.target.querySelector('h2 .text-ltg').style.color = 'black';
        entry.target.querySelector('.btn-contact').classList.add('change-color');
        document.querySelector('html').style.background = '#e1ffe1';
      } else {
        geometryBox.classList.remove('change-color');
        entry.target.querySelector('h2 .text-white').style.color = '';
        entry.target.querySelector('h2 .text-ltg').style.color = '';
        entry.target.querySelector('.btn-contact').classList.remove('change-color');
        document.querySelector('html').style.background = '';
      }
    });
  });
  const concernBox = document.querySelectorAll('.concern');
  concernBox.forEach(concernBoxElement => {
    concernObserver.observe(concernBoxElement);
  });
}

function handleLogo() {
  const logoColor = document.querySelector('#logo-color');
  const logoSwitches = document.querySelectorAll('.swlogo');  
  if(!document.querySelector('section.fv')) {
    logoColor.style.opacity = "0%";    
    return;
  }
  const obsLogoSwitches = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('swlogo-w')) {
          logoColor.style.opacity = "0%";
        }
        if (entry.target.classList.contains('swlogo-b')) {          
          logoColor.style.opacity = "100%";
        }
      }
    });
  });
  logoSwitches.forEach(logoSwitch => {
    obsLogoSwitches.observe(logoSwitch);
  });
  if(!isUserAtTop()) {
    logoColor.style.opacity = "100%";
  }
}

function handleLottie() {
  if(document.querySelector('#solution01')) {
    const solution01 = new LottieAnimations(document.querySelector('#solution01'));
    solution01.handleFetch('01_ichiran.json');  
  } 
  if(document.querySelector('#solution02')) {
    const solution02 = new LottieAnimations(document.querySelector('#solution02'));
    solution02.handleFetch('02_mail.json');
  }
  if(document.querySelector('#solution03')) {
    const solution03 = new LottieAnimations(document.querySelector('#solution03'));
    solution03.handleFetch('03_hogo.json');
  }
}

function handleNewsdock() {  
  const wrapperNewsDock = document.querySelector('.wrapper-newsdock');
  if(wrapperNewsDock) {
    setTimeout(() => {
      wrapperNewsDock.classList.add('active');
    }, 750);
    let prevScrollPos;
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.pageYOffset;      
      if (currentScrollPos > (prevScrollPos + 10)) {
        wrapperNewsDock.classList.remove('active');
      } else if (currentScrollPos < prevScrollPos) {
        wrapperNewsDock.classList.add('active');
      }      
      prevScrollPos = currentScrollPos;
    });
  }
  const swiperListNewsdock = new Swiper(document.querySelector('.swiper-list-newsdock'), {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-list-newsdock-next',
        prevEl: '.swiper-list-newsdock-prev',
    },
  });
}