var width = screen.width
var height = screen.height

function openSidebar() {
  document.getElementById("sidebarMenuRight").style.width = "75%";
  document.getElementById("sidebarMenuRight").style.maxWidth = "500px";
}
function closeSidebar() {
  document.getElementById("sidebarMenuRight").style.width = "0";
}

if (window.innerWidth < 840) {
  document.getElementById(navBarSearch).style.visibility = "hidden";
} else {
  document.getElementById(navBarSearch).style.visibility = "visible";
}
