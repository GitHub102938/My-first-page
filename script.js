window.onscroll = function showHeader() {
	let header = document.querySelector(".header");
	if(window.pageYOffset > 200) {
		header.classList.add("nav-list_scrolled");
	} else {
		header.classList.remove("nav-list_scrolled");
	}
}
document.querySelector(".humburger").addEventListener("click", function(){
	document.querySelector(".nav").style.display = "block";
});
document.querySelector(".humburger-line").addEventListener("click", function(){
	document.querySelector(".nav").style.display = "none";
});