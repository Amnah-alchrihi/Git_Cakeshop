document.querySelector(".toggle-settings i").onclick = function(){

    this.classList.toggle(".fa-gear");

    document.querySelector(".settings-box").classList.toggle("open");
}

// switch colors
const colorsLi = document.querySelectorAll(" .colors-list li ") ;

colorsLi.forEach(li => {
    li.addEventListener("click" , (e) =>{
       
        //set color on root
        document.documentElement.style.setProperty("--section-color" , e.target.dataset.color ) ;
        //set color on local storage
        localStorage.setItem("color_option" , e.target.dataset.color );
        
        HandleActive(e);
    });
});


//check if there is local storage color
let mainColor = localStorage.getItem("color_option");
if(mainColor !== null){
    document.documentElement.style.setProperty("--section-color" ,mainColor) ;

    //remove active class color from all 
    document.querySelectorAll(".colors-list li ").forEach(ele => {
        ele.classList.remove("active");

        //add active class on element of data-color === local storge item
        if(ele.dataset.color === mainColor){
            ele.classList.add("active");

        }
    });
}
/*let linkss = document.querySelectorAll(".navbar-default .navbar-right a");

function scrollToSmeWhere(element){
   element.forEach(ele => {
       ele.addEventListener("click" , (e) =>{
           e.preventDefault(); 
           document.querySelector( e.target.dataset.section).scrollIntoView({
               behavior: "smooth" 
          });
       });
   } );
}
scrollToSmeWhere(linkss);
*/

 //Handle active function
 function HandleActive(ev){

    //remove active class from all span
    ev.target.parentElement.querySelectorAll(".active").forEach(ele => {
       ele.classList.remove("active");
   });
   ev.target.classList.add("active");
} 

//creat popup with the images
let ourGallery = document.querySelectorAll(".products img");
ourGallery.forEach(img =>{
    img.addEventListener("click" , (e) =>{
        
        //creat overLay
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        
        //append overlay to the body
        document.body.appendChild(overlay);

        //creat the popue box
        let popueBox = document.createElement("div");
        popueBox.className = "popue-box";
        
        if(img.alt !== null){
            //creat heading
            let heading = document.createElement("h3");

            //append heading to popupe box
            popueBox.appendChild(heading);

            //creat text to the headding
            let textHeading = document.createTextNode(img.alt);

            //append text to the heading
            heading.append(textHeading);
        }

        //creat popupe image
        let popupeImage = document.createElement("img") ;
        popupeImage.src = img.src ;
        
        //append image to the box
        popueBox.appendChild(popupeImage);

        //append popue box to the body
        document.body.appendChild(popueBox);

        //create the close button
        let closeButton = document.createElement("span") ;
        closeButton.className = "close-button";
        
        //create the close button text
        let closeButtonText = document.createTextNode("X") ;

        //append close button text to close button 
        closeButton.appendChild(closeButtonText);

        //append close button to the popupe box
        popueBox.appendChild(closeButton);

    });
});
 //close popup

 document.addEventListener("click" , e => {
     if(e.target.className === "close-button"){
         document.querySelector(".popue-box").remove();
         document.querySelector(".popup-overlay").remove();

     }
 })
