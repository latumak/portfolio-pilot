// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').
//  forEach(link => {
//      if(link.href.includes('${activePage}')) {
//          console.log('${activePage}');
//         //  link.classList.add('active');
//      }
//  })


// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').
//  forEach(link => {
//     console.log(link.href)
//  })




//  WORKING BELOW

// https://www.youtube.com/watch?v=JkuiKeNS2mg
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})


// https://stackabuse.com/scroll-to-top-in-vanilla-javascript/
const scrollBtn = document.querySelector(".btn");

const btnVisibility = () => {
    if (window.scrollY > 20) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
