$(document).ready(function (){
    $(".carousel").carousel(
        {
            interval:2000
        });
    
          //  Nice Scroll 

         $("html").niceScroll();

    // Show gear-check
    $(".gear-check").click(function (){
        $(".color-option").fadeToggle();
    });
} );
    
/* Change website Colors */

// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty('--main-color', mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".color-option li").forEach(element => {

    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {

      // Add Active Class
      element.classList.add("active");

    }

  });

}
// Switch Colors
const colorsLi = document.querySelectorAll(".color-option li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  });

});

// Handle Active State
function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
  
      element.classList.remove("active");
  
    });
  
    // Add Active Class On Self
    ev.target.classList.add("active");
  
  }

  /* End Change Colors */ 

  /* Start Looding */
 window.onload = function(){
    setTimeout(function (){
        document.querySelector(".main").style.overflow = "auto";
    document.querySelector(".overlay").style.display = "none";
    },1000);
 }

  /* End Looding */
  
  /* Start Scroll Top */ 
let scrollButton = document.querySelector("#scroll-top");


window.onscroll = function () {
    
    if (this.pageYOffset > 400 ){
        scrollButton.style.display="block";
    }
    else {
        scrollButton.style.display="none";
    }
};
scrollButton.onclick = function () {
    window.scrollTo ({
        left:0,
        top:0,
        behavior:"smooth"
    });
};
  /* End Scroll Top */ 

