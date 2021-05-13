

 //video open-close 
 var videoPlayer=document.getElementById("videoPlayer");
 var singleVideo=document.getElementById("singleVideo");

 function stopVideo(){
    document.getElementById("videoPlayer").style.display="none";
 }
 function playVideo(file){
    document.getElementById("singleVideo").src=file;
    document.getElementById("videoPlayer").style.display="block";
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