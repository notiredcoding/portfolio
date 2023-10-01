//Updatable For Border Bottom Nav Link
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

function setActiveLink(link) {
  navLinks.forEach((navLink) => {
    navLink.classList.remove('active');
  });
  link.classList.add('active');
}

function setActiveNavLink() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      const link = document.querySelector(`nav a[href="#${section.id}"]`);
      if (link) {
        setActiveLink(link);
      }
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
      setActiveLink(this);
    }
  });
});

window.addEventListener('scroll', setActiveNavLink);
window.addEventListener('load', setActiveNavLink);


//Responsive Menu
const bar = document.querySelector('.bar');
const nav = document.getElementById('nav');

bar.addEventListener('click', function () {

    nav.classList.toggle('active');
    bar.classList.toggle('active');
})


//Typing text function
const textElement = document.getElementById('typing-text');
const textsToType = ["Dimas Nur Wicaksono"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (textIndex < textsToType.length) {
        if (charIndex < textsToType[textIndex].length) {
            textElement.textContent += textsToType[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }
}

function erase() {
    if (charIndex > 0) {
        const currentText = textsToType[textIndex];
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex++;
        if (textIndex >= textsToType.length) {
            textIndex = 0;
        }
        setTimeout(type, 1000);
    }
}

type();

//Form Message to Google Excel Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbx5CWxlvwhlX86hDFt6WnmRSlq0llko6ZDUfPtbY9r6ca7hOBfyXPpMsyvQ6qIIoiOR/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Send Message Succesfully";
        setTimeout(function () {
          msg.innerText = '';
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
