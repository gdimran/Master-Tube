//jQuery.noConflict();

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

function addQueueOption() {
  var popup = document.getElementById("addToQue");
  popup.classList.toggle("show");
}

//==================overlay side bar===========================
function openOverlaySidebar() {
  document.getElementById("overSidepanel").style.display = "block";
  document.getElementById("pageOverlay").style.display = "block";
  document.getElementById("content").style.width = "calc(100% - 75px)";
}

function closeOverlaySidebar() {
  document.getElementById("overSidepanel").style.display = "none";
  document.getElementById("pageOverlay").style.display = "none";
  document.getElementById("content").style.width = "calc(100% - 75px)";
}

//=============expandable side bar=============================

window.onload = function setContentWidth() {
  var element = document.getElementById('exSidepanel');
  if (typeof (element) != 'undefined' && element != null) {
    document.getElementById("side-bar").style.display = "none";
    document.getElementById("content").style.width = "calc(100% - 260px)";
    document.getElementById("content").style.marginLeft = "185px";
  } else {
    document.getElementById("content").style.width = "calc(100% - 75px)";
  }
}



function showExpandsideBar() {
  var x = document.getElementById("exSidepanel");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("side-bar").style.display = "none";
    document.getElementById("content").style.marginLeft = "185px";
    document.getElementById("content").style.width = "calc(100% - 260px)";
  } else {
    x.style.display = "none";
    document.getElementById("side-bar").style.display = "block";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("content").style.width = "calc(100% - 75px)";
  }

}

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


//============comment div show============
var commentInput = document.getElementById("comment-input-field");
var commentSubmit = document.getElementById("commentSubmit");
commentInput.onkeyup = function () {
  commentSubmit.style.display = "block";
}

function closeComment() {
  commentSubmit.style.display = "none";
}

function replyComment() {
  document.getElementById("replay-input").style.display = "block";
}


//============set id using js============

// var singleElements = document.querySelectorAll('.single-video-content');

// // Set their ids
// for (var i = 0; i < singleElements.length; i++) {
//   singleElements[i].id = 'singleVideo-' + i;
// }

//==================dark mode theme===========================
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    document.getElementById("logo-dark").style.display = "block";
    document.getElementById("logo-light").style.display = "none";
    // if it has been enabled, turn it off  
  } else {
    disableDarkMode();
    document.getElementById("logo-dark").style.display = "none";
    document.getElementById("logo-light").style.display = "block";
  }
});


