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


const btn = document.querySelectorAll('.button');

// Create a MediaQueryList object for the specified media query
const mediaQuery = window.matchMedia("(min-width: 1200px)");

// Function to be executed when the media query matches
function handleMediaQuery(event) {
  if (event.matches) {
    // Media query condition is met (viewport width is at least 1200px)
    console.log("Media query Match!");
    btn.forEach(event =>{
      event.addEventListener('click', (e) =>{
        console.log(e)
      document.location.reload();
      })});
      
  } else {
    // Media query condition is not met (viewport width is less than 1200px)
    console.log("Media query does not match!");
 
  }
}

// Initial check of the media query state and attach event listener for changes
handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);
