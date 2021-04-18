AOS.init();

// for first page typewritter effect
var i = 0;
var txt = 'how to make a human being?';
var speed = 100;

let iClicked=document.getElementById("demo");

iClicked.addEventListener('click', event=>{
	document.getElementById("demo").innerHTML =" ";
	if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  setTimeout("showButton()", 4000);
})

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function showButton() {
    document.getElementById("button1").style.display = "inline";
}
