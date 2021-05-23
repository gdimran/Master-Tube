// Get the modal
var modal = document.getElementById("search-modal");

// Get the button that opens the modal
var inputSearch = document.getElementById("search");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close-btn")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }
inputSearch.onfocus = function () {
  modal.style.display = "block";
}
// inputSearch.onkeyup = function () {
//   modal.style.display = "block";
// }
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//search result modal start
// Get the modal
var modal2 = document.getElementById("search-result-modal");

// Get the button that opens the modal
var inputSearch2 = document.getElementById("search-main");

inputSearch2.onkeyup = function () {
  if (inputSearch2.value === "") {
    modal2.style.display = "none";
  } else {
    modal2.style.display = "block";
  }
}


// inputSearch2.onkeyup = function () {
//   modal2.style.display = "block";
// }

window.onclick = function (event) {
  if (event.target.id != modal2) {
    modal2.style.display = "none";
  }
}
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }


// explore modal
// Get the modal
var exploreModal = document.getElementById("explore-modal");

// Get the button that opens the modal
var exploreOpener = document.getElementById("explore-opener");

// Get the <span> element that closes the modal
var spanClose = document.getElementsByClassName("modal-close-btn")[1];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }
exploreOpener.onclick = function () {
  exploreModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanClose.onclick = function () {
  exploreModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == exploreModal) {
    exploreModal.style.display = "none";
  }
}

