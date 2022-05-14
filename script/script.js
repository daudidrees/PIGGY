const message = document.querySelector('.faq-content');
const showMessage = document.querySelector('.faq-desc-wrapper');
const faqBtn = document.querySelector('#faq-btn');
const personContent = document.querySelector(".person__content");
const personDesc = document.querySelector('.person__desc')


message.addEventListener("click", function() {
  showMessage.classList.toggle('show');
  if(showMessage.classList.contains("show")){
    faqBtn.textContent = "-"
  } else {
    faqBtn.textContent = "+"
  }
});

document.querySelector('.nav-links').addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.classList.contains('nav-item')){
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
});

personContent.addEventListener("click", function() {
  personDesc.classList.toggle('person-desc-active');
})
