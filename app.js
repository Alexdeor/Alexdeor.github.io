// Moves the sections from left to right
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('showText')
    } else{
      entry.target.classList.remove('showText')
    }
  })
})

const hiddenItems = document.querySelectorAll('.hiddenText');
hiddenItems.forEach((el) => observer.observe(el));

  //Displays the cards content info        
const btn = document.querySelectorAll('.button');
const cardContent = document.querySelectorAll('.card-content');
const card = document.querySelectorAll('.card');
const project = document.querySelector('.project-container');
const mql = window.matchMedia("(min-width: 1250px))");

//The content will display when the card is targeted
function moveIn(x){
  if(x.matches){
project.addEventListener('mousemove', (e)=>{
  for (let i = 0; i< card.length; i++){ 
    if(e.target === card[i] || e.target === cardContent[i]){
      cardContent[i].style.transform = "translateY(0%)" ;
      cardContent[i].style.transition = "transform 500ms ease";
      e.preventDefault();
    }   
  }
}) 
moveOut();
}
else{
  btn.forEach(e =>{e.addEventListener('click', ()=> {window.location.reload();})
});
}
}
//The content will hide when the mouse is being removed from the target
function moveOut(){
  card.forEach(e =>{
    e.addEventListener('mouseleave', ()=>{
      cardContent.forEach(e =>{
        e.style.transform = "translateY(75%)" ;
        e.style.transition = "transform 500ms ease";
      })
    })
  });
btn.forEach(e =>{e.addEventListener('click', ()=> {window.location.reload();})
});



}
//media query
x = window.matchMedia("(min-width: 1250px)")
moveIn(x) 
x.addListener(moveIn) 


