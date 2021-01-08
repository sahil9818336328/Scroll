
const date = document.querySelector('#date');
const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');

// setting the date
date.innerHTML = new Date().getFullYear();


// adding links dynamically
toggleBtn.addEventListener('click',function(){
   // linksContainer.classList.toggle('show-links');
   const containerHeight = linksContainer.getBoundingClientRect().height;
   //console.log(containerHeight); 
   const linksHeight = links.getBoundingClientRect().height;
   //console.log(linksHeight);
   if(containerHeight === 0){
       linksContainer.style.height = `${linksHeight}px`;
   }else{
       linksContainer.style.height =0;
   }
});

// getting fixed navbar
window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    //console.log(navHeight);
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
    }else{
        navBar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }

});

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){

        e.preventDefault();


        const id = e.currentTarget.getAttribute('href').slice(1);
        const elem = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
          const fixedNav = navBar.classList.contains("fixed-nav");
          let position = elem.offsetTop - navHeight;//navbar needs to be fixed
          
        // console.log(navHeight);
        // console.log(containerHeight);


        //console.log(elem);
          if (!fixedNav) { //when navbar is not fixed
                position = position - navHeight;
            }
          if(navHeight > 82) { //small screen
                position = position + containerHeight;
             }
        //console.log(position);
        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    })
})