const message = document.querySelectorAll('.faq-content');
const showMessage = document.querySelectorAll('.faq-desc-wrapper');
const faqBtn = document.querySelectorAll('#faq-btn');
const personContent = document.querySelectorAll(".person__content");
const personDesc = document.querySelectorAll('.person__desc');
const hamburger = document.querySelector(".hamburger-icon");
const mblNav = document.querySelector('.mobile-nav')
const navCross = document.querySelector('.nav-cross-btn')

document.querySelector('.nav-links').addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.classList.contains('nav-item')){
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
});


function hideAllFaqs (faqs) {
  faqs.forEach(faq => {
    if(!faq.nextElementSibling.classList.toggle('show')) {
      faq.nextElementSibling.classList.add('show')
    } else {
      faq.nextElementSibling.classList.remove('show')
    }
  })
}

message.forEach(faq => {
  faq.addEventListener('click', function () {
    hideAllFaqs(message)
    const active = this.nextElementSibling.classList.toggle('show')
  })
})

personContent.forEach(el => {
  el.addEventListener('click', function() {
    personDesc.forEach(el => {
      if(el.classList.contain('hidden')) {
      }
    })
  })
})

// personContent.forEach(el =>{
//   el.addEventListener("click", function() {
//     personDesc.classList.remove('hidden');
// })


// for (let i = 0; i < personContent.length; i++) {
//   personContent[i].addEventListener("click", function() {
//     personDesc.classList.remove('hidden');
//   })
// }

hamburger.addEventListener('click', function(e) {
  mblNav.classList.toggle('mobile-nav');
})

navCross.addEventListener('click', function(e) {
  mblNav.classList.add('mobile-nav')
})