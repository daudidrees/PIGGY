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
      faq.nextElementSibling.classList.remove('show')
  })
}

message.forEach(faq => {
  faq.addEventListener('click', function () {
    const el = this.nextElementSibling

    if (el.classList.contains('show')) {
      hideAllFaqs(message)
    } else {
      hideAllFaqs(message)
      el.classList.add('show')
    }
  })
})

function hideAllDescriptions (descriptions) {
  descriptions.forEach(description => {
    const descEl = description.querySelector('.person__desc')
    if (!descEl) return
    descEl.classList.add('hidden')
  })
}

personContent.forEach(el => {
  el.addEventListener('click', function() {
    const descEl = this.querySelector('.person__desc')

    if (!descEl) return

    if (descEl.classList.contains('hidden')) {
      hideAllDescriptions(personContent)
      descEl.classList.remove('hidden')
    } else {
      hideAllDescriptions(personContent)
    }
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

// Slider

var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);