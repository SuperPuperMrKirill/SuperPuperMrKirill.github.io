// function toggle_vis(){
	// var menu_ul = document.getElementById("menu-ul");
	// alert(menu_ul.style.display);
	// menu_ul.style.display = menu_ul.style.display === "none" ? "flex" : "none";
// }

function toggle_vis(){
	$("#menu-ul").slideToggle();
}

function show_ul(){
	if ($(window).width() > 450)
		$("#menu-ul").css('display', 'flex');
	else
		$("#menu-ul").css('display', 'none');
}

$(window).resize(show_ul);