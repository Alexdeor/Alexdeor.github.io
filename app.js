const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('showText')
    } else{
      entry.target.classList.remove('showText')
    }
  })
})


const hiddenItems = document.querySelectorAll('.hiddenText');
hiddenItems.forEach((el) => observer.observe(el));
