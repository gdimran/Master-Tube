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
inputSearch.onkeyup = function() {
    modal.style.display = "block";
  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}