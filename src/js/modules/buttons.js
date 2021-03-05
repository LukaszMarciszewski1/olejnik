
function links() {
  const links = document.querySelectorAll('.scroll-el');

  function navbarLinkClick(e) {
    e.preventDefault();
    smoothScroll(e)
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href') === '#' ? 'header' : e.currentTarget.getAttribute('href');

    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  links.forEach(link => link.addEventListener('click', navbarLinkClick));
}

function listInfo() {
  const buttons = document.querySelectorAll('.support__info-show')
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      btn.classList.toggle("support__info-show--active");
      const content = btn.nextElementSibling;
      if (btn.classList.contains("support__info-show--active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = 0;
      }

    });
  });
}

function labelsCardContent() {
  const openButtons = document.querySelectorAll('.open-card-content')
  const closeButtons = document.querySelectorAll('.close-card-content')

  openButtons.forEach(open => {
    open.addEventListener('click', () => {
      open.classList.add('open-card--active')
      const content = open.nextElementSibling;
      if (open.classList.contains('open-card--active')) {
        content.nextElementSibling.classList.add('close-card-content--active')
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.borderTop = '1px solid rgba(167, 167, 167, 1)'
      } else {
        content.style.maxHeight = 0;
      }
    })
  })

  closeButtons.forEach(close => {
    close.addEventListener('click', (e) => {
      const content = close.previousElementSibling
      content.style.maxHeight = 0;
      content.style.borderTop = 'none'
      content.nextElementSibling.classList.remove('close-card-content--active')
      openButtons.forEach(open => {
        open.classList.remove('open-card--active');
      })
    })
  })

  function navbarLinkClick(e) {
    smoothScroll(e)
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');

    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
    })
  }
  closeButtons.forEach(btn => btn.addEventListener('click', navbarLinkClick))
}

function servicesList() {
  const btn = document.querySelector('.header-subpage__show-list')
  const content = document.querySelector('.services-subpage')

  const open = () => {
        btn.classList.toggle("active-list");
        if (btn.classList.contains("active-list")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
        else {
          content.style.maxHeight = 0;
        }
    }
btn.addEventListener('click', open)
}

//sidebar-active-link------------>
function servicesActiveLink(){
  const nameCategory = document.querySelector('.header-subpage__h2');
  const servicesLinks = [...document.querySelectorAll('.services__icons-item')];
  window.addEventListener('load', () => {
      const activeLink = servicesLinks.find(link => link.dataset.option === nameCategory.dataset.option)
      if (activeLink) {
        activeLink.classList.add('services__icons-item-link--active')
      } else {
        activeLink.classList.remove('services__icons-item-link--active')
      }
      activeLink.addEventListener('click', (e) => {
        e.preventDefault()
      })
    });
}

export const scrollLinks = () => {
  links();
}
export const showInfo = () =>{
  listInfo()
}
export const labelsCard = () => {
  labelsCardContent()
}
export const servicesOpenList = () => {
  servicesList()
}
export const activeLink = () => {
  servicesActiveLink()
}