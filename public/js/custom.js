

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