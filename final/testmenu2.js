// document.addEventListener("DOMContentLoaded", function(event) {
//   alert('Hey')
// });

jQuery(window).ready( function(){
$(window).scroll(function() {
// 10 = The point you would like to fade the nav in.
	if ($(window).scrollTop() > 10 ){
    $("#landing").fadeOut("slow", function() {
       $("#mainp").show();});
  } else {
    $("#mainp").removeClass('show');
 	};
});
});

document.addEventListener("DOMContentLoaded", function() {
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    alert('Yo');
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  alert('Yo');
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);
});
