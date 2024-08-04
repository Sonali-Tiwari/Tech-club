
// Hamburger Icon 


const Hamburger=document.querySelector(".hamburger");
const Header=document.querySelector(".header")
const slider=document.querySelector('.things_do_box')
const slide=document.querySelector('.things_box')
const Main=document.querySelector('.main')

Hamburger.addEventListener("click",()=>{
    Hamburger.classList.toggle("active")
    Header.classList.toggle("active")
})

const boxes=document.querySelectorAll(".navlink")
boxes.forEach(e=>
e.addEventListener("click",()=>{ 
        Hamburger.classList.remove("active")
        Header.classList.remove("active")
    }))

const HamburgerJoinBtn=document.querySelector(".hamb-join")
HamburgerJoinBtn.addEventListener("click",()=>{
    Hamburger.classList.remove("active")
    Header.classList.remove("active")
})

    //Link Scroller

    scrollTo=(element)=>{
        window.scroll({
            behavior:'smooth',
            left:0,
            top:element.offsetTop
        })
        console
    }
//    const Link1=document.querySelector('.link-5').addEventListener('click', ()=> {scrollTo(document.querySelector('.about'))
    // })  


    // const Link2=document.querySelector('.link-5').addEventListener('click', ()=> {scrollTo(document.querySelector('.about'))
//  })  

 const Link3=document.querySelector('.link-3').addEventListener('click', ()=> {scrollTo(document.querySelector('.about'))
 })  

 const Link4=document.querySelector('.link-4').addEventListener('click', ()=> {scrollTo(document.querySelector('.things_do'))
 })  

 const Link5=document.querySelector('.link-5').addEventListener('click', ()=> {scrollTo(document.querySelector('.family'))
 })  



 const NavAboutLink=document.querySelector('.nav-about').addEventListener('click', ()=> {scrollTo(document.querySelector('.about'))
})  



 //Join Button Scroller
 
 const HambJoinButton=document.querySelector('.hamb-join').addEventListener('click', ()=> {scrollTo(document.querySelector('.joi'))
 })  

 const JoinButton=document.querySelector('.nav-Btn').addEventListener('click', ()=> {scrollTo(document.
    querySelector('.joi'))
    })  

/*
const num1=document.querySelector('.n-1')
const num2=document.querySelector('.n-2')
const num3=document.querySelector('.n-3')
const num4=document.querySelector('.n-4')
const num5=document.querySelector('.n-5')

num1.addEventListener('click',()=>{
    slider.scrollLeft =60

})
num2.addEventListener('click',()=>{
    slider.scrollLeft =480
    // slider.scrollLeft=slide.scrollWidth
})
num3.addEventListener('click',()=>{
    slider.scrollLeft =870
    // slider.scrollLeft=slide.scrollWidth
})
num4.addEventListener('click',()=>{
    slider.scrollLeft =1200
    // slider.scrollLeft=slide.scrollWidth
})
num5.addEventListener('click',()=>{
    slider.scrollLeft =2000
    // slider.scrollLeft=slide.scrollWidth
})
 */ 

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });






// Our Family




                                        // HERO IMAGE ANIMATION
