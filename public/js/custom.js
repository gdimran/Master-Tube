//jQuery.noConflict();

//================popups=====================



function gustSettFunc() {
  var popup = document.getElementById("gustSettPopup");
  popup.classList.toggle("show");
}

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
function getBrowserSize() {
  var w, h;

  if (typeof window.innerWidth != 'undefined') {
    w = window.innerWidth; //other browsers
    h = window.innerHeight;
  }
  else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
    w = document.documentElement.clientWidth; //IE
    h = document.documentElement.clientHeight;
  }
  else {
    w = document.body.clientWidth; //IE
    h = document.body.clientHeight;
  }
  return { 'width': w, 'height': h };
}


if (parseInt(getBrowserSize().width) > 767) {
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

  //show expand side pannel
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
} else {
  document.getElementById("content").style.width = "calc(100%)";
  document.getElementById("side-bar").style.display = "none";
  document.getElementById("exSidepanel").style.display = "none";
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

