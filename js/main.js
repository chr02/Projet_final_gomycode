var headerEl = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', function() {
    window.scrollY > 0 ? headerEl.classList.add('header-bg') : headerEl.classList.remove('header-bg');
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function ActivateNav(sectionServices, sectionContact, navElement) {
    var home = navElement[0].children[0];
    var services = navElement[0].children[1];
    var contact = navElement[0].children[2];
    if(isElementInViewport(sectionServices)){
        home.children[0].classList.remove("active");
        contact.children[0].classList.remove("active");
        services.children[0].classList.add("active");
    }

    if(isElementInViewport(sectionContact))
    {
        home.children[0].classList.remove("active");
        services.children[0].classList.remove("active");
        contact.children[0].classList.add("active");
    }
    if(!isElementInViewport(sectionServices) && !isElementInViewport(sectionContact)){
      contact.children[0].classList.remove("active");
      services.children[0].classList.remove("active");
      home.children[0].classList.add("active");
    }
  }
  window.addEventListener('scroll', function(){
    var sectionServices = document.getElementsByClassName('services')[0];
    var contact = document.getElementsByClassName('contact')[0];
    var nav = document.getElementsByClassName('navbar');
    ActivateNav(sectionServices, contact, nav);
  });


var navBar = document.getElementsByClassName('navbar');
var navServices = navBar[0].children[1];
navServices.addEventListener('click', function(){
  var home = navBar[0].children[0];
  var contact = navBar[0].children[2];
  home.children[0].classList.remove("active");
  contact.children[0].classList.remove("active");
  navServices.children[0].classList.add("active");
})


