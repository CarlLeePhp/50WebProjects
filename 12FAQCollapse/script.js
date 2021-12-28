// const faqs = document.querySelectorAll('.faq');

// faqs.forEach((faq) => {
//     let btnDown = faq.querySelector('.fa-chevron-down')
//     let btnTimes = faq.querySelector('.fa-times')

//     btnDown.addEventListener('click', () => {
//         faq.classList.add('active')
//     })

//     btnTimes.addEventListener('click', () => {
//         faq.classList.remove('active')
//     })
// })

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})