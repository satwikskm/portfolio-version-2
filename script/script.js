'use strict'
let introButton = document.getElementById('info')
let projectButton = document.getElementById('project')
let resumeButton = document.getElementById('resume')
let blogButton = document.getElementById('blog')
let contactButton = document.getElementById('contact')
let closeInfoButton=document.getElementById('close')
let closeProjectButton=document.getElementById('close-project')

introButton.addEventListener('click',()=>{
    document.querySelector('.Infocontainer').classList.add('active')
    document.querySelector('.skills').classList.add('active')
    document.getElementById('info').style.color="blue"
        document.getElementById('intro').style.display="block"

    console.log("in")
})

closeInfoButton.addEventListener('click',()=>{
    console.log(document.querySelector('.Infocontainer'))
    document.querySelector('.Infocontainer').classList.remove('active')
    document.querySelector('.skills').classList.remove('active')
    document.getElementById('info').style.color="black"
    document.getElementById('intro').style.display="none"
})

projectButton.addEventListener('click',()=>{
    document.querySelector('.Infocontainer').classList.add('active')
    document.querySelector('.skills').classList.add('active')
    document.getElementById('project').style.color="blue"
    document.getElementById('projects').style.display="block"

    console.log("in")
})

closeProjectButton.addEventListener('click',()=>{
    console.log(document.querySelector('.Infocontainer'))
    document.querySelector('.Infocontainer').classList.remove('active')
    document.querySelector('.skills').classList.remove('active')
    document.getElementById('project').style.color="black"
    document.getElementById('projects').style.display="none"
})





