const btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', toggleMenu);
let fechar = document.getElementById('fechar')
const nav = document.getElementById('navResponsivo');
const logo = document.querySelector('.logo')
let icones = document.querySelector('.icones')
let menuIcon = document.getElementById('menuIcon')

function toggleMenu(){
    nav.style.display = 'block'
    btnMobile.style.display = 'block';
    icones.style.display = 'none'
}


function fecharMenu()
{
    nav.style.display = 'none';
    btnMobile.style.display = 'block';
    icones.style.display = 'none'
    

}


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navInfo");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    
    icones.style.display = "none"
   

   
  } else {
    navbar.classList.remove("sticky");
    
    icones.style.display = "flex"
    
  }
}


