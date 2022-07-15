'use strict'
const navbar = document.querySelector('.container-2')
const navbarOffsetTop = navbar.offsetTop
const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bar-wrapper')
const progressBarPercents = [97,92,70,50,40,30,98,90,97]
const slider = document.querySelectorAll('.project')
const right = document.querySelector('.btn-primary-right')
const left = document.querySelector('.btn-primary-left')

let i=1
right.addEventListener('click',()=>{
    if(i == slider.length -1){
        i=1
    }
    else if(i==0){
        i=1
    }
    console.log(i)
    slider[i-1].classList.remove('active')
    slider[i].classList.add('active')
    console.log(slider[i])
    i++

})

left.addEventListener('click',()=>{
    if(i==0){
        console.log(i)
        i=1
    }
    slider[i+1].classList.remove('active')
    slider[i].classList.add('active')
    i--
    

})


// const recent = document.querySelector('.project.active')
// console.log(recent)
// console.log(slider)
// slider.nextElementSibling.classList.add('active')




// setInterval(()=>{
// i++
// const recent = document.querySelector('.project.active')
// recent.classList.remove('active')

// if (i > slider.length) {
//     slider[0].classList.add('active')
    
//     i = 0
// }
// else {
//     slider[i].classList.add('active')
// }

// },1000)



    
   

window.addEventListener('scroll',()=>{
    // console.log(window.pageYOffset,navbar.offsetTop)
    if(window.pageYOffset >= navbarOffsetTop){
       
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky')
    }
    sections.forEach((section,i)=>{
       
       
        if(window.pageYOffset >= section.offsetTop - 10 ){
            navbarLinks.forEach(navbarLink =>{
                navbarLink.classList.remove('change')
            })
            // console.log(navbarLinks[i])
            navbarLinks[i].classList.add('change')
            
            
        }

    })
    // console.log(progress.offsetTop,"l")
    if(window.pageYOffset+ window.innerHeight >= progress.offsetTop){
        document.querySelectorAll('.progress-bar-percentage').forEach((e,i)=>{
            e.style.width = `${progressBarPercents[i]}%`;
            e.previousElementSibling.firstElementChild.textContent =
              progressBarPercents[i];
            
        })

    }
})





