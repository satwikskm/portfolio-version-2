'use strict'
const navbar = document.querySelector('.container-2')
const navbarOffsetTop = navbar.offsetTop
const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bar-wrapper')
const progressBarPercents = [97,92,70,50,40,30,98,90,97]

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
            console.log(navbarLinks[i])
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





