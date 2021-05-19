//=============expandable side bar=============================
function showExpandsideBar() {
  var x = document.getElementById("exSidepanel");
  if (x.style.width = "0") {
    x.style.width = "250px";
    document.getElementById("side-bar").style.display = "none";
    document.getElementById("content").style.marginLeft = "185px";
  } else {
    x.style.width = "0";
    document.getElementById("side-bar").style.display = "block";
    document.getElementById("content").style.marginLeft = "0";
  }
}
// var expandBar = document.getElementById("exSidepanel");
// function openNav() {
//   document.getElementById("exSidepanel").style.width = "250px";
//   document.getElementById("side-bar").style.display = "none";
//   document.getElementById("content").style.marginLeft = "185px";
// }

// function closeNav() {
//   document.getElementById("exSidepanel").style.width = "0";
//   document.getElementById("side-bar").style.display = "block";
//   document.getElementById("content").style.marginLeft = "0";
// }
// window.onclick = function (event) {
//   if (event.target == document.getElementById("exSidepanel")) {
//     expandBar.style.width = "0";
//   }
// }

//video open-close 
var videoPlayer = document.getElementById("videoPlayer");
var singleVideo = document.getElementById("singleVideo");

function stopVideo() {
  document.getElementById("videoPlayer").style.display = "none";
}
function playVideo(file) {
  document.getElementById("singleVideo").src = file;
  document.getElementById("videoPlayer").style.display = "block";
}

//=============Tab content=================
function openDesc(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


//================popups=====================
function createOption() {
  var popup = document.getElementById("createOptionPopup");
  popup.classList.toggle("show");
}

function notificationFunc() {
  var popup = document.getElementById("notificationPopup");
  popup.classList.toggle("show");
}

function userAccountFunc() {
  var popup = document.getElementById("userSettingsPopup");
  popup.classList.toggle("show");
}
function videoOption() {
  var popup = document.getElementById("videoOptionPopup");
  popup.classList.toggle("show");
}

