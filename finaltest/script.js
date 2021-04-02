// landing page fade out when scroll
jQuery(window).scroll(function() {
// 10 = The point you would like to fade the nav in.
	if (jQuery(window).scrollTop() > 10 ){
    jQuery("#landing").fadeOut("slow", function() {
       jQuery("#mainp").show();});
  } else {
    jQuery("#mainp").removeClass('show');
 	};
});

// menu bar resposive
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
	 closeMobileNavbar();
 } else {
	 openMobileNavbar();
 }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
 clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);
});

// turn off light
jQuery("#persoff").css('height', jQuery(document).height()).hide();
jQuery("body").on('click', function (e) {
jQuery("#persoff").toggle(false);
});
jQuery(".switch").on('click', function (e) {
e.stopPropagation();
jQuery("#persoff").toggle();
});
