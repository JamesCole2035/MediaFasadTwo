let hamburgerIcon = document.getElementById("nav-toggle");
let mainMenu = document.getElementById("menu");
let menuList = document.getElementById("menu-list");
let wrapper = document.getElementById("wrapper");
function activateClass() {	
    if (hamburgerIcon.className == "active" ) {       
        hamburgerIcon.className="";
        mainMenu.className="menu-show out"; 
		setTimeout(disableClass, 900);		  	 		
    } 
    else {
       hamburgerIcon.className="active";		
       mainMenu.className="menu-show in";       
    } 
}
hamburgerIcon.addEventListener("click", activateClass);  
disableClass = () => {        
    mainMenu.className="menu";		
} 
function reloadClasses() {
    let val = window.getComputedStyle(wrapper).width;
    console.log(window.getComputedStyle(wrapper).width);
    if (window.getComputedStyle(wrapper).width > '585px') { 
        disableClass(); 
        hamburgerIcon.className=""; 
    } else {}
 };
window.addEventListener(`resize`, reloadClasses);