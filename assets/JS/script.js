// Navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
 const scrollTop = this.window.pageTOffset ||
 this.document.documentElement.scrollTop;
 
 if(scrollTop > lastScrollTop){
     navbar.style.top="-50px";
 }
 else{
    navbar.style.top="0";
 }
 lastScrollTop = scrollTop;
});