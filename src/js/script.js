let bannerWide = document.getElementById("banner-border-wide");
let bannerNarrow = document.getElementById("banner-border-narrow");
let authorPhoto = document.getElementById("author-photo");
let authorBorderPhoto = document.getElementById("author-border-photo");
let sq1 = document.getElementById("square-one");
let sq2 = document.getElementById("square-two");
window.onload = function() {
      let pageWidth = (window.getComputedStyle(wrapper).width);
      pageWidth = Number(pageWidth.substring(pageWidth.length-2,0));
      console.log(pageWidth);
      if (pageWidth >= 995) {
         bannerWide.style = "transform: translateX(-10px) translateY(-10px); transition: all .75s;";
         bannerNarrow.style = "transform: translateX(10px) translateY(10px); transition: all .75s;";
         sq1.style = "transform: rotate(90deg); transition: all .75s;"
         sq2.style = "transform: rotate(90deg); transition: all .75s;"
      }   
};
/* 
console.log(window.getComputedStyle(wrapper).width)
authorBorderPhoto.addEventListener("mousemove", () => {authorPhoto.style = "transform: translate(32px, 22px); transition: all .5s;"} )
authorBorderPhoto.addEventListener("mouseleave", () => {authorPhoto.style = "transform: translate(0, 0); transition: all .5s;"}) 
*/