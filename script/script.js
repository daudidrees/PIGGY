const message = document.querySelectorAll('.faq-content');
const showMessage = document.querySelectorAll('.faq-desc-wrapper');
const faqBtn = document.querySelectorAll('#faq-btn');
const personContent = document.querySelectorAll(".person__content");
const personSecondContent = document.querySelectorAll(".person__content_2");
const personDesc = document.querySelectorAll('.person__desc');
const hamburger = document.querySelector(".hamburger-icon");
const mblNav = document.querySelector('.mobile-nav')
const navCross = document.querySelector('.nav-cross-btn')

const circleChart = document.getElementById('circle-chart')
const circleChartCircles = document.querySelectorAll('[data-chart-circle]')

const observer = new IntersectionObserver((entries, observer) => {
  const [{ isIntersecting, target }] = entries

  if (isIntersecting && target === circleChart) {
    observer.disconnect()
    circleChartCircles.forEach(circle => {
      circle.setAttribute('stroke-dasharray', circle.getAttribute('data-chart-dasharray'))
    })
  }
}, {
  threshold: 0.3
})

observer.observe(circleChart)

document.querySelector('.nav-links').addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.classList.contains('nav-item')){
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
});

function hideAllFaqs (faqs) {
  faqs.forEach(faq => {
    faq.lastElementChild.textContent = '+'
    faq.nextElementSibling.classList.remove('show')
  })
}

message.forEach(faq => {
  faq.addEventListener('click', function () {
    const el = this.nextElementSibling
    const signEl = this.lastElementChild

    if (el.classList.contains('show')) {
      hideAllFaqs(message)
    } else {
      hideAllFaqs(message)
      el.classList.add('show')
      signEl.textContent = '-'
    }
  })
})

personContent.forEach((personEl, index) => {
  personEl.addEventListener('click', () => {
    const personDescEl = personDesc[index]
    if (!personDescEl) return
    if (!personDescEl.classList.contains('hidden')) {
      personDescEl.classList.add('hidden')
    } else {
      personDesc.forEach(el => el.classList.add('hidden'))
      personDescEl.classList.remove('hidden')
    }
  })
})

// function hideAllDescriptions (descriptions) {
//   descriptions.forEach(description => {
//     const descEl = description.querySelector('.person__desc')
//     if (!descEl) return
//     descEl.classList.add('hidden')
//   })
// }

// personContent.forEach(el => {
//   el.addEventListener('click', function() {
//     document.getElementById("spaces").style.marginBottom = "250px";
//     const descEl = this.querySelector('.person__desc')

//     if (!descEl) return

//     if (descEl.classList.contains('hidden')) {
//       hideAllDescriptions(personContent)
//       descEl.classList.remove('hidden')
//     } else {
//       hideAllDescriptions(personContent)
//       document.getElementById("spaces").style.marginBottom = "0px";
//     }
//   })
// })

// second desc

// function hideAllDescriptions_2 (descriptions2) {
//   descriptions2.forEach(description2 => {
//     const descEl2 = description2.querySelector('.person__desc_2')
//     if (!descEl2) return
//     descEl2.classList.add('hidden')
//   })
// }


// personSecondContent.forEach(el => {
//   el.addEventListener('click', function() {
//     document.getElementById("extraspaces2").style.marginBottom = "250px";
//     const descEl2 = this.querySelector('.person__desc_2')

//     if (!descEl2) return

//     if (descEl2.classList.contains('hidden')) {
//       hideAllDescriptions_2(personSecondContent)
//       descEl2.classList.remove('hidden')
//     } else {
//       hideAllDescriptions_2(personSecondContent)
//       document.getElementById("extraspaces2").style.marginBottom = "0px";
//     }
//   })
// })

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
}, 1500);